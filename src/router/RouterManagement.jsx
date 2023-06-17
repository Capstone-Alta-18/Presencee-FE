import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import LandingMain from "../pages/landingPage/LandingMain";
import LoginAdmin from "../pages/loginAdmin/LoginAdmin";
import LayoutComponent from "../components/layout/LayoutComponent";
import DashboardAdmin from "../pages/dashboradAdmin/DashboardAdmin";
import JadwalKuliahAdmin from "../pages/jadwalKuliahAdmin/JadwalKuliahAdmin";
import DataMahasiswa from "../pages/dataMahasiswa/DataMahasiswa";
import RiwayatPresensi from "../pages/riwayatPresensi/RiwayatPresensi";
import FormJadwalKuliah from "../pages/jadwalKuliahAdmin/formJadwalKuliah/formJadwalKuliah";

const RouterManagement = () => {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token && window.location.pathname !== "/login-admin") {
      navigate("/");
    }
  }, [token]);

  return (
    <div>
      <Suspense>
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
                    <Route path="/form-jadwal-kuliah-admin" element={<FormJadwalKuliah />} />
                    <Route path="/data-mahasiswa" element={<DataMahasiswa />} />
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
