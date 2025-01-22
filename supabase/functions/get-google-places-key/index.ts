import { serve } from "https://deno.land/std@0.177.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_API_KEY');
    if (!apiKey) {
      throw new Error('API key not configured');
    }
    
    console.log('Successfully retrieved Google Places API key');
    
    return new Response(
      JSON.stringify({ 
        apiKey,
        status: 'success' 
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json'
        },
        status: 200,
      },
    )
  } catch (error) {
    console.error('Error in get-google-places-key:', error.message);
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        status: 'error'
      }),
      { 
        headers: { 
          ...corsHeaders, 
          'Content-Type': 'application/json'
        },
        status: 500,
      },
    )
  }
})