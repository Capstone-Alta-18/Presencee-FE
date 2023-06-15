import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import LandingMain from "../pages/landingPage/LandingMain";
import LoginAdmin from "../pages/loginAdmin/LoginAdmin";
import LayoutComponent from "../components/layout/LayoutComponent";
import DashboardAdmin from "../pages/dashboradAdmin/DashboardAdmin";
import JadwalKuliahAdmin from "../pages/jadwalKuliahAdmin/JadwalKuliahAdmin";
import RiwayatPresensi from "../pages/riwayatPresensi/RiwayatPresensi";
import DataMahasiswa from "../pages/dataMahasiswa/DataMahasiswa";
import DataDosen from "../pages/dataMahasiswa/dataAll/dosen/DataDosen";
import DataMhs from "../pages/dataMahasiswa/dataAll/mahasiswa/DataMhs";
import FormDosen from "../pages/dataMahasiswa/formDosen/FormDosen";
import FormMahasiswa from "../pages/dataMahasiswa/formMahasiswa/FormMahasiswa";
import DetailDosen from "../pages/dataMahasiswa/formDosen/detail/DetailDosen";
import DetailMhs from "../pages/dataMahasiswa/formMahasiswa/detail/DetailMhs";

const RouterManagement = () => {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && window.location.pathname !== "/login-admin") {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingMain />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route
            path="/admin-page/*"
            element={
              token ? (
                <LayoutComponent>
                  <Routes>
                    <Route path="/" element={<DashboardAdmin />} />
                    <Route path="/jadwal-kuliah-admin" element={<JadwalKuliahAdmin />} />
                    <Route path="/data" element={<DataMahasiswa />} />
                    <Route path="/data/data-dosen" element={<DataDosen />} />
                    <Route path="/data/data-dosen/detail/:id" element={<DetailDosen />} />
                    <Route path="/data/data-dosen/form-dosen" element={<FormDosen />} />
                    <Route path="/data/data-mahasiswa/form-mahasiswa" element={<FormMahasiswa />} />
                    <Route path="/data/data-mahasiswa" element={<DataMhs />} />
                    <Route path="/data/data-mahasiswa/detail/:id" element={<DetailMhs />} />
                    <Route path="/riwayat-presensi" element={<RiwayatPresensi />} />
                  </Routes>
                </LayoutComponent>
              ) : (
                <Navigate to="/login-admin" />
              )
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default RouterManagement;
