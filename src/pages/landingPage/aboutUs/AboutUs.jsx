import React, { useEffect } from "react";
import "./aboutUs.css";
import { IMAGES } from "../../../assets/constant";
import { useGetDosen, useGetMahasiswa, useGetRoom } from "./hooks/useGetData";

const AboutUs = () => {
  const [, mahasiswas, getMahasiswa] = useGetMahasiswa();
  const [, dosens, getDosen] = useGetDosen();
  const [, rooms, getRoom] = useGetRoom();

  useEffect(() => {
    getMahasiswa();
    getDosen();
    getRoom();
  }, []);

  return (
    <div id="aboutus">
      <div className="about-section">
        <div className="about">
          <img src={IMAGES.logo1} alt="about us image" width={400} />
          <div className="about-text">
            <p>Presensee merupakan platform untuk presensi berbasis online. Presensee hadir untuk memudahkan akses dalam mengisi absensi dari segi peserta didik dan membantu pendidikan mengetahui kehadiran dari peserta didik.</p>
          </div>
        </div>
      </div>
      <div className="info-section">
        <div className="info-text">
          <div className="info-mahasiswa">
            <p>
              {mahasiswas?.length} <br /> Mahasiswa
            </p>
          </div>
          <div className="info-dosen">
            <p>
              {dosens?.length} <br /> Dosen
            </p>
          </div>
          <div className="info-kelas">
            <p>
              {rooms?.length} <br /> Kelas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
