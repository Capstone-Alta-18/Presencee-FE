import React from "react";
import "./kehadiran.css";
import { Button, Progress } from "antd";
import ProgresBar from "../../../components/progresBar/ProgresBar";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Kehadiran = () => {
  const { tahun, jurusan, prodi, id } = useParams();

  return (
    <div>
      <div className="title-page-kehadiran">
        <h2>Halaman Riwayat</h2>
      </div>
      <div className="content-halaman-kehadiran">
        <div className="header-kehadiran">
          <div className="judul-kehadiran">
            <p>
              Fakultas : <b>{jurusan}</b>
            </p>
            <p>
              Program Studi : <b>{prodi}</b>
            </p>
          </div>
          <div className="btn-kembali">
            <Link to="/admin-page/riwayat-presensi">
              <Button type="primary">Tahun Ajaran</Button>
            </Link>
            <Link to={`/admin-page/riwayat-presensi/${tahun}`}>
              <Button type="primary">Fakultas</Button>
            </Link>
          </div>
        </div>
        <div className="content-kehadiran">
          <div>
            <p>Prodi A</p>
            <p>Total Kehadiran</p>
          </div>
          <div className="data-detail">
            <Link to={`/admin-page/riwayat-presensi/${tahun}/${jurusan}/${prodi}/{id}`}>
              <Button type="primary" className="btn-detail">
                Lihat Detail
              </Button>
            </Link>
            <ProgresBar bgcolor="#D35858" progress="85" />
          </div>
        </div>
        <hr className="garis" />
        <div className="content-kehadiran">
          <div>
            <p>Prodi A</p>
            <p>Total Kehadiran</p>
          </div>
          <div className="data-detail">
            <Button type="primary" className="btn-detail">
              Lihat Detail
            </Button>
            <ProgresBar bgcolor="#D35858" progress="100" />
          </div>
        </div>
        <hr className="garis" />
        <div className="content-kehadiran">
          <div>
            <p>Prodi A</p>
            <p>Total Kehadiran</p>
          </div>
          <div className="data-detail">
            <Button type="primary" className="btn-detail">
              Lihat Detail
            </Button>
            <ProgresBar bgcolor="#D35858" progress="96" />
          </div>
        </div>
        <hr className="garis" />
      </div>
    </div>
  );
};

export default Kehadiran;
