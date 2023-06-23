import React, { useEffect, useState } from "react";
import { Form, Input, Button, Select, Row, Col, Upload, message, Space } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { Link, useNavigate, useParams } from "react-router-dom";
import "./detailmhs.css";
import { api } from "../../../../api/Index";

const { Dragger } = Upload;
const { Option } = Select;

const DetailMhs = () => {
  const [mahasiswa, setMahasiswa] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getMahasiswaById(id);

        if (response.data && response.data.status === "success") {
          setMahasiswa(response.data.mahasiswa);
        } else {
          console.error("ID tidak valid");
          navigate("/admin-page/data/data-mahasiswa");
        }
      } catch (error) {
        console.error("Error saat mengambil data dosen:", error);
      }
    };

    fetchData();
  }, [id, navigate]);

  if (!mahasiswa) {
    return <div>Loading...</div>;
  }

  const handleUpdate = async () => {
    try {
      const { password, ...mahasiswaData } = mahasiswa;

      if (password) {
        const passwordUpdateResponse = await api.updateUserMahasiswa(mahasiswa.user_id, {
          user_id: mahasiswa.user_id,
          password,
        });
        if (passwordUpdateResponse.data && passwordUpdateResponse.data.status === "success") {
          ("");
        } else {
          ("");
        }
      }

      const mahasiswaUpdateResponse = await api.updateMahasiswa(id, mahasiswaData);

      if (mahasiswaUpdateResponse.data && mahasiswaUpdateResponse.data.status === "success") {
        message.success("Data berhasil diperbarui");
        navigate("/admin-page/data/data-mahasiswa");
      } else {
        message.error("Gagal memperbarui data");
      }
    } catch (error) {
      console.error("Error saat memperbarui data:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const response = await api.deleteMahasiswa(id);

      if (response.data && response.data.status === "success") {
        message.success("Data berhasil dihapus");
        navigate("/admin-page/data/data-mahasiswa");
      } else {
        message.error("Gagal menghapus data");
      }
    } catch (error) {
      console.error("Error saat menghapus data:", error);
    }
  };

  return (
    <div className="detail-mahasiswa">
      <div className="title-detail-mhs">
        <h1>Data Mahasiswa</h1>
      </div>
      <div className="container-detail-form">
        <div className="form-detail">
          <Form name="validateOnly" layout="vertical" autoComplete="off" initialValues={mahasiswa} onFinish={handleUpdate}>
            <Row gutter={60}>
              <Col>
                <div className="upload-container-detail">
                  <Dragger>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  </Dragger>
                </div>
              </Col>
              <Col>
                <Form.Item className="text-form-detail" name="name" label="Nama" rules={[{ message: "Please input your name!" }]}>
                  <Input className="input-detail" onChange={(e) => setMahasiswa({ ...mahasiswa, name: e.target.value })} />
                </Form.Item>
                <Form.Item className="text-form-detail" name="nim" label="NIM" rules={[{ message: "Please input your NIM!" }]}>
                  <Input className="input-detail" onChange={(e) => setMahasiswa({ ...mahasiswa, nim: e.target.value })} />
                </Form.Item>
                <Form.Item className="text-form-detail" name="email" label="Email" rules={[{ message: "Please input your email!" }, { type: "email", message: "Please enter a valid email address!" }]}>
                  <Input className="input-detail" onChange={(e) => setMahasiswa({ ...mahasiswa, email: e.target.value })} />
                </Form.Item>
                <Form.Item className="text-form-detail" name="phone" label="Phone" rules={[{ message: "Please input your phone number!" }]}>
                  <Input className="input-detail" onChange={(e) => setMahasiswa({ ...mahasiswa, phone: e.target.value })} />
                </Form.Item>
                <Form.Item className="text-form-detail" name="password" label="Password" rules={[{ message: "Please input your password!" }]}>
                  <Input.Password className="input-detail" onChange={(e) => setMahasiswa({ ...mahasiswa, password: e.target.value })} />
                </Form.Item>
              </Col>
              <Col>
                <Form.Item className="text-form-detail input-detail" name="tahun_masuk" label="Tahun Masuk" rules={[{ message: "Please select your angkatan!" }]}>
                  <Select className="input-detail">
                    <Option value="2020">2020</Option>
                    <Option value="2021">2021</Option>
                    <Option value="2022">2022</Option>
                    <Option value="2023">2023</Option>
                  </Select>
                </Form.Item>
                <Form.Item className="text-form-detail input-detail" name="fakultas" label="Fakultas" rules={[{ message: "Please select your fakultas!" }]}>
                  <Select className="input-detail" onChange={(value) => setMahasiswa({ ...mahasiswa, fakultas: value })}>
                    <Option value="Fakultas MIPA">MIPA</Option>
                    <Option value="Fakultas Teknik">Fakultas Teknik</Option>
                    <Option value="Fakultas Ekonomi">Fakultas Ekonomi</Option>
                  </Select>
                </Form.Item>
                <Form.Item className="text-form-detail input-detail" name="jurusan" label="Jurusan" rules={[{ message: "Please select your jurusan!" }]}>
                  <Select className="input-detail" onChange={(value) => setMahasiswa({ ...mahasiswa, jurusan: value })}>
                    <Option value="Jurusan 1">Informatika</Option>
                    <Option value="Jurusan 2">Hukum</Option>
                    <Option value="Jurusan 3">Sastra</Option>
                    <Option value="Jurusan 4">Fisika</Option>
                    <Option value="Jurusan 5">Kimia</Option>
                    <Option value="Jurusan 6">Biologi</Option>
                    <Option value="Jurusan 7">Astronomi</Option>
                    <Option value="Jurusan 8">Matematika</Option>
                    <Option value="Jurusan 9">Inggris</Option>
                    <Option value="Jurusan 10">Olahraga</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Space className="btn-simpan-mhs-detail">
                <Button type="primary" htmlType="submit">
                  Update
                </Button>
                <Button type="primary" onClick={handleDelete}>
                  Delete
                </Button>
              </Space>
            </Form.Item>
          </Form>
          <div>
            <Link to="/admin-page/data/data-mahasiswa">
              <Button type="primary" className="back-form-detail">
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailMhs;
