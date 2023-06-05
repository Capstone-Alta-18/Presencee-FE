import { Row, Col, Form, Input, Button } from "antd";
import { IMAGES } from "../../assets/constant";
import "./loginDosen.css";

const LoginDosen = () => {
  const onFinish = () => {};

  return (
    <div className="login-container">
      <div className="triangle-top-left" />
      <div className="triangle-bottom-right" />
      <Row justify="center" align="middle" className="login-section">
        <Col span={8} className="login-content">
          <img src={IMAGES.logo1} alt="Your Image" className="logo-image" />
          <p>
            Presensee merupakan sebuah attendance management system yang dapat mendata kehadiran seluruh mahasiswa dengan benar, dan membantu para dosen untuk melihat daftar kehadiran mahasiswa, yang dimana juga akan mengurangi banyaknya
            fenomena titip absen.
          </p>
        </Col>
        <Col
          span={7}
          style={{
            boxShadow: " 0px 0px 20px rgba(48, 48, 48, 0.2)",
            padding: "24px",
            background: "#ffffff",
          }}
        >
          <Form name="login-form" onFinish={onFinish}>
            <Form.Item name="username" rules={[{ required: true, message: "Please input your username!" }]}>
              <Input placeholder="Input Email/NIM" />
            </Form.Item>
            <Form.Item name="password" rules={[{ required: true, message: "Please input your password!" }]}>
              <Input.Password placeholder="Input Password" />
            </Form.Item>
            <Form.Item style={{ textAlign: "center" }}>
              <Button type="link" style={{ color: "#FE9486" }}>Lupa Password?</Button>
            </Form.Item>

            <div style={{ borderTop: "1px solid #ccc", margin: "12px 0" }} />
            <br>
            </br>
            <Form.Item>
              <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                Login
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
      <img src={IMAGES.animasiLogin} alt="animasi login" className="login-animation" />
    </div>
  );
};

export default LoginDosen;
