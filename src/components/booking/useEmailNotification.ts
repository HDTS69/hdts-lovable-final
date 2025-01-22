import { supabase } from "@/integrations/supabase/client";

export const useEmailNotification = () => {
  const sendEmailNotification = async (booking: any) => {
    try {
      const emailResponse = await supabase.functions.invoke('send-booking-email', {
        body: booking,
      });

      if (emailResponse.error) {
        console.error('Email error:', emailResponse.error);
        return false;
      }
      
      console.log('Email sent successfully');
      return true;
    } catch (error) {
      console.error('Error sending email:', error);
      return false;
    }
  };

  return { sendEmailNotification };
};