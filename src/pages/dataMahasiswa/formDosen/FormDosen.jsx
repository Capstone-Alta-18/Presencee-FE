import React from "react";
import { Form, Input, Button, Space, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./formdosen.css";
import useCreateDosen from "./hooks/useCreateDosen";

const { Dragger } = Upload;

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

const FormDosen = () => {
  const [form] = Form.useForm();
  const { createDosen, loading, error } = useCreateDosen();

  const onFinish = async (values) => {
    try {
      await createDosen(values);
      form.resetFields();
    } catch (error) {
      // Tangani error jika terjadi kesalahan
    }
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Data Dosen</h1>
      </div>
      <div className="container-form-mhs">
        <div className="row">
          <div className="upload-container">
            <Dragger>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Click or drag file to this area to upload</p>
            </Dragger>
          </div>
          <div className="form-container">
            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
              <Form.Item className="text-form" name="name" label="Nama" rules={[{ required: true, message: "Please input your name!" }]}>
                <Input className="input" />
              </Form.Item>
              <Form.Item className="text-form" name="nip" label="NIP" rules={[{ required: true, message: "Please input your NIP!" }]}>
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
              <Form.Item>
                <Space className="btn-simpan">
                  <SubmitButton form={form} />
                </Space>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
      <div className="button-container">
        <Link to="/dashboard-admin/data/data-dosen">
          <Button className="back-form">Back</Button>
        </Link>
      </div>
    </div>
  );
};

export default FormDosen;
