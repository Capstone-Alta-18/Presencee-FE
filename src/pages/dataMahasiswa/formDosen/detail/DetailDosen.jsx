import React, { useEffect, useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { Form, Input } from "antd";
import { api } from "../../../../api/Index";

const DetailDosen = () => {
  const [dosen, setDosen] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getDosenById(id);

        if (response.data && response.data.status === "success") {
          setDosen(response.data.dosen);
        } else {
          // ID tidak valid, redirect ke halaman lain atau lakukan tindakan yang sesuai
          console.error("ID tidak valid");
          // Contoh: Redirect ke halaman Data Dosen
          return <Navigate to="/admin-page/data/data-dosen" replace />;
        }
      } catch (error) {
        console.error("Error saat mengambil data dosen:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!dosen) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Detail Dosen</h1>
      <Form layout="vertical">
        <Form.Item label="NIP">
          <Input value={dosen.nip} disabled />
        </Form.Item>
        <Form.Item label="Nama">
          <Input value={dosen.name} disabled />
        </Form.Item>
        <Form.Item label="Email">
          <Input value={dosen.email} disabled />
        </Form.Item>
        <Form.Item label="Phone">
          <Input value={dosen.phone} disabled />
        </Form.Item>
      </Form>
    </div>
  );
};

export default DetailDosen;
