import { useCallback, useState } from "react";
import { message } from "antd";
import { api } from "../../../config/apiService";

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(false);

  const login = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true);
      const res = await api.login(body);

      console.log({ res });

      if (res) {
        localStorage.setItem("access_token", res.data?.token);
        message.open({
          type: "success",
          content: "Berhasil Login",
        });
        onSuccess && onSuccess();
      }
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, login];
};
