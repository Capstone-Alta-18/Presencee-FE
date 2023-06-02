import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LandingMain from "../pages/landingPage/LandingMain";
import LoginAdmin from "../pages/loginAdmin/LoginAdmin";
import LoginDosen from "../pages/loginDosen/LoginDosen";
import LayoutComponent from "../components/layout/LayoutComponent";
import DashboardAdmin from "../pages/dashboradAdmin/DashboardAdmin";
import JadwalKuliahAdmin from "../pages/jadwalKuliahAdmin/JadwalKuliahAdmin";
import DataMahasiswa from "../pages/dataMahasiswa/DataMahasiswa";
import RiwayatPresensi from "../pages/riwayatPresensi/RiwayatPresensi";

const RouterManagement = () => {
  return (
    <div>
      <Suspense>
        <Routes>
          <Route path="/" element={<LandingMain />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/login-dosen" element={<LoginDosen />} />
        </Routes>
        <LayoutComponent>
          <Routes>
            <Route path="/dashboard-admin" element={<DashboardAdmin />} />
            <Route path="/jadwal-kuliah-admin" element={<JadwalKuliahAdmin />} />
            <Route path="/data-mahasiswa" element={<DataMahasiswa />} />
            <Route path="/riwayat-presensi" element={<RiwayatPresensi />} />
          </Routes>
        </LayoutComponent>
      </Suspense>
    </div>
  );
};

export default RouterManagement;
