import { message } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../../api/Index";

export const useGetDataJadwalId = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const { id_jadwal } = useParams();

  const getData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await api.getJadwalByID(id_jadwal, token);
      setData(response?.data.data);
    } catch (error) {
      message.error(error?.message);
    } finally {
      setIsLoading(false);
    }
  }, [id_jadwal]);

  useEffect(() => {
    getData();
  }, [getData]);

  return [isLoading, data, getData];
};
