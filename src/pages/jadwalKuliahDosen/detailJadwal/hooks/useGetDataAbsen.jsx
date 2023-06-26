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
      const res = await api.getAbsenDosen(); // Menyertakan user_id dan token dalam permintaan API
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

  const confirm = useCallback(
    async (body) => {
      try {
        await api.updateAbsen(body);
        message.success("Konfirmasi berhasil");
        getData();
      } catch (err) {
        message.error(`Terjadi kesalahan: ${err?.message}`);
      }
    },
    [getData]
  );

  useEffect(() => {
    getData();
  }, [getData]);

  return [isLoading, data, getData, confirm];
};
