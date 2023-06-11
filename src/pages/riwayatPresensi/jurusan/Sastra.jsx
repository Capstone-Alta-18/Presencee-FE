import React from "react";
import "./jurusan.css";
import { BTN_SASTRA } from "./constant";
import { Link, useParams } from "react-router-dom";

const Sastra = () => {
  const { tahun } = useParams();
  const { prodi } = useParams();
  return (
    <div>
      <div className="title-page-jurusan">
        <h2>Halaman Riwayat</h2>
      </div>
      <div className="content-halaman-jurusan">
        <div className="title-content">
          <p>jurusan</p>
        </div>
        <div className="button-jurusan">
          {BTN_SASTRA.map((index) => (
            <Link to={`/admin-page/riwayat-presensi/${tahun}/sastra/${index.prodi.toLocaleLowerCase()}`} key={index.data}>
              <div className="btn-jurusan">
                {index.data} <br />
                {index.prodi}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sastra;
