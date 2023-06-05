import React from "react";
import "./dashboardAdmin.css";
import { Calendar, Col, Row } from "antd";
import { DATA_DASHBOARD } from "./constant";
import { Doughnut } from "react-chartjs-2";

function formatDate(date) {
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

const DashboardAdmin = () => {
  const today = new Date();
  const formattedDate = formatDate(today);

  return (
    <div className="dashboard-section">
      <div className="title-dashboard-admin">
        <h2>Selamat datang, Admin!</h2>
        <p>{formattedDate}</p>
      </div>
      <Row>
        <Col className="left-dashboard">
          <div className="calender">
            <Calendar fullscreen={false} />
          </div>
          <div className="presentase-kehadiran">
            <h3>Presentase Kehadiran</h3>
          </div>
        </Col>
        <Col className="right-dashboard">
          {DATA_DASHBOARD.map((data, id) => (
            <div className="all-data-section">
              <div key={id} className="container-data-section">
                <div className="icon-data">{data.icon}</div>
                <div className="data-section">
                  <p>{data.title}</p>
                  <p>{data.data}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="statistic-mingguan">
            <h3>Statistic Mingguan</h3>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardAdmin;
