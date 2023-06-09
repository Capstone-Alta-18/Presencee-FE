import { useCallback, useState } from "react";
import { message } from "antd";
import { api } from "../../../config/apiService";

export const useGetMahasiswa = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getMahasiswa = useCallback(async () => {
    try {
      const res = await api.getMahasiswa();
      setData(res?.data.mahasiswas);
    } catch (err) {
      message.error(err?.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, data, getMahasiswa];
};

export const useGetDosen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getDosen = useCallback(async () => {
    try {
      const res = await api.getDosen();
      setData(res?.data.dosens);
    } catch (err) {
      message.error(err?.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, data, getDosen];
};

export const useGetUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getUsers = useCallback(async () => {
    try {
      const res = await api.getUsers(); // Mengambil data pengguna
      setData(res?.data.user);
    } catch (err) {
      message.error(err?.message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return [isLoading, data, getUsers];
};
