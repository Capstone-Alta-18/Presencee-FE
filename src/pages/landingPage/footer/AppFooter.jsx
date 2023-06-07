import { Layout } from "antd";
import { IMAGES } from "../../../assets/constant";
import { AppleLogo, EnvelopeSimpleOpen, GooglePlayLogo, InstagramLogo, MapPin, Phone, YoutubeLogo } from "@phosphor-icons/react";
import "./Footer.css";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer className="footer">
      <div className="footer-content">
        <div>
          <div>
            <img className="img-footer" src={IMAGES.logo1} alt="Logo" />
          </div>
          <div className="footer-icons">
            <p className="text-footer">
              <MapPin className="icon" size={32} weight="fill" />
              Jalan Indonesia, Jakarta Selatan, DKI Jakarta, 18023Indonesia
            </p>
            <p className="text-footer">
              <Phone className="icon" size={32} weight="fill" />
              +62 812 3456 78990
            </p>

            <p className="text-footer">
              <EnvelopeSimpleOpen className="icon" size={32} weight="fill" />
              presensee@attendance.co
            </p>
          </div>
        </div>
        <div>
          <h1 className="feature">Features</h1>
          <div className="text-feature">
            <p>Absensi Sidik Jari</p>
            <p>Absensi Kamera atau Kode QR</p>
            <p>Jadwal</p>
            <p>Riwayat Absensi</p>
          </div>
        </div>
        <div>
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
        </div>
        <div className="text-right">
          <h1 className="feature">Get Started</h1>
          <div className="apple">
            <p className="text-get">
              {" "}
              <AppleLogo size={50} weight="fill" />
              Download on the App Store
            </p>
          </div>
          <div className="play">
            <p className="text-get">
              {" "}
              <GooglePlayLogo size={50} weight="fill" />
              Get it on Google Play
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <h3>© 2023 Presensee. All Rights Reserved</h3>
      </div>
    </Footer>
  );
};

export default AppFooter;
