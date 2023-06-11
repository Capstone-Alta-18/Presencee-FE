import React from "react";
import "./jurusan.css";
import { BTN_MATH } from "./constant";
import { Link, useParams } from "react-router-dom";

const Math = () => {
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
          {BTN_MATH.map((index) => (
            <Link to={`/admin-page/riwayat-presensi/${tahun}/math/${index.prodi.toLocaleLowerCase()}`} key={index.data}>
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

export default Math;
