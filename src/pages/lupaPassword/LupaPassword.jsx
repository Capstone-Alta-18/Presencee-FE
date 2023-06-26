import { Row, Col, Button } from "antd";
import { IMAGES } from "../../assets/constant";
import "./LupaPassword.css";
import { Link } from "react-router-dom";

const LupaPassword = () => {
  const handleWhatsAppButtonClick = () => {
    const phoneNumber = "+6281615638362";
    const message = "Halo !";

    // Format nomor telepon dengan menghilangkan spasi, tanda plus, dan tanda hubung
    const formattedPhoneNumber = phoneNumber.replace(/[\s+()-]/g, "");

    // Buat URL WhatsApp dengan nomor dan pesan yang ditentukan
    const whatsappURL = `https://api.whatsapp.com/send?phone=${formattedPhoneNumber}&text=${encodeURIComponent(message)}`;

    // Buka halaman WhatsApp di tab baru
    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="lupa-password-container">
      <div className="triangle-top-left" />
      <div className="triangle-bottom-right" />
      <Row justify="center" align="middle" className="lupa-password-section">
        <Col span={8} className="lupa-password-content">
          <h1>Lupa Password?</h1>
          <p>Silahkan Menghubungi CS Kampus</p>
          <Button className="btn-whatsApp" htmlType="submit" onClick={handleWhatsAppButtonClick}>
            WhatsApp
          </Button>
          <Button className="btn-telegram" htmlType="submit">
            <a href="https://t.me/Cs_kampus_bot" target="_blank" rel="noopener noreferrer">
              Telegram
            </a>
          </Button>
        </Col>
        <Col span={7}>
          <img src={IMAGES.animasiLogin2} alt="animasi login" className="lupa-password-animation" />
        </Col>
      </Row>
    </div>
  );
};

export default LupaPassword;
