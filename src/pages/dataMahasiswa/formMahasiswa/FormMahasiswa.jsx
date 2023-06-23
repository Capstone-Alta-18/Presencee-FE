import React, { useState } from "react";
import { Form, Input, Button, Select, Row, Col, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./formmahasiswa.css";
import useCreateMahasiswa from "./hooks/useCreateMahasiswa";
import { api } from "../../../api/Index";

const { Dragger } = Upload;
const { Option } = Select;

const FormMahasiswa = () => {
  const [form] = Form.useForm();
  const { createMahasiswa } = useCreateMahasiswa();
  const [fileList, setFileList] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);

  const handleUploadChange = (info) => {
    setFileList(info.fileList.slice(-1)); // Hanya menyimpan file terakhir yang dipilih
  };

  const onFinish = async (values) => {
    try {
      // Mengunggah gambar jika ada file yang dipilih
      if (fileList.length > 0) {
        const file = fileList[0].originFileObj;
        const response = await api.uploadImage(file);
        setImageUrl(response.url);
      }

      // Menambahkan imageUrl ke body request
      const requestBody = { ...values, imageUrl };

      await createMahasiswa(requestBody);
      form.resetFields();
      setFileList([]);
      message.success("Data mahasiswa berhasil disimpan");
    } catch (error) {
      console.error(error);
      message.error("Terjadi kesalahan saat menyimpan data mahasiswa");
    }
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Data Mahasiswa</h1>
      </div>
      <div className="container-form-mhs">
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <div className="upload-container">
              <Dragger fileList={fileList} onChange={handleUploadChange}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </Dragger>
            </div>
          </Col>
          <Col span={8}>
            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
              <Form.Item className="text-form" name="name" label="Nama" rules={[{ message: "Please input your name!" }]}>
                <Input className="input" />
              </Form.Item>
              <Form.Item className="text-form" name="nim" label="NIM" rules={[{ message: "Please input your NIM!" }]}>
                <Input className="input" />
              </Form.Item>
              <Form.Item className="text-form" name="email" label="Email" rules={[{ message: "Please input your email!" }, { type: "email", message: "Please enter a valid email address!" }]}>
                <Input className="input" />
              </Form.Item>
              <Form.Item className="text-form" name="phone" label="Phone" rules={[{ message: "Please input your phone number!" }]}>
                <Input className="input" />
              </Form.Item>
              <Form.Item className="text-form" name="password" label="Password" rules={[{ message: "Please input your password!" }]}>
                <Input.Password className="input" />
              </Form.Item>
            </Form>
          </Col>
          <Col span={8}>
            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
              <Form.Item className="text-form" name="tahun_masuk" label="Tahun_Masuk" rules={[{ message: "Please select your angkatan!" }]}>
                <Select className="input" form={form}>
                  <Option value="2020">2020</Option>
                  <Option value="2021">2021</Option>
                  <Option value="2022">2022</Option>
                  <Option value="2023">2023</Option>
                </Select>
              </Form.Item>
              <Form.Item className="text-form" name="fakultas" label="Fakultas" rules={[{ message: "Please select your fakultas!" }]}>
                <Select className="input">
                  <Option value="Fakultas MIPA">MIPA</Option>
                  <Option value="Fakultas Teknik">Fakultas Teknik</Option>
                  <Option value="Fakultas Ekonomi">Fakultas Ekonomi</Option>
                </Select>
              </Form.Item>
              <Form.Item className="text-form" name="jurusan" label="Jurusan" rules={[{ message: "Please select your jurusan!" }]}>
                <Select className="input">
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
              <Form.Item>
                <Button className="btn-simpan-mhs" type="primary" htmlType="submit">
                  SIMPAN
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
      <div className="button-container">
        <Link to="/admin-page/data/data-mahasiswa">
          <Button className="back-form">Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default FormMahasiswa;
