import { message } from "antd";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../../api/Index";
import { useParams } from "react-router-dom";

export const useGetDataAbsen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const { user_id } = useParams();

  const getData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token"); // Mengambil token dari local storage
      const res = await api.getAbsen(user_id, token); // Menyertakan user_id dan token dalam permintaan API
      setData(res?.data.data);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, [user_id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return [isLoading, data, getData];
};
