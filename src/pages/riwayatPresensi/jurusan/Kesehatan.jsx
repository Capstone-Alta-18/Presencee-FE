import React from "react";
import "./jurusan.css";
import { BTN_KESEHATAN } from "./constant";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Kesehatan = () => {
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
          {BTN_KESEHATAN.map((index) => (
            <Link to={`/admin-page/riwayat-presensi/${tahun}/kesehatan/${index.prodi.toLocaleLowerCase()}`} key={index.data}>
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

export default Kesehatan;
