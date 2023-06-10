import React from "react";
import { Form, Input, Button, Space } from "antd";
import "./formdosen.css";

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

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <div className="container">
      <div className="title">
        <h1>Data Dosen</h1>
      </div>
      <div className="container-form-mhs">
        <Form form={form} name="validateOnly" layout="vertical" autoComplete="off" onFinish={onFinish}>
          <Form.Item name="nama" label="Nama" rules={[{ required: true, message: "Please input your name!" }]}>
            <Input />
          </Form.Item>
          <Form.Item name="nip" label="NIP" rules={[{ required: true, message: "Please input your NIP!" }]}>
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please enter a valid email address!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="password" label="Password" rules={[{ required: true, message: "Please input your password!" }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Space>
              <SubmitButton form={form} />
              <Button htmlType="reset">Reset</Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default FormDosen;
