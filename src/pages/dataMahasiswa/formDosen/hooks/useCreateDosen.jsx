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
        image: null, // Inisialisasi dengan null
        phone: data.phone,
        user_id: id,
      };

      const response = await api.createDosen(dosenData);
      console.log("Respon Membuat Dosen:", response.data);

      // Jika pembuatan dosen berhasil, perbarui URL gambar
      if (response.status === 200) {
        const dosenId = response.data.data.id;
        const fileData = new FormData();
        fileData.append("image", data.image);

        const uploadResponse = await api.uploadDosenImage(dosenId, fileData);
        console.log("Respon Upload Gambar:", uploadResponse.data);

        if (uploadResponse.status === 200) {
          const imageUrl = uploadResponse.data.url;

          // Perbarui properti image dengan URL gambar
          dosenData.image = imageUrl;

          // Update gambar pada images
          await api.updateDosenImage(dosenId, imageUrl);
        }
      }

      message.success("Data Dosen berhasil dibuat");

      setLoading(false);
    } catch (error) {
      console.error("Error Membuat Dosen:", error);
      setError(error);
      setLoading(false);
    }
  };

  return { loading, error, createDosen };
};

export default useCreateDosen;
