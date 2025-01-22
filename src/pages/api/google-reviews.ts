import type { NextApiRequest, NextApiResponse } from 'next';

const GOOGLE_PLACES_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY;
const PLACE_ID = process.env.NEXT_PUBLIC_GOOGLE_PLACE_ID;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!GOOGLE_PLACES_API_KEY || !PLACE_ID) {
    return res.status(500).json({ error: 'Missing API configuration' });
  }

  try {
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&key=${GOOGLE_PLACES_API_KEY}`
    );

    const data = await response.json();

    if (!data.result) {
      throw new Error('No reviews found');
    }

    // Format and sort reviews
    const reviews = data.result.reviews
      ?.sort((a: any, b: any) => b.time - a.time)
      ?.slice(0, 6) || []; // Get latest 6 reviews

    const rating = data.result.rating || 0;
    const totalRatings = data.result.user_ratings_total || 0;

    res.status(200).json({ 
      reviews,
      rating,
      totalRatings
    });
  } catch (error) {
    console.error('Error fetching Google reviews:', error);
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
} 