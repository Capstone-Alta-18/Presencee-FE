import "./datamahasiswa.css"; // Impor file CSS terpisah

const DataMahasiswa = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Manage Data</h1>
      </div>
      <div className="box">
        <p className="text">Data Mahasiswa</p>
      </div>
      <div className="box">
        <p className="text">Data Dosen</p>
      </div>
    </div>
  );
};

export default DataMahasiswa;
