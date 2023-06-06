import React from "react";
import "./dashboardAdmin.css";
import { Calendar, Col, Row } from "antd";
import { DATA_DASHBOARD } from "./constant";
import { Doughnut } from "react-chartjs-2";
import { Column } from "@ant-design/charts";

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

  const data = [
    {
      type: "家具家电",
      sales: 38,
    },
    {
      type: "粮油副食",
      sales: 52,
    },
    {
      type: "生鲜水果",
      sales: 61,
    },
    {
      type: "美容洗护",
      sales: 145,
    },
    {
      type: "母婴用品",
      sales: 48,
    },
    {
      type: "进口食品",
      sales: 38,
    },
    {
      type: "食品饮料",
      sales: 38,
    },
    {
      type: "家庭清洁",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    label: {
      // 可手动配置 label 数据标签位置
      position: "middle",
      // 'top', 'bottom', 'middle',
      // 配置样式
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: "类别",
      },
      sales: {
        alias: "销售额",
      },
    },
  };

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
            <Column {...config} />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardAdmin;
