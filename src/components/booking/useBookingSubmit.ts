import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { useFileUpload } from './useFileUpload';
import { useEmailNotification } from './useEmailNotification';
import { useBookingValidation } from './useBookingValidation';

interface BookingData {
  name: string;
  email: string;
  phone: string;
  address: string;
  services: string[];
  preferredTime: string;
  message: string;
  files: File[];
}

export const useBookingSubmit = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { uploadFile } = useFileUpload();
  const { sendEmailNotification } = useEmailNotification();
  const { validateBooking } = useBookingValidation();

  const handleSubmit = async (bookingData: BookingData): Promise<boolean> => {
    if (!validateBooking(bookingData)) {
      return false;
    }
    
    setIsLoading(true);

    try {
      // Upload files first
      const uploadPromises = bookingData.files.map(file => uploadFile(file));
      const uploadedFilePaths = await Promise.allSettled(uploadPromises);

      // Filter out any failed uploads and get successful paths
      const validFilePaths = uploadedFilePaths
        .filter((result): result is PromiseFulfilledResult<string | null> => 
          result.status === 'fulfilled' && result.value !== null
        )
        .map(result => result.value);

      console.log('Creating booking record with files:', validFilePaths);
      
      const { data: booking, error: bookingError } = await supabase
        .from('bookings')
        .insert({
          name: bookingData.name,
          email: bookingData.email,
          phone: bookingData.phone,
          address: bookingData.address,
          services: bookingData.services,
          preferred_time: bookingData.preferredTime,
          message: bookingData.message,
          files: validFilePaths,
          status: 'pending'
        })
        .select()
        .single();

      if (bookingError) {
        console.error('Booking error:', bookingError);
        throw bookingError;
      }

      console.log('Booking created:', booking);
      
      await sendEmailNotification(booking);

      toast({
        title: "Success!",
        description: "Your booking has been submitted. We'll be in touch shortly.",
      });

      return true;
      
    } catch (error) {
      console.error('Error creating booking:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your booking. Please try again or contact support if the issue persists.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { handleSubmit, isLoading };
};