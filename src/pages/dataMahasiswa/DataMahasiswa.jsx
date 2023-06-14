import { Link } from "react-router-dom";
import "./datamahasiswa.css"; // Impor file CSS terpisah

const DataMahasiswa = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Manage Data</h1>
      </div>
      <div className="box">
        <Link to="/dashboard-admin/data/data-mahasiswa">
          <p className="text">Data Mahasiswa</p>
        </Link>
      </div>
      <div className="box">
        <Link to="/dashboard-admin/data/data-dosen">
          <p className="text">Data Dosen</p>
        </Link>
      </div>
    </div>
  );
};

export default DataMahasiswa;
