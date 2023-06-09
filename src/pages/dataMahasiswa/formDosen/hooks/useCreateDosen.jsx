import { useState } from "react";
import { message } from "antd";
import { api } from "../../../../api/Index";

const useCreateDosen = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createDosen = async (data) => {
    setLoading(true);
    setError(null);

    try {
      const userData = {
        email: data.email,
        name: data.name,
        password: data.password,
        telp: data.phone,
        role: "Dosen",
      };

      const userIdResponse = await api.signUp(userData);
      const id = userIdResponse.data.data.id;

      const dosenData = {
        name: data.name,
        email: data.email,
        nip: data.nip,
        image: data.image,
        phone: data.phone,
        user_id: id,
      };

      const response = await api.createDosen(dosenData);
      console("Create Dosen Response:", response.data);

      message.success("Data Dosen berhasil dibuat");

      setLoading(false);
    } catch (error) {
      console.error("Create Dosen Error:", error);
      setError(error);
      setLoading(false);
    }
  };

  return { loading, error, createDosen };
};

export default useCreateDosen;
