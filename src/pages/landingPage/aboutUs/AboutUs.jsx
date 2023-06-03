import React from "react";
import "./aboutUs.css";
import { IMAGES } from "../../../assets/constant";

const AboutUs = () => {
  return (
    <div id="aboutus">
      <div className="about-section">
        <div className="about">
          <img src={IMAGES.logo1} alt="about us image" />
          <div className="about-text">
            <p>Presensee merupakan platform untuk presensi berbasis online. Presensee hadir untuk memudahkan akses dalam mengisi absensi dari segi peserta didik dan membantu pendidikan mengetahui kehadiran dari peserta didik.</p>
          </div>
        </div>
      </div>
      <div className="info-section">
        <div className="info-text">
          <div className="info-mahasiswa">
            <p>
              500 <br /> Mahasiswa
            </p>
          </div>
          <div className="info-dosen">
            <p>
              50 <br /> dosen
            </p>
          </div>
          <div className="info-kelas">
            <p>
              20 <br /> Kelas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
