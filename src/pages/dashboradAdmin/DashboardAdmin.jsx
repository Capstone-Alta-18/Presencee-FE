// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import "./dashboardAdmin.css";
import { Calendar, Col, Row } from "antd";
import { Column } from "@ant-design/charts";
import { Briefcase, ChalkboardTeacher, Student, UsersThree } from "@phosphor-icons/react";
import { useGetDosen, useGetMahasiswa, useGetUser } from "./hooks/useGetData";
import { DATA_DASHBOARD } from "./constant";
import { getToken, api } from "../../config/apiService";

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
  const [mahasiswaData, getMahasiswa] = useGetMahasiswa();
  const [ getDosen] = useGetDosen();
  const [userData, getUsers] = useGetUser();
  const [dashboardData, setDashboardData] = useState(DATA_DASHBOARD);
  const [ setToken] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([getMahasiswa(), getDosen(), getUsers()]);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setDashboardData((prevData) => [
      {
        id: 1,
        icon: <UsersThree size={60} weight="fill" />,
        title: "Admin Aktif",
        data: userData?.filter((user) => user.role === "admin")?.length || 21,
      },
      {
        id: 2,
        icon: <ChalkboardTeacher size={60} weight="fill" />,
        title: "Jumlah Dosen",
        data: dosenData?.length,
      },
      {
        id: 3,
        icon: <Student size={60} weight="fill" />,
        title: "Jumlah Mahasiswa",
        data: mahasiswaData?.length,
      },
      {
        id: 4,
        icon: <Briefcase size={60} weight="fill" />,
        title: "Data Absensi",
        data: 999, // Ganti dengan data aktual dari API
      },
    ]);
  }, [mahasiswaData, dosenData, userData]);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const token = await getToken();
        setToken(token);
      } catch (error) {
        console.log(error);
      }
    };

    fetchToken();
  }, [userData]);

  const handleLogin = async () => {
    try {
      const credentials = {
        email: "dewabiara12gmail.com",
        password: "123456",
      };

      const response = await api.login(credentials);
      const { data } = response;
      const token = data.token;
      localStorage.setItem("token", token);
      setToken(token);
    } catch (error) {
      console.log(error);
    }
  };

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
      position: "middle",
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
          {dashboardData.map((data) => (
            <div className="all-data-section" key={data.id}>
              <div className="container-data-section">
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
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default DashboardAdmin;
