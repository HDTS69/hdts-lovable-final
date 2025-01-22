import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { corsHeaders } from "./fileUtils.ts"
import { generateEmailHtml, generateFileAttachmentsHtml, generatePlainTextEmail } from "./emailTemplates.ts"
import { BookingData, FileUrls } from "./types.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.7.1'

const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY')
const SUPABASE_URL = Deno.env.get('SUPABASE_URL')
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    if (!RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not set')
      throw new Error('RESEND_API_KEY is not configured')
    }

    const booking: BookingData = await req.json()
    console.log('Received booking:', booking)

    // Initialize Supabase client
    const supabase = createClient(
      SUPABASE_URL ?? '',
      SUPABASE_SERVICE_ROLE_KEY ?? ''
    )

    // Generate public URLs for files
    let fileUrls: FileUrls[] = [];
    if (booking.files && booking.files.length > 0) {
      fileUrls = await Promise.all(
        booking.files.map(async (filePath) => {
          console.log('Processing file path:', filePath);
          const fileName = filePath.split('/').pop() || '';
          const { data } = supabase.storage
            .from('booking_files')
            .getPublicUrl(filePath);

          console.log('Generated public URL:', data.publicUrl);
          
          return {
            originalName: fileName,
            publicUrl: data.publicUrl
          };
        })
      );
    }

    console.log('Generated file URLs:', fileUrls);

    // Generate file attachments HTML if files exist
    const fileAttachmentsHtml = generateFileAttachmentsHtml(fileUrls)
    
    // Generate both HTML and plain text versions
    const htmlContent = generateEmailHtml(booking, fileAttachmentsHtml)
    const plainTextContent = generatePlainTextEmail(booking, fileUrls)

    console.log('Sending email to Resend API...')
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'HD Trade Services <admin@hdtradeservices.com.au>',
        to: ['admin@hdtradeservices.com.au'],
        reply_to: booking.email,
        subject: 'New Booking Request',
        html: htmlContent,
        text: plainTextContent,
      }),
    })

    const responseData = await res.json()
    console.log('Resend API response:', responseData)

    if (res.ok) {
      return new Response(JSON.stringify(responseData), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      })
    } else {
      console.error('Error from Resend API:', responseData)
      return new Response(JSON.stringify({ error: responseData }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: res.status,
      })
    }
  } catch (error: any) {
    console.error('Error in send-booking-email function:', error)
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    })
  }
})