import React from "react";
import { Button, Table } from "antd";
import "./JadwalKuliah.css";
import { Link } from "react-router-dom";

const dataSource = [
  {
    key: "1",
    mataKuliah: "Bahasa Indonesia",
    jumlahSks: 3,
    kelas: "Kelas A",
    pengajar: "Viki",
    jadwal: "Selasa,17.00-18.00",
  },
];

const columns = [
  {
    title: "Matakuliah",
    dataIndex: "mataKuliah",
    key: "mataKuliah",
  },
  {
    title: "Jumlah SKS",
    dataIndex: "jumlahSks",
    key: "jumlahSks",
  },
  {
    title: "Kelas",
    dataIndex: "kelas",
    key: "kelas",
  },
  {
    title: "Pengajar",
    dataIndex: "pengajar",
    key: "pengajar",
  },
  {
    title: "Jadwal",
    dataIndex: "jadwal",
    key: "jadwal",
  },
];

const JadwalKuliahAdmin = () => {
  return (
    <div className="display-table">
      <p>Manage Jadwal</p>
      <Table rowClassName={() => "rowClassName1"} className="table-jadwal-kuliah" dataSource={dataSource} columns={columns} pagination={{ pageSize: 10 }} />
      <Link to="/admin-page/form-jadwal-kuliah-admin">
        <Button className="btn-add" style={{ float: "right" }}>
          Tambah
        </Button>
      </Link>
    </div>
  );
};

export default JadwalKuliahAdmin;
