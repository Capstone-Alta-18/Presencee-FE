import { useCallback, useState } from "react";
import { message } from "antd";
import { api } from "../../../api/Index";

export const useLoginDosen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const loginDosen = useCallback(async (body, onSuccess) => {
    try {
      setIsLoading(true);
      const res = await api.loginDosen(body);

      console.log({ res });

      if (res) {
        localStorage.setItem("token", res.data?.token);
        localStorage.setItem("dosen_id", res.data?.data?.dosen?.ID);
        message.success("Berhasil Login");
        onSuccess && onSuccess();
      }
    } catch (err) {
      message.error(err?.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, loginDosen];
};
