import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import LandingMain from "../pages/landingPage/LandingMain";
import LoginAdmin from "../pages/loginAdmin/LoginAdmin";
import LayoutComponent from "../components/layout/LayoutComponent";
import DashboardAdmin from "../pages/dashboradAdmin/DashboardAdmin";
import JadwalKuliahAdmin from "../pages/jadwalKuliahAdmin/JadwalKuliahAdmin";
import DataMahasiswa from "../pages/dataMahasiswa/DataMahasiswa";
import RiwayatPresensi from "../pages/riwayatPresensi/RiwayatPresensi";
import Fakultas from "../pages/fakultas/Fakultas";
import Kesehatan from "../pages/jurusan/Kesehatan";
import Hukum from "../pages/jurusan/Hukum";
import Bisnis from "../pages/jurusan/Bisnis";
import Sains from "../pages/jurusan/Sains";
import Sastra from "../pages/jurusan/Sastra";
import Math from "../pages/jurusan/Math";
import Computer from "../pages/jurusan/Computer";
import Media from "../pages/jurusan/Media";

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
                    <Route
                      path="/jadwal-kuliah-admin"
                      element={<JadwalKuliahAdmin />}
                    />
                    <Route path="/data-mahasiswa" element={<DataMahasiswa />} />
                    <Route
                      path="/riwayat-presensi"
                      element={<RiwayatPresensi />}
                    />
                    <Route
                      path="/riwayat-presensi/:tahun"
                      element={<Fakultas />}
                    />
                    <Route
                      path="/riwayat-presensi/:tahun/hukum"
                      element={<Hukum />}
                    />
                    <Route
                      path="/riwayat-presensi/:tahun/bisnis"
                      element={<Bisnis />}
                    />
                    <Route
                      path="/riwayat-presensi/:tahun/sains"
                      element={<Sains />}
                    />
                    <Route
                      path="/riwayat-presensi/:tahun/sastra"
                      element={<Sastra />}
                    />
                    <Route
                      path="/riwayat-presensi/:tahun/math"
                      element={<Math />}
                    />
                    <Route
                      path="/riwayat-presensi/:tahun/sastra"
                      element={<Sastra />}
                    />
                    <Route
                      path="/riwayat-presensi/:tahun/kesehatan"
                      element={<Kesehatan />}
                    />
                    <Route
                      path="/riwayat-presensi/:tahun/computer"
                      element={<Computer />}
                    />
                    <Route
                      path="/riwayat-presensi/:tahun/media"
                      element={<Media />}
                    />
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
