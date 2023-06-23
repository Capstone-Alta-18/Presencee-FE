import { useCallback, useState, useEffect } from "react";
import { message } from "antd";
import { api } from "../../../../api/Index";

export const useGetJadwalDosen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();

  const getData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token"); // Mengambil token dari local storage
      const res = await api.getDosen(token); // Menyertakan token dalam permintaan API
      setData(res?.data.dosens);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return [isLoading, data, getData];
};
