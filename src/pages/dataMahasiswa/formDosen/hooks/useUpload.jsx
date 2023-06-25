import { useCallback, useState } from "react";
import { api } from "../../../../api/Index";

const useUpload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const upload = useCallback(async (body) => {
    try {
      setIsLoading(true);

      const response = await api.uploadImage(body);
      console.log("Upload Image Response:", response);
      if (response.error === false) {
        const imageURL = response.url;
        setImageUrl(imageURL);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      console.error("Upload Error:", error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, imageUrl, upload];
};

export default useUpload;
