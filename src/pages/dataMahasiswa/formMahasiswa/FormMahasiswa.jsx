import React from "react";
import { Form, Input, Button, Select, Row, Col, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./formmahasiswa.css";
import useCreateMahasiswa from "./hooks/useCreateMahasiswa";

const { Dragger } = Upload;
const { Option } = Select;

const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
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

const FormMahasiswa = () => {
  const [form] = Form.useForm();
  const { createMahasiswa, loading, error } = useCreateMahasiswa();

  const onFinish = async (values) => {
    try {
      await createMahasiswa(values);
      form.resetFields();
    } catch (error) {
      // Tangani error jika terjadi kesalahan
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
              <Dragger>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </Dragger>
            </div>
          </Col>
          <Col span={8}>
            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
              <Form.Item className="text-form" name="name" label="Nama" rules={[{ required: true, message: "Please input your name!" }]}>
                <Input className="input" />
              </Form.Item>
              <Form.Item className="text-form" name="nim" label="NIM" rules={[{ required: true, message: "Please input your NIM!" }]}>
                <Input className="input" />
              </Form.Item>
              <Form.Item
                className="text-form"
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email address!" },
                ]}
              >
                <Input className="input" />
              </Form.Item>
              <Form.Item className="text-form" name="phone" label="Phone" rules={[{ required: true, message: "Please input your phone number!" }]}>
                <Input className="input" />
              </Form.Item>
              <Form.Item className="text-form" name="password" label="Password" rules={[{ required: true, message: "Please input your password!" }]}>
                <Input.Password className="input" />
              </Form.Item>
            </Form>
          </Col>
          <Col span={8}>
            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
              <Form.Item className="text-form" name="angkatan" label="Angkatan" rules={[{ required: true, message: "Please select your angkatan!" }]}>
                <Select className="input">
                  <Option value="2020">2020</Option>
                  <Option value="2021">2021</Option>
                  <Option value="2022">2022</Option>
                  <Option value="2023">2023</Option>
                </Select>
              </Form.Item>
              <Form.Item className="text-form" name="fakultas" label="Fakultas" rules={[{ required: true, message: "Please select your fakultas!" }]}>
                <Select className="input">
                  <Option value="Fakultas 1">Fakultas 1</Option>
                  <Option value="Fakultas 2">Fakultas 2</Option>
                  <Option value="Fakultas 3">Fakultas 3</Option>
                </Select>
              </Form.Item>
              <Form.Item className="text-form" name="jurusan" label="Jurusan" rules={[{ required: true, message: "Please select your jurusan!" }]}>
                <Select className="input">
                  <Option value="Jurusan 1">Jurusan 1</Option>
                  <Option value="Jurusan 2">Jurusan 2</Option>
                  <Option value="Jurusan 3">Jurusan 3</Option>
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
        <Link to="/dashboard-admin/data/data-mahasiswa">
          <Button className="back-form">Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default FormMahasiswa;
