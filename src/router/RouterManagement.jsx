import React, { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate, Navigate, useParams } from "react-router-dom";
import LandingMain from "../pages/landingPage/LandingMain";
import LoginAdmin from "../pages/loginAdmin/LoginAdmin";
import LayoutComponent from "../components/layout/LayoutComponent";
import DashboardAdmin from "../pages/dashboradAdmin/DashboardAdmin";
import JadwalKuliahAdmin from "../pages/jadwalKuliahAdmin/JadwalKuliahAdmin";
import DataMahasiswa from "../pages/dataMahasiswa/DataMahasiswa";
import RiwayatPresensi from "../pages/riwayatPresensi/RiwayatPresensi";
import Fakultas from "../pages/riwayatPresensi/fakultas/Fakultas";
import Hukum from "../pages/riwayatPresensi/jurusan/Hukum";
import Bisnis from "../pages/riwayatPresensi/jurusan/Bisnis";
import Sains from "../pages/riwayatPresensi/jurusan/Sains";
import Sastra from "../pages/riwayatPresensi/jurusan/Sastra";
import Math from "../pages/riwayatPresensi/jurusan/Math";
import Kesehatan from "../pages/riwayatPresensi/jurusan/Kesehatan";
import Computer from "../pages/riwayatPresensi/jurusan/Computer";
import Media from "../pages/riwayatPresensi/jurusan/Media";
import Kehadiran from "../pages/riwayatPresensi/kehadiran/Kehadiran";
import DetailKehadiran from "../pages/riwayatPresensi/detailKehadiran/DetailKehadiran";

const RouterManagement = () => {
  const token = localStorage.getItem("access_token");
  const navigate = useNavigate();
  const { tahun, fakultas } = useParams();

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
                    <Route path="/data-mahasiswa" element={<DataMahasiswa />} />
                    <Route path="/riwayat-presensi" element={<RiwayatPresensi />} />
                    <Route path="/riwayat-presensi/:tahun" element={<Fakultas />} />
                    <Route path="/riwayat-presensi/:tahun/hukum" element={<Hukum />} />
                    <Route path="/riwayat-presensi/:tahun/bisnis" element={<Bisnis />} />
                    <Route path="/riwayat-presensi/:tahun/sains" element={<Sains />} />
                    <Route path="/riwayat-presensi/:tahun/sastra" element={<Sastra />} />
                    <Route path="/riwayat-presensi/:tahun/math" element={<Math />} />
                    <Route path="/riwayat-presensi/:tahun/kesehatan" element={<Kesehatan />} />
                    <Route path="/riwayat-presensi/:tahun/computer" element={<Computer />} />
                    <Route path="/riwayat-presensi/:tahun/media" element={<Media />} />
                    <Route path="/riwayat-presensi/:tahun/:jurusan/:prodi" element={<Kehadiran />} />
                    <Route path="/riwayat-presensi/:tahun/:jurusan/:prodi/:id" element={<DetailKehadiran />} />
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
