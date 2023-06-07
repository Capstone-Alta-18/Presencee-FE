import React from "react";
import "./riwayatPresensi.css";
import { Button } from "antd";
import { BTN_RIWAYAT } from "./constant";
import { Link } from "react-router-dom";
const RiwayatPresensi = () => {
  return (
    <div>
      <div className="title-page-riwayat">
        <h2>Halaman Riwayat</h2>
      </div>
      <div className="content-halaman-riwayat">
        <div className="title-content">
          <p>Tahun Ajaran</p>
        </div>
        <div className="button-riwayat">
          {BTN_RIWAYAT.map((index) => (
            <Link
              to={`/admin-page/riwayat-presensi/${index.tahun}`}
              key={index.id}
            >
              <Button className="btn-riwayat" type="primary" data={index.data}>
                {index.tahun}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RiwayatPresensi;
