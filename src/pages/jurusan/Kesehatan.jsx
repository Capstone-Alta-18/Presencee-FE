import React from "react";
import "./kesehatan.css";
import { BTN_KESEHATAN } from "./constant";
import { Link } from "react-router-dom";

const Kesehatan = () => {
  return (
    <div>
      <div className="title-page-kesehatan">
        <h2>Halaman Riwayat</h2>
      </div>
      <div className="content-halaman-kesehatan">
        <div className="title-content">
          <p>kesehatan</p>
        </div>
        <div className="button-kesehatan">
          {BTN_KESEHATAN.map((index) => (
            <Link
              to={`/admin-page/riwayat-presensi/${index.data}`}
              key={index.data}
            >
              <div>
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

export default Kesehatan;
