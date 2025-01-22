import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import Stripe from "https://esm.sh/stripe@14.21.0"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const { bookingData } = await req.json()
    
    if (!bookingData) {
      throw new Error('No booking data provided')
    }

    console.log('Creating checkout session with booking data:', bookingData)
    console.log('Using Stripe key starting with:', Deno.env.get('STRIPE_SECRET_KEY')?.substring(0, 8))

    const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
      apiVersion: '2023-10-16',
      httpClient: Stripe.createFetchHttpClient(),
    })

    // Test the Stripe connection
    try {
      const testConnection = await stripe.paymentMethods.list({ limit: 1 })
      console.log('Stripe connection test successful')
    } catch (stripeError) {
      console.error('Stripe connection test failed:', stripeError)
      throw new Error(`Stripe connection failed: ${stripeError.message}`)
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'aud',
          product_data: {
            name: 'Attendance Fee',
            description: 'HD Trade Services Attendance Fee',
          },
          unit_amount: 12000, // $120.00 in cents
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/booking?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.get('origin')}/booking?canceled=true`,
      customer_email: bookingData.email || undefined,
      metadata: {
        booking_id: bookingData.id,
        services: bookingData.services.join(', '),
      },
    })

    console.log('Checkout session created successfully:', {
      id: session.id,
      url: session.url
    })

    return new Response(
      JSON.stringify({ 
        url: session.url,
        sessionId: session.id,
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error in create-checkout function:', error)
    return new Response(
      JSON.stringify({ 
        error: error.message || 'An error occurred while creating the checkout session'
      }),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 400,
      },
    )
  }
})