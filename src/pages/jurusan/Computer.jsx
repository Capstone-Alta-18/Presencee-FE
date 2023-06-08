import React from "react";
import "./jurusan.css";
import { BTN_COMPUTER } from "./constant";
import { Link } from "react-router-dom";

const Computer = () => {
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
          {BTN_COMPUTER.map((index) => (
            <Link
              to={`/admin-page/riwayat-presensi/${index.data}`}
              key={index.data}
            >
              <div className="btn-jurusan">
                {index.data} <br />
                {index.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Computer;
