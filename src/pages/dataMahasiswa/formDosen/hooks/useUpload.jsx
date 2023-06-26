import { useCallback, useState } from "react";
import { api } from "../../../../api/Index";

const useUpload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);

  const upload = useCallback(async (body) => {
    try {
      setIsLoading(true);

      const response = await api.uploadImage(body);
      if (response) {
        const imageUrl = response.data.url;
        setImageUrl(imageUrl);
      } else {
        throw new Error(response.message);
      }
    } catch (error) {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, imageUrl, upload];
};

export default useUpload;
