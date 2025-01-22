// @deno-types="https://deno.land/std@0.168.0/http/server.ts"
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
    const PLACE_ID = Deno.env.get('GOOGLE_PLACE_ID');
    const API_KEY = Deno.env.get('GOOGLE_API_KEY');

    console.log('Environment check:', {
      hasPlaceId: !!PLACE_ID,
      hasApiKey: !!API_KEY,
    });

    if (!PLACE_ID || !API_KEY) {
      throw new Error('Missing environment variables');
    }

    const url = `https://maps.googleapis.com/maps/api/place/details/json`;
    const params = new URLSearchParams({
      place_id: PLACE_ID,
      key: API_KEY,
      fields: 'reviews,rating,user_ratings_total',
      reviews_sort: 'most_relevant'
    });

    console.log('Requesting URL:', `${url}?${params.toString().replace(API_KEY, 'REDACTED')}`);

    const response = await fetch(`${url}?${params.toString()}`);
    const data = await response.json();

    if (data.status === 'REQUEST_DENIED') {
      console.error('API Key Error:', data.error_message);
      throw new Error('API configuration error - please contact support');
    }

    if (data.status !== 'OK') {
      console.error('Google API Error:', data);
      throw new Error(data.error_message || 'Failed to fetch reviews');
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
    console.error('Error in get-google-reviews:', error);
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        timestamp: new Date().toISOString()
      }),
      { 
        status: 500,
        headers: { 
          ...corsHeaders,
          'Content-Type': 'application/json' 
        }
      }
    );
  }
})