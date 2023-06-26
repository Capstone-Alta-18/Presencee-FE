import { message } from "antd";
import { useCallback, useEffect, useState } from "react";
import { api } from "./../../../api/Index";

export const useGetJadwalDosen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const dosen_id = localStorage.getItem("dosen_id"); // Mendapatkan dosen_id dari local storage

  const getData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token"); // Mengambil token dari local storage
      const res = await api.getJadwalDosenById(dosen_id, token); // Menyertakan dosen_id dan token dalam permintaan API
      setData(res?.data.data);
    } catch (err) {
      message.open({
        type: "error",
        content: `${err?.message}`,
      });
    } finally {
      setIsLoading(false);
    }
  }, [dosen_id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return [isLoading, data, getData];
};
