import React, { useEffect } from "react";
import { Form, Input, Button, Space, Upload, message } from "antd";
import { InboxOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import useCreateDosen from "./hooks/useCreateDosen";
import useUpload from "./hooks/useUpload";
import "./formdosen.css";

const { Dragger } = Upload;

const SubmitButton = ({ form }) => {
  const [submittable, setSubmittable] = React.useState(false);

  const values = Form.useWatch([], form);

  useEffect(() => {
    form.validateFields({ validateOnly: true }).then(
      () => {
        setSubmittable(true);
      },
      () => {
        setSubmittable(false);
      }
    );
  }, [form, values]);

  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      Submit
    </Button>
  );
};

const FormDosen = () => {
  const [form] = Form.useForm();
  const { createDosen } = useCreateDosen();
  const [isLoadingUpload, imageUrl, upload] = useUpload();
  

  const handleUpload = async (file) => {
    try {
      const formData = new FormData();
      formData.append("image", file.file.originFileObj);
      await upload(formData);
      form.setFieldsValue({ image: imageUrl });
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };

  const onFinish = async (values) => {
    try {
      const newValues = { ...values }; // Duplikat nilai-nilai form

      if (imageUrl) {
        newValues.image = imageUrl; // Tambahkan URL gambar ke newValues
      } else {
        newValues.image = null;
      }

      await createDosen(newValues);
      form.resetFields();
      message.success("Dosen created successfully!");
    } catch (error) {
      console.error("Error:", error);
      message.error("Failed to create dosen. Please try again.");
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
            {imageUrl ? (
              <div>
                <img
                  src={imageUrl}
                  alt="avatar"
                  style={{
                    width: 300,
                    height: 400,
                  }}
                />
              </div>
            ) : (
              <Dragger onChange={handleUpload} showUploadList={false} maxCount={1} customRequest={() => {}}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
              </Dragger>
            )}
          </div>

          <div className="form-container-dosen">
            <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
              <Form.Item className="text-form-dosen" name="name" label="Nama" rules={[{ required: true, message: "Please input your name!" }]}>
                <Input className="input-dosen" />
              </Form.Item>
              <Form.Item className="text-form-dosen" name="nip" label="NIP" rules={[{ required: true, message: "Please input your NIP!" }]}>
                <Input className="input-dosen" />
              </Form.Item>
              <Form.Item
                className="text-form-dosen"
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email address!" },
                ]}
              >
                <Input className="input-dosen" />
              </Form.Item>
              <Form.Item className="text-form-dosen" name="phone" label="Phone" rules={[{ required: true, message: "Please input your phone number!" }]}>
                <Input className="input-dosen" />
              </Form.Item>
              <Form.Item className="text-form-dosen" name="password" label="Password" rules={[{ required: true, message: "Please input your password!" }]}>
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
