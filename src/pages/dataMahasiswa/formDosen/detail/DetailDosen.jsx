import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Form, Input, Space, Button, message } from "antd";
import { api } from "../../../../api/Index";
import "./detailupdate.css";
import Dragger from "antd/es/upload/Dragger";
import { InboxOutlined } from "@ant-design/icons";

const DetailDosen = () => {
  const [dosen, setDosen] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getDosenById(id);

        if (response.data && response.data.status === "success") {
          setDosen(response.data.dosen);
        } else {
          console.error("ID tidak valid");
          // Contoh: Redirect ke halaman Data Dosen
          return <Navigate to="/admin-page/data/data-dosen" replace />;
        }
      } catch (error) {
        console.error("Error saat mengambil data dosen:", error);
      }
    };

    fetchData();
  }, [id, navigate]);

  if (!dosen) {
    return <div>Loading...</div>;
  }

  const handleUpdate = async () => {
    try {
      const { password, ...dosenData } = dosen;

      if (password) {
        const passwordUpdateResponse = await api.updateUserDosen(dosen.user_id, {
          user_id: dosen.user_id,
          password,
        });

        if (passwordUpdateResponse.data && passwordUpdateResponse.data.status === "success") {
          ("");
        } else {
          ("");
        }
      }

      const dosenUpdateResponse = await api.updateDosen(id, dosenData);

      if (dosenUpdateResponse.data && dosenUpdateResponse.data.status === "success") {
        message.success("Data berhasil diperbarui");
        navigate("/admin-page/data/data-dosen");
      } else {
        message.error("Gagal memperbarui data");
      }
    } catch (error) {
      console.error("Error saat memperbarui data:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await api.deleteDosen(id);

      if (response.data && response.data.status === "success") {
        message.success("Data berhasil dihapus");
        navigate("/admin-page/data/data-dosen");
      } else {
        message.error("Gagal menghapus data");
      }
    } catch (error) {
      console.error("Error saat menghapus data:", error);
    }
  };

  return (
    <div className="container-dosen">
      <div className="title-dosen">
        <h1>Data Dosen</h1>
      </div>

      <div className="container-form-dosen">
        <div className="row">
          <div className="upload-container-dosen">
            <div className="upload-container-detail">{dosen.image && <img src={dosen.image} alt="Mahasiswa" className="uploaded-image" width={300} height={400} />}</div>
          </div>
          <div className="form-container-dosen">
            <Form name="validateOnly" layout="vertical" autoComplete="off" initialValues={dosen} onFinish={handleUpdate}>
              <Form.Item className="text-form-dosen" name="name" label="Nama" rules={[{ message: "Silakan masukkan nama Anda!" }]}>
                <Input className="input-dosen" onChange={(e) => setDosen({ ...dosen, name: e.target.value })} />
              </Form.Item>
              <Form.Item className="text-form-dosen" name="nip" label="NIP" rules={[{ message: "Silakan masukkan NIP Anda!" }]}>
                <Input className="input-dosen" onChange={(e) => setDosen({ ...dosen, nip: e.target.value })} />
              </Form.Item>
              <Form.Item className="text-form-dosen" name="email" label="Email" rules={[{ message: "Silakan masukkan email Anda!" }, { type: "email", message: "Silakan masukkan alamat email yang valid!" }]}>
                <Input className="input-dosen" onChange={(e) => setDosen({ ...dosen, email: e.target.value })} />
              </Form.Item>
              <Form.Item className="text-form-dosen" name="phone" label="Phone" rules={[{ message: "Silakan masukkan nomor telepon Anda!" }]}>
                <Input className="input-dosen" onChange={(e) => setDosen({ ...dosen, phone: e.target.value })} />
              </Form.Item>
              <Form.Item className="text-form-dosen" name="password" label="Password" rules={[{ message: "Silakan masukkan kata sandi Anda!" }]}>
                <Input.Password className="input-dosen" onChange={(e) => setDosen({ ...dosen, password: e.target.value })} />
              </Form.Item>
              <Form.Item>
                <Space className="btn-simpan-dosen">
                  <Button type="primary" htmlType="submit">
                    Update
                  </Button>
                  <Button type="primary" onClick={handleDelete}>
                    Delete
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>

      <div className="button-container-dosen">
        <Link to="/admin-page/data/data-dosen">
          <Button className="back-form-dosen">Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default DetailDosen;
