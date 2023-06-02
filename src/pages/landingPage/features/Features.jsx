import React, { useState } from "react";
import { Col, Row } from "antd";
import "./Features.css";
import { FAQ } from "./Constant";

const Features = () => {
  const [overlayVisible, setOverlayVisible] = useState([false, false, false, false]);

  const handleContainerClick = (index) => {
    const newOverlays = [...overlayVisible];
    newOverlays[index] = !newOverlays[index];
    setOverlayVisible(newOverlays);
  };

  return (
    <>
      <div id="features">
        <p className="title">Feature Yang Tersedia</p>
        <Row>
          <Col className="col1" span={3}></Col>
          <Col className="col2" xs={24} md={18} lg={18}>
            <div className="text-container1" onClick={() => handleContainerClick(0)}>
              <p className="text">Presensi Sidik Jari</p>
              {overlayVisible[0] && (
                <div className="overlay">
                  <p className="overlay-text">Dengan fitur ini, data yang terinput tidak dapat dipalsukan, karena pada dasarnya setiap manusia memiliki sidik jari yang berbeda.</p>
                </div>
              )}
            </div>
            <div className="text-container2" onClick={() => handleContainerClick(1)}>
              <p className="text">Jadwal</p>
              {overlayVisible[1] && (
                <div className="overlay">
                  <p className="overlay-text">Dengan fitur ini, dapat memudahkan dalam mengelola waktu sehingga tahu rencana kuliah yang harus dilakukan.</p>
                </div>
              )}
            </div>
            <div className="text-container3" onClick={() => handleContainerClick(2)}>
              <p className="text">Histori Presensi</p>
              {overlayVisible[2] && (
                <div className="overlay">
                  <p className="overlay-text">Dengan fitur ini, dapat memudahkan dalam melihat kembali atau meninjau riwayat absensi mahasiswa.</p>
                </div>
              )}
            </div>
            <div className="text-container4" onClick={() => handleContainerClick(3)}>
              <p className="text">Pesensi kamera</p>
              {overlayVisible[3] && (
                <div className="overlay">
                  <p className="overlay-text">Dengan fitur ini, absensi akan lebih efektif.</p>
                </div>
              )}
            </div>
          </Col>
          <Col className="col3" span={3}></Col>
        </Row>
      </div>
      <div className="FAQ" id="help">
        <h1>Frequently Asked Questions (FAQ)</h1>
        <Row>
          <Col className="col1" span={3}></Col>
          <Col className="col2" xs={24} md={18} lg={18}>
            {FAQ.map((faq, index) => (
              <div key={index}>
                <div className={faq.className}>
                  <div className="cardfaq">
                    <img src={faq.bgimg} alt="gambar" />
                    <p>{faq.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </Col>
          <Col className="col3" span={3}></Col>
        </Row>
      </div>
    </>
  );
};

export default Features;
