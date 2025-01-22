const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Fetching Instagram token from environment...');
    const accessToken = Deno.env.get('INSTAGRAM_ACCESS_TOKEN');
    
    if (!accessToken) {
      console.error('INSTAGRAM_ACCESS_TOKEN not found in environment');
      return new Response(
        JSON.stringify({ 
          error: "INSTAGRAM_ACCESS_TOKEN not found",
          message: "The Instagram access token is not configured in the environment"
        }),
        { 
          status: 404, 
          headers: { 
            ...corsHeaders,
            "Content-Type": "application/json" 
          } 
        }
      );
    }

    // Validate token by making a test request to Instagram API
    try {
      const testResponse = await fetch(
        `https://graph.instagram.com/me?fields=id&access_token=${accessToken}`
      );
      
      if (!testResponse.ok) {
        throw new Error(`Instagram API test failed: ${testResponse.status}`);
      }
      
      console.log('Instagram token validated successfully');
    } catch (error) {
      console.error('Instagram token validation failed:', error);
      return new Response(
        JSON.stringify({ 
          error: "Invalid token",
          message: "The Instagram access token is invalid or expired"
        }),
        { 
          status: 401, 
          headers: { 
            ...corsHeaders,
            "Content-Type": "application/json" 
          } 
        }
      );
    }

    console.log('Successfully retrieved Instagram token');
    return new Response(
      JSON.stringify({ accessToken }),
      { 
        status: 200, 
        headers: { 
          ...corsHeaders,
          "Content-Type": "application/json" 
        } 
      }
    );
  } catch (error) {
    console.error('Error fetching Instagram token:', error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        message: "An unexpected error occurred while fetching the Instagram token"
      }),
      { 
        status: 500, 
        headers: { 
          ...corsHeaders,
          "Content-Type": "application/json" 
        } 
      }
    );
  }
});