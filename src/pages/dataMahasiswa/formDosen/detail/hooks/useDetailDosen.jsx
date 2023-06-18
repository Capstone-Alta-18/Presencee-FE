import { useState, useEffect } from "react";

const useDetailDosen = (id) => {
  const [dosen, setDosen] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDosen = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token"); // Mengambil token dari local storage
        const url = `http://testing.biaracmpny.my.id/v1/dosen/${id}`;

        const response = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`, // Menggunakan token dalam header Authorization
          },
        });

        if (!response.ok) {
          throw new Error("Gagal mendapatkan data Dosen");
        }

        const data = await response.json();
        setDosen(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDosen();
  }, [id]);

  const updateDosen = async (id, data) => {
    // Fungsi updateDosen yang sesuai dengan kebutuhan Anda
    // ...
  };

  return { dosen, loading, error, updateDosen };
};

export default useDetailDosen;
