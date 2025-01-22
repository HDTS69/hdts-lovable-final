import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export const ErrorState = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Suburb Not Found</h1>
        <p className="text-gray-600 mb-6">
          We couldn't find the suburb you're looking for. This could be because:
        </p>
        <ul className="text-gray-600 text-left list-disc pl-6 mb-8">
          <li>The URL might be incorrect</li>
          <li>The suburb page may have been moved</li>
          <li>The suburb may not be in our service area</li>
        </ul>
        <div className="space-x-4">
          <Button 
            onClick={() => navigate('/')}
            className="bg-teal-500 hover:bg-teal-600"
          >
            Go to Homepage
          </Button>
          <Button 
            onClick={() => window.history.back()}
            variant="outline"
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};