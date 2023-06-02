
// eslint-disable-next-line no-unused-vars
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingMain from "../pages/landingPage/LandingMain";
import LoginAdmin from "../pages/loginAdmin/LoginAdmin";
import LoginDosen from "../pages/loginDosen/LoginDosen";
import Home from "../pages/landingPage/home/Home";
import Features from "../pages/landingPage/features/Features";
import AboutUs from "../pages/landingPage/aboutUs/AboutUs";

import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import LandingMain from "../pages/landingPage/LandingMain";
import LoginAdmin from "../pages/loginAdmin/LoginAdmin";
import LoginDosen from "../pages/loginDosen/LoginDosen";
import LayoutComponent from "../components/layout/LayoutComponent";
import DashboardAdmin from "../pages/dashboradAdmin/DashboardAdmin";
import JadwalKuliahAdmin from "../pages/jadwalKuliahAdmin/JadwalKuliahAdmin";
import DataMahasiswa from "../pages/dataMahasiswa/DataMahasiswa";
import RiwayatPresensi from "../pages/riwayatPresensi/RiwayatPresensi";


const RouterManagement = () => {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login-admin");
    }
  }, [token]);
  return (
    <div>
      <Suspense>

        <Routes>
          <Route path="/" element={<LandingMain />} />
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/login-dosen" element={<LoginDosen />} />
        </Routes>

        {!token ? (
          <Routes>
            <Route path="/login-admin" element={<LoginAdmin />} />
          </Routes>
        ) : (
          <LayoutComponent>
            <Routes>
              <Route path="/dashboard-admin" element={<DashboardAdmin />} />
              <Route path="/jadwal-kuliah-admin" element={<JadwalKuliahAdmin />} />
              <Route path="/data-mahasiswa" element={<DataMahasiswa />} />
              <Route path="/riwayat-presensi" element={<RiwayatPresensi />} />
            </Routes>
          </LayoutComponent>
        )}

      </Suspense>
    </div>
  );
};

export default RouterManagement;
