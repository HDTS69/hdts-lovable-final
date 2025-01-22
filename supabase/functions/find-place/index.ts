// @deno-types="https://deno.land/std@0.168.0/http/server.ts"
import { serve } from "https://deno.land/std@0.177.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    const API_KEY = Deno.env.get('GOOGLE_API_KEY');

    if (!API_KEY) {
      throw new Error('Missing API key');
    }

    // Using Text Search API instead of Find Place
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/textsearch/json?` +
      new URLSearchParams({
        query: "HD Trade Services Emergency Plumber Sydney",
        key: API_KEY,
        type: "plumber",
        region: "au"
      })
    );

    const data = await response.json();
    console.log('Place search response:', data);

    if (data.status === 'REQUEST_DENIED') {
      throw new Error(`API Error: ${data.error_message}`);
    }

    return new Response(
      JSON.stringify(data),
      { 
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        } 
      }
    );
  } catch (error) {
    console.error('Error finding place:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        }
      }
    );
  }
}); 