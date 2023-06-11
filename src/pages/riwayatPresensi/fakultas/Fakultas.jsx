import React from "react";
import "./fakultas.css";
import { Button } from "antd";
import { BTN_FAKULTAS } from "./constant";
import { Link, useParams } from "react-router-dom";

const Fakultas = () => {
  const { tahun } = useParams();

  return (
    <div>
      <div className="title-page-fakultas">
        <h2>Halaman Riwayat</h2>
      </div>
      <div className="content-halaman-fakultas">
        <div className="title-content">
          <p>Fakultas</p>
        </div>
        <div className="button-fakultas">
          {BTN_FAKULTAS.map((index) => (
            <Link to={`/admin-page/riwayat-presensi/${tahun}/${index.fakultas.toLowerCase()}`} key={index.id}>
              <div className="btn-fakultas">
                {index.icon} <br />
                {index.fakultas}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Fakultas;
