import { useState, useEffect } from 'react';
import { fetchGoogleReviews } from '../api/google-reviews';

export const TestGoogleReviews = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const testAPI = async () => {
      try {
        const result = await fetchGoogleReviews();
        setData(result);
        console.log('API Response:', result);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch reviews');
        console.error('API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    testAPI();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Google Reviews Test</h2>
      <pre className="bg-gray-100 p-4 rounded overflow-auto max-w-full">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  );
}; 