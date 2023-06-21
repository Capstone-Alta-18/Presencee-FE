import { Calendar, Col, Row } from "antd";
import React from "react";
import { IMAGES } from "../../assets/constant";
import "./DashboardDosen.css";

function formatDate(date) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

const DashboardDosen = () => {
  const today = new Date();
  const formattedDate = formatDate(today);

  const renderHeader = ({ value, type, onChange }) => {
    const yearText = value.format("YYYY");
    const headerText = type === "month" ? value.format(" ddd, DD MMMM") : value.format("D MMMM YYYY");
    return (
      <div className="style-calendar">
        <div>{yearText}</div>
        <div>{headerText}</div>
      </div>
    );
  };

  return (
    <div className="dashboard-dosen-section">
      <div className="title-dashboard-dosen">
        <h1>Selamat datang, Dosen!</h1>
        <p>{formattedDate}</p>
      </div>
      <Row>
        <Col className="left-dashboard-dosen">
          <div className="calender-dosen">
            <Calendar fullscreen={false} headerRender={renderHeader} />
          </div>
          <div className="total-kehadiran-mahasiswa">
            <h1>Total Kehadiran Mahasiswa</h1>
          </div>
        </Col>
        <Col className="right-dashboard-dosen">
          <div className="konfirmasi-kehadiran">
            <img className="img-vector-konfirmasi-kehadiran" src={IMAGES.Vector} alt="vector" />
            <div className="content-konfirmasi-kehadiran">
              <h3>Kehadiran Terkonfirmasi</h3>
            </div>
          </div>
          <div className="konfirmasi-kehadiran">
            <img className="img-vector-konfirmasi-on-progres" src={IMAGES.Vector2} alt="vector" />
            <div className="content-konfirmasi-kehadiran">
              <h3>Konfirmasi On Proses</h3>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardDosen;
