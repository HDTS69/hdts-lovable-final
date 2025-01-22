import { useToast } from "@/hooks/use-toast";

interface BookingData {
  services: string[];
}

export const useBookingValidation = () => {
  const { toast } = useToast();

  const validateBooking = (bookingData: BookingData): boolean => {
    if (bookingData.services.length === 0) {
      toast({
        title: "Error",
        description: "Please select at least one service.",
        variant: "destructive",
      });
      return false;
    }
    return true;
  };

  return { validateBooking };
};