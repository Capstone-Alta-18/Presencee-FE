import { message } from "antd";
import { useCallback, useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { api } from "../../../../api/Index";

export const useGetDataJadwalId = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const { id_jadwal } = useParams();

  const getData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token"); // Mengambil token dari local storage
      const res = await api.getJadwalByID(id_jadwal, token); // Menyertakan dosen_id dan token dalam permintaan API
      setData(res?.data.data);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, [id_jadwal]);

  useEffect(() => {
    getData();
  }, [getData]);

  return [isLoading, data, getData];
};
