import { Briefcase, ChalkboardTeacher, Student, UsersThree } from "@phosphor-icons/react";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../api/Index";
import { message } from "antd";

export const DATA_DASHBOARD = [
  {
    id: 1,
    icon: <UsersThree size={60} weight="fill" />,
    title: "Admin Aktif",
    data: "not found",
  },
  {
    id: 2,
    icon: <ChalkboardTeacher size={60} weight="fill" />,
    title: "Jumlah Dosen",
    data: "not found",
  },
  {
    id: 3,
    icon: <Student size={60} weight="fill" />,
    title: "Jumlah Mahasiswa",
    data: "not found",
  },
  {
    id: 4,
    icon: <Briefcase size={60} weight="fill" />,
    title: "Data Absensi",
    data: "not found",
  },
];

export const useGetDosen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [dosenCount, setDosenCount] = useState(0); // Add new state variable

  const getData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.getDosen(token);
      setData(res?.data.dosens);
      setDosenCount(res?.data.dosens.length); // Update dosenCount with the length of the dosens array
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

export const useGetMahasiswa = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const getData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token"); // Mengambil token dari local storage
      const res = await api.getMahasiswa(token); // Menyertakan token dalam permintaan API
      setData(res?.data.mahasiswas);
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

export const useGetUser = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const getData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await api.getUsers(token);
      setData(res?.data.data);
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

export const useGetAbsen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const getData = useCallback(async () => {
    try {
      const token = localStorage.getItem("token"); // Mengambil token dari local storage
      const res = await api.getAbsen(token); // Menyertakan token dalam permintaan API
      setData(res?.data.data);
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