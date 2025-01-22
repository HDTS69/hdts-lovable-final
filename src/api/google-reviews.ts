export async function fetchGoogleReviews() {
  const GOOGLE_PLACES_API_KEY = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
  const PLACE_ID = import.meta.env.VITE_GOOGLE_PLACE_ID;

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`
    );

    const data = await response.json();

    if (!data.result) {
      throw new Error('No reviews found');
    }

    return {
      reviews: data.result.reviews?.sort((a: any, b: any) => b.time - a.time)?.slice(0, 6) || [],
      rating: data.result.rating || 0,
      totalRatings: data.result.user_ratings_total || 0
    };
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    throw error;
  }
} 