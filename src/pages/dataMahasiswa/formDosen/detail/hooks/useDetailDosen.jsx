import { useState, useEffect } from "react";
import { baseAPI } from "../config/apiService";

const useDetailDosen = (id) => {
  const [dosen, setDosen] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDosen = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        const response = await baseAPI.get(`/v1/dosen/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Gagal mendapatkan data Dosen");
        }

        const data = response.data;
        setDosen(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDosen();
  }, [id]);

  const updateDosen = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const response = await baseAPI.put(`/v1/dosen/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Gagal memperbarui data Dosen");
      }

      // Tambahkan pesan sukses jika diperlukan
      console.log("Data Dosen berhasil diperbarui");
    } catch (error) {
      setError(error);
    }
  };

  return { dosen, loading, error, updateDosen };
};

export default useDetailDosen;
