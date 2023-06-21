import "./dashboardAdmin.css"
import { Calendar } from "antd";
import { Pie } from "@ant-design/charts";
import { DATA_DASHBOARD, useGetAbsen, useGetDosen, useGetMahasiswa, useGetUser } from "./hooks/constant";
import { useEffect, useState } from "react";

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
  const [dashboardData, setDashboardData] = useState(DATA_DASHBOARD);
  const [, dosen, getDosen] = useGetDosen();
  const [, mahasiswa, getMahasiswa] = useGetMahasiswa();
  const [, user, getUser] = useGetUser();
  const [, absen, getAbsen] = useGetAbsen();
  const today = new Date();
  const formattedDate = formatDate(today);

  useEffect(() => {
    getDosen();
    getMahasiswa();
    getUser();
    getAbsen();
  }, []);

  useEffect(() => {
    if (dosen && mahasiswa && user && absen) {
      const updatedDashboardData = DATA_DASHBOARD.map((data) => {
        if (data.title === "Jumlah Dosen") {
          return { ...data, data: dosen.length };
        }
        if (data.title === "Jumlah Mahasiswa") {
          return { ...data, data: mahasiswa.length };
        }
        if (data.title === "Admin Aktif") {
          return { ...data, data: user.length };
        }
        if (data.title === "Data Absensi") {
          return { ...data, data: absen.length };
        }
        return data;
      });
      setDashboardData(updatedDashboardData);
    }
  }, [dosen, mahasiswa, user, absen]);

  // Data untuk Pie Donut Chart
  const pieDonutChartData = [
    { category: "Hadir", value: 70 },
    { category: "Absen", value: 10 },
    { category: "Izin", value: 5 },
    { category: "Sakit", value: 3 },
    { category: "Telat", value: 2 },
  ];

  // Konfigurasi untuk Pie Donut Chart
  const pieDonutChartConfig = {
    appendPadding: 10,
    data: pieDonutChartData,
    angleField: "value",
    colorField: "category",
    radius: 0.8,
    innerRadius: 0.6, // Nilai innerRadius yang berbeda akan menghasilkan gaya donat
    label: {
      type: "inner",
      offset: "-50%",
      content: "{percentage}",
      style: {
        fontSize: 11,
        textAlign: "center",
      },
    },
    interactions: [{ type: "element-active" }],
  };

  return (
    <div>
      <div className="title-dashboard-admin">
        <h2>Selamat datang, Admin!</h2>
        <p>{formattedDate}</p>
      </div>
      <div className="dashboard-section">
        <div className="left-section">
          <div className="calender">
            <Calendar fullscreen={false} />
          </div>
          <div className="presentase-kehadiran">
            <h3>Presentase Kehadiran</h3>
            <br />
            <Pie {...pieDonutChartConfig} />
          </div>
        </div>
        <div className="right-section">
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
        </div>
      </div>
    </div>
  );
};

export default DashboardAdmin;
