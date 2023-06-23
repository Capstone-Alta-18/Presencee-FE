import { useCallback, useState } from "react";
import { api } from "../../../../api/Index";
import { message } from "antd";

export const useUpload = () => {
  const [isLoading, setIsLoading] = useState(false);

  const upload = useCallback(async (file, onSuccess) => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("image", file);

      const response = await api.uploadImage(formData);
      if (response.data.error === false) {
        const imageURL = response.data.url;
        onSuccess && onSuccess(imageURL);
        message.success("Image uploaded successfully!");
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      message.error(error.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, upload];
};
