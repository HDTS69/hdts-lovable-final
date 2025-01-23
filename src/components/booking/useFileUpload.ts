import { useState } from 'react';
import { supabase } from "@/integrations/supabase/client";

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export const useFileUpload = () => {
  const [isUploading, setIsUploading] = useState(false);

  const uploadFile = async (file: File) => {
    setIsUploading(true);
    try {
      // Check file size
      if (file.size > MAX_FILE_SIZE) {
        console.error('File too large');
        return null;
      }

      // Generate a unique filename
      const timestamp = new Date().getTime();
      const uniqueFilename = `${timestamp}-${file.name}`;

      // Upload file to Supabase
      const { data, error } = await supabase.storage
        .from('booking_files')
        .upload(`uploads/${uniqueFilename}`, file, {
          cacheControl: '3600',
          upsert: true,
        });

      if (error) {
        console.error('Error uploading file:', error.message);
        return null;
      }

      console.log('Uploaded file data:', data);
      return data.path;
    } finally {
      setIsUploading(false);
    }
  };

  return { uploadFile, isUploading };
};
