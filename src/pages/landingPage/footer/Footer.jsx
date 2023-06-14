import { Col, Row } from "antd";
import React from "react";
import { IMAGES } from "../../../assets/constant";
import { AppleLogo, EnvelopeSimpleOpen, GooglePlayLogo, InstagramLogo, MapPin, Phone, YoutubeLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="footer-app">
      <Row gutter={100}>
        <Col className="contact-footer">
          <img className="img-footer" src={IMAGES.logo1} alt="Logo" width={240} />
          <div className="contact-footer-content">
            <MapPin className="icon" size={32} weight="fill" />
            <p>Jalan Indonesia, Jakarta Selatan, DKI Jakarta, 18023Indonesia</p>
          </div>
          <div className="contact-footer-content">
            <Phone className="icon" size={32} weight="fill" />
            <p>+62 816-1563-8362</p>
          </div>
          <div className="contact-footer-content">
            <EnvelopeSimpleOpen className="icon" size={32} weight="fill" />
            <p>presenseeproject@mail.com</p>
          </div>
        </Col>
        <Col>
          <h1 className="feature">Features</h1>
          <div className="text-feature">
            <p>Absensi Sidik Jari</p>
            <p>Absensi Kamera atau Kode QR</p>
            <p>Jadwal</p>
            <p>Riwayat Absensi</p>
          </div>
        </Col>
        <Col className="menu-footer">
          <h1 className="feature">About</h1>
          <div className="text-about">
            <p>About Us</p>
            <p>Content Us</p>
            <p>FAQ`s</p>
          </div>
          <InstagramLogo className="sosmed" size={32} weight="fill" />
          <YoutubeLogo className="sosmed" size={32} weight="fill" />
          <EnvelopeSimpleOpen className="sosmed" size={32} weight="fill" />
          <Phone className="sosmed" size={32} weight="fill" />
        </Col>
        <Col>
          <h1 className="feature">Get Started</h1>
          <div className="apple">
            <AppleLogo size={40} weight="fill" />
            <p className="text-get">
              {" "}
              Download on the <br /> App Store
            </p>
          </div>
          <div className="play">
            <GooglePlayLogo size={40} weight="fill" />
            <p className="text-get">
              {" "}
              Get it on <br /> Google Play
            </p>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
