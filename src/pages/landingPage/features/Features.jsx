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

  const handleOverlayClick = (event) => {
    event.stopPropagation();
  };

  return (
    <>
      {/* Features */}
      <div className="features">
        <p className="title-features">Feature Yang Tersedia</p>
        <Row>
          <Col className="col2-features" span={24}>
            <div className="text-container1" onClick={() => handleContainerClick(0)}>
              <p className="text-card-features">Presensi Sidik Jari</p>

              {overlayVisible[0] && (
                <div className="overlay-features" onClick={handleOverlayClick}>
                  <p className="overlay-text-features">Dengan fitur ini, data yang terinput tidak dapat dipalsukan, karena pada dasarnya setiap manusia memiliki sidik jari yang berbeda.</p>
                </div>
              )}
            </div>
            <div className="text-container2" onClick={() => handleContainerClick(1)}>
              <p className="text-card-features">Jadwal</p>

              {overlayVisible[1] && (
                <div className="overlay-features" onClick={handleOverlayClick}>
                  <p className="overlay-text-features">Dengan fitur ini, dapat memudahkan dalam mengelola waktu sehingga tahu rencana kuliah yang harus dilakukan.</p>
                </div>
              )}
            </div>
            <div className="text-container3" onClick={() => handleContainerClick(2)}>
              <p className="text-card-features">Histori Presensi</p>
              {overlayVisible[2] && (
                <div className="overlay-features" onClick={handleOverlayClick}>
                  <p className="overlay-text-features">Dengan fitur ini, dapat memudahkan dalam melihat kembali atau meninjau riwayat absensi mahasiswa.</p>
                </div>
              )}
            </div>
            <div className="text-container4" onClick={() => handleContainerClick(3)}>
              <p className="text-card-features">Pesensi kamera</p>
              {overlayVisible[3] && (
                <div className="overlay-features" onClick={handleOverlayClick}>
                  <p className="overlay-text-features">Dengan fitur ini, absensi akan lebih efektif.</p>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </div>

      {/* FAQ */}
      <div className="FAQ">
        <h1>Frequently Asked Questions (FAQ)</h1>
        <Row>
          <Col className="col2-faq" span={24}>
            {FAQ.map((faq, index) => (
              <div key={index}>
                <div className={faq.className} onClick={() => handleContainerClick(index)}>
                  <div className="cardfaq">
                    <img src={faq.bgimg} alt="Thumbnail" />
                    <p>{faq.description}</p>
                    {overlayVisible[index] && (
                      <div className="overlay-faq" onClick={handleOverlayClick}>
                        <p className="overlay-text-faq">{faq.overlayText}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Features;
