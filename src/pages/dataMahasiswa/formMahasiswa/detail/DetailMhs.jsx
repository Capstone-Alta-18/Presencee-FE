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
      const response = await api.updateMahasiswa(id, mahasiswa);

      if (response.data && response.data.status === "success") {
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
    <div className="container-detail-mhs">
      <div className="title-detail-mhs">
        <h1>Data Mahasiswa</h1>
      </div>
      <div className="container-form-mhs-detail">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <div className="upload-container-detail">
              <Dragger>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </Dragger>
            </div>
          </Col>
          <Col span={8}>
            <Form name="validateOnly" layout="vertical" autoComplete="off" initialValues={mahasiswa} onFinish={handleUpdate}>
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
              <div className="form-kiri">
                <Col span={8} className="form-kiri">
                  <Form.Item className="text-form-detail" name="angkatan" label="Angkatan" rules={[{ message: "Please select your angkatan!" }]}>
                    <Select className="input-detail">
                      <Option value="2020">2020</Option>
                      <Option value="2021">2021</Option>
                      <Option value="2022">2022</Option>
                      <Option value="2023">2023</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item className="text-form-detail" name="fakultas" label="Fakultas" rules={[{ message: "Please select your fakultas!" }]}>
                    <Select className="input">
                      <Option value="Fakultas 1">Fakultas 1</Option>
                      <Option value="Fakultas 2">Fakultas 2</Option>
                      <Option value="Fakultas 3">Fakultas 3</Option>
                    </Select>
                  </Form.Item>
                  <Form.Item className="text-form-detail" name="jurusan" label="Jurusan" rules={[{ message: "Please select your jurusan!" }]}>
                    <Select className="input-detail" onChange={(e) => setMahasiswa({ ...mahasiswa, jurusan: e.target.value })}>
                      <Option value="Jurusan 1">Informatika</Option>
                      <Option value="Jurusan 2">Hukum</Option>
                      <Option value="Jurusan 3">Sastra</Option>
                    </Select>
                  </Form.Item>
                </Col>
              </div>
            </Form>
          </Col>
        </Row>
      </div>
      <div className="button-container-detail">
        <Link to="/admin-page/data/data-mahasiswa">
          <Button className="back-form-detail">Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default DetailMhs;
