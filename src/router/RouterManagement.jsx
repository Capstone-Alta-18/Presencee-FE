import { Suspense, useEffect } from "react";
import { Route, Routes, useNavigate, Navigate, useParams } from "react-router-dom";
import RiwayatPresensi from "../pages/riwayatPresensi/RiwayatPresensi";
import LoginAdmin from "../pages/loginAdmin/LoginAdmin";
import DashboardAdmin from "../pages/dashboardAdmin/DashboardAdmin";
import JadwalKuliahAdmin from "../pages/jadwalKuliahAdmin/JadwalKuliahAdmin";
import DataMahasiswa from "../pages/dataMahasiswa/DataMahasiswa";
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
import DataDosen from "../pages/dataMahasiswa/dataAll/dosen/DataDosen";
import DataMhs from "../pages/dataMahasiswa/dataAll/mahasiswa/DataMhs";
import FormDosen from "../pages/dataMahasiswa/formDosen/FormDosen";
import FormMahasiswa from "../pages/dataMahasiswa/formMahasiswa/FormMahasiswa";
import DetailDosen from "../pages/dataMahasiswa/formDosen/detail/DetailDosen";
import DashboardDosen from "../pages/dashboardDosen/DashboardDosen";
import JadwalKuliahDosen from "../pages/jadwalKuliahDosen/JadwalKuliahDosen";
import FormJadwalKuliah from "./../pages/jadwalKuliahAdmin/formJadwalKuliah/formJadwalKuliah";
import LayoutComponent from "../components/layout/LayoutComponent";
import LandingMain from "../pages/landingPage/LandingMain";
import LoginDosen from "../pages/loginDosen/LoginDosen";
import DetailMhs from "../pages/dataMahasiswa/dataAll/mahasiswa/DataMhs";
import LayoutComponentDosen from "../components/layoutDosen/LayoutComponentDosen";

const RouterManagement = () => {
  const token = localStorage.getItem("token");
  const role = localStorage.getItem("role");
  const navigate = useNavigate();
  const { tahun, fakultas } = useParams();

  useEffect(() => {
    if (!token && window.location.pathname !== "/login-admin" && window.location.pathname !== "/login-dosen") {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LandingMain />} />
          <Route path="/login-admin" element={<LoginAdmin />} />
          <Route path="/login-dosen" element={<LoginDosen />} />
          <Route
            path="/admin-page/*"
            element={
              token ? (
                <LayoutComponent>
                  <Routes>
                    <Route path="/" element={<DashboardAdmin />} />
                    <Route path="/jadwal-kuliah-admin" element={<JadwalKuliahAdmin />} />
                    <Route path="/form-jadwal-kuliah-admin" element={<FormJadwalKuliah />} />
                    <Route path="/data" element={<DataMahasiswa />} />
                    <Route path="/data/data-dosen" element={<DataDosen />} />
                    <Route path="/data/data-dosen/detail/:id" element={<DetailDosen />} />
                    <Route path="/data/data-dosen/form-dosen" element={<FormDosen />} />
                    <Route path="/data/data-mahasiswa/form-mahasiswa" element={<FormMahasiswa />} />
                    <Route path="/data/data-mahasiswa" element={<DataMhs />} />
                    <Route path="/data/data-mahasiswa/detail/:id" element={<DetailMhs />} />
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
          <Route
            path="/dosen-page/*"
            element={
              <LayoutComponentDosen>
                <Routes>
                  <Route path="/" element={<DashboardDosen />} />
                  <Route path="/jadwal-kuliah-dosen" element={<JadwalKuliahDosen />} />
                </Routes>
              </LayoutComponentDosen>
            }
          />
        </Routes>
      </Suspense>
    </div>
  );
};

export default RouterManagement;
