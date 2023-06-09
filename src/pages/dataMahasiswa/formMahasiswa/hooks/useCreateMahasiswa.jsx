import { useState } from "react";
import { message } from "antd";
import { api } from "../../../../api/Index";

const useCreateMahasiswa = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createMahasiswa = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const userData = {
        email: data.email,
        name: data.name,
        password: data.password,
        telp: data.phone,
        role: "Mahasiswa",
      };

      const userIdResponse = await api.signUp(userData);
      const id = userIdResponse.data.data.id;

      const mahasiswaData = {
        name: data.name,
        email: data.email,
        nim: data.nim,
        image: data.image,
        phone: data.phone,
        fakultas: data.fakultas,
        jurusan: data.jurusan,
        tahun_masuk: data.tahun_masuk,
        ipk: data.ipk,
        user_id: id,
      };

      const response = await api.createMahasiswa(mahasiswaData);
      console("Create Mahasiswa Response:", response.data);

      message.success("Data Mahasiswa berhasil dibuat");

      setLoading(false);
    } catch (error) {
      console.error("Create Mahasiswa Error:", error);
      setError(error);
      setLoading(false);
    }
  };

  return { loading, error, createMahasiswa };
};

export default useCreateMahasiswa;
