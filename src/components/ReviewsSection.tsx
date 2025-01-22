import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import { useQuery } from '@tanstack/react-query';
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast"
import React from 'react';

interface Review {
  name: string;
  rating: number;
  text: string;
  relativePublishTimeDescription: string;
}

interface PlaceDetails {
  reviews: Review[];
  rating: number;
  userRatingsTotal: number;
}

async function fetchGoogleReviews(): Promise<PlaceDetails> {
  const { data, error } = await supabase.functions.invoke('get-google-reviews');
  
  if (error) {
    console.error('Error fetching reviews:', error);
    throw error;
  }

  return data;
}

const ReviewSkeleton = () => (
  <div className="flex flex-col items-center p-6 rounded-lg shadow-sm border border-gray-100 animate-pulse">
    <div className="w-32 h-4 bg-gray-200 rounded mb-2" />
    <div className="flex items-center mb-3 space-x-1">
      {[...Array(5)].map((_, i) => (
        <div key={i} className="w-4 h-4 bg-gray-200 rounded-full" />
      ))}
    </div>
    <div className="w-full h-16 bg-gray-200 rounded" />
  </div>
);

const ErrorFallback = () => (
  <div className="text-center p-6 bg-red-50 rounded-lg">
    <h3 className="text-red-700 font-semibold mb-2">Unable to load reviews</h3>
    <p className="text-red-600">Please check back later</p>
  </div>
);

export const ReviewsSection = () => {
  const { toast } = useToast();
  const [visibleReviews, setVisibleReviews] = useState(3);
  
  const { data, isLoading, error } = useQuery({
    queryKey: ['googleReviews'],
    queryFn: fetchGoogleReviews,
    staleTime: 1000 * 60 * 5, // Cache for 5 minutes
  });

  // Handle error separately
  React.useEffect(() => {
    if (error) {
      toast({
        title: "Error loading reviews",
        description: "Please try again later",
        variant: "destructive",
      });
      console.error('Review fetch error:', error);
    }
  }, [error, toast]);

  const reviews = data?.reviews || [];
  const rating = data?.rating || 5;
  const totalRatings = data?.userRatingsTotal || 0;

  const handleShowMore = () => {
    setVisibleReviews(prev => prev + 3);
  };

  if (isLoading) {
    return (
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-teal-700">
              What Our Customers Say
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <ReviewSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <ErrorFallback />
        </div>
      </section>
    );
  }

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-6 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-teal-700">
            What Our Customers Say
          </h2>
          <div className="flex items-center space-x-1">
            <Star className="h-6 w-6 fill-yellow-400 text-yellow-400" />
            <span className="text-lg text-gray-600">
              {rating.toFixed(1)} out of 5 based on {totalRatings} reviews
            </span>
          </div>
          <Button 
            className="bg-teal-600 hover:bg-teal-700 text-white"
            onClick={() => window.open('https://maps.app.goo.gl/mCELazkBkn6gobCh9', '_blank')}
          >
            Review us on Google
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.slice(0, visibleReviews).map((review, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 rounded-lg shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md bg-white"
            >
              <h3 className="font-semibold text-gray-800 mb-2">
                {review.name}
              </h3>
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-gray-600 text-center text-sm">
                {review.text}
              </p>
            </div>
          ))}
        </div>

        {visibleReviews < reviews.length && (
          <div className="text-center mt-8">
            <Button
              onClick={handleShowMore}
              className="bg-teal-600 hover:bg-teal-700 text-white"
            >
              Load More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};