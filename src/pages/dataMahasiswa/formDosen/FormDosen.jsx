import React from "react";
import { Form, Input, Button, Space, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

import "./formdosen.css";
import useCreateDosen from "./hooks/useCreateDosen";
import { api } from "../../../api/Index";

const { Dragger } = Upload;

const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  const values = Form.useWatch([], form);

  React.useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};

const FormDosen = () => {
  const [form] = Form.useForm();
  const { createDosen, loading, error } = useCreateDosen();

  const onFinish = async (values) => {
    try {
      await createDosen(values);
      form.resetFields();
    } catch (error) {
      // Tangani error jika ada
    }
  };

  const handleFileUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await api.uploadImage(formData);
      if (response.status === 200) {
        // Tangani respons dari backend setelah berhasil mengunggah gambar
        console.log("Pengunggahan gambar berhasil:", response.data);
        message.success("Gambar berhasil diunggah");
      } else {
        // Tangani jika terjadi kesalahan dalam mengunggah gambar
        console.error("Pengunggahan gambar gagal");
        message.error("Gagal mengunggah gambar");
      }
    } catch (error) {
      console.error("Pengunggahan gambar gagal:", error);
      message.error("Gagal mengunggah gambar");
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
            <Dragger beforeUpload={false} onChange={(info) => handleFileUpload(info.file)}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
            </Dragger>
          </div>
          <div className="form-container-dosen">
            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
              <Form.Item className="text-form-dosen" name="name" label="Nama" rules={[{ message: "Silakan masukkan nama Anda!" }]}>
                <Input className="input-dosen" />
              </Form.Item>
              <Form.Item className="text-form-dosen" name="nip" label="NIP" rules={[{ message: "Silakan masukkan NIP Anda!" }]}>
                <Input className="input-dosen" />
              </Form.Item>
              <Form.Item className="text-form-dosen" name="email" label="Email" rules={[{ message: "Silakan masukkan email Anda!" }, { type: "email", message: "Silakan masukkan alamat email yang valid!" }]}>
                <Input className="input-dosen" />
              </Form.Item>
              <Form.Item className="text-form-dosen" name="phone" label="Phone" rules={[{ message: "Silakan masukkan nomor telepon Anda!" }]}>
                <Input className="input-dosen" />
              </Form.Item>
              <Form.Item className="text-form-dosen" name="password" label="Password" rules={[{ message: "Silakan masukkan kata sandi Anda!" }]}>
                <Input.Password className="input-dosen" />
              </Form.Item>
              <Form.Item>
                <Space className="btn-simpan-dosen">
                  <SubmitButton form={form} />
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

export default FormDosen;
