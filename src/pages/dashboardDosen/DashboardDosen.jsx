import { Calendar, Col, Row } from "antd";
import React from "react";
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

  return (
    <div className="dashboard-dosen-section">
      <div className="title-dashboard-dosen">
        <h2>Selamat datang, Dosen!</h2>
        <p>{formattedDate}</p>
      </div>
      <Row>
        <Col className="left-dashboard-dosen">
          <div className="calender-dosen">
            <Calendar fullscreen={false} />
          </div>
          <div className="presentase-kehadiran">
            <h3>Presentase Kehadiran</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardDosen;
