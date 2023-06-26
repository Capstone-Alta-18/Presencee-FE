import { message } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../../api/Index";

export const useDeleteJadwal = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const { id_jadwal } = useParams();

  const deleteJadwalByID = async () => {
    try {
      const token = localStorage.getItem("token"); // Mengambil token dari local storage
      const res = await api.deleteJadwalByID(id_jadwal, token); // Menyertakan id_jadwal dan token dalam permintaan API
      setData(res?.data.data);
      message.success("Jadwal kuliah berhasil dihapus");
    } catch (err) {
      message.error("Gagal menghapus jadwal kuliah");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteJadwal = useCallback(async () => {
    setIsLoading(true);
    await deleteJadwalByID();
  }, []);

  useEffect(() => {
    if (id_jadwal) {
      deleteJadwal();
    }
  }, [id_jadwal, deleteJadwal]);

  return [isLoading, data, deleteJadwal];
};
