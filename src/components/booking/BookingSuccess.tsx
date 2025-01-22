import { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";

export const BookingSuccess = () => {
  const [searchParams] = useSearchParams();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const success = searchParams.get('success');
    const sessionId = searchParams.get('session_id');
    const canceled = searchParams.get('canceled');
    
    if (success === 'true' && sessionId) {
      toast({
        title: "Booking Successful!",
        description: "Thank you for your booking. We'll be in touch shortly to confirm your appointment.",
      });
      navigate('/');
    } else if (canceled === 'true') {
      toast({
        title: "Booking Canceled",
        description: "Your booking was canceled. Please try again if you'd like to schedule a service.",
        variant: "destructive",
      });
      navigate('/');
    }
  }, [searchParams, toast, navigate]);

  return null;
};