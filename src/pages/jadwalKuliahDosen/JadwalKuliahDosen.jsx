import { Input, Select, Table } from "antd";
import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import "./jadwalKuliahDosen.css";
import { Link, useParams } from "react-router-dom";

const JadwalKuliahDosen = () => {

  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1677ff",
      }}
    />
  );

  const onSearch = (value) => console.log(value);

  const column = [
    {
      title: "Mata Kuliah",
      dataIndex: "mataKuliah",
      key: "mataKuliah",
      render: (text, record) => <Link to={`/dosen-page/jadwal-kuliah-dosen/${record.id}`}>{text}</Link>,
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
      title: "Jumlah Mahasiswa",
      dataIndex: "jumlahMahasiswa",
      key: "jumlahMahasiswa",
    },
    {
      title: "Jadwal",
      dataIndex: "jadwal",
      key: "jadwal",
    },
  ];

  const datasource = [
    {
      id: 1,
      mataKuliah: "Bahasa Indonesia",
      jumlahSks: "3",
      kelas: "Kelas B",
      jumlahMahasiswa: "30",
      jadwal: "Selasa 07:00-08:00 wib",
    },
    {
      id: 2,
      mataKuliah: "Bahasa Indonesia",
      jumlahSks: "3",
      kelas: "Kelas B",
      jumlahMahasiswa: "30",
      jadwal: "Selasa 07:00-08:00 wib",
    },
    {
      id: 3,
      mataKuliah: "Bahasa Indonesia",
      jumlahSks: "3",
      kelas: "Kelas B",
      jumlahMahasiswa: "30",
      jadwal: "Selasa 07:00-08:00 wib",
    },
    {
      id: 4,
      mataKuliah: "Bahasa Indonesia",
      jumlahSks: "3",
      kelas: "Kelas B",
      jumlahMahasiswa: "30",
      jadwal: "Selasa 07:00-08:00 wib",
    },
    {
      id: 5,
      mataKuliah: "Bahasa Indonesia",
      jumlahSks: "3",
      kelas: "Kelas B",
      jumlahMahasiswa: "30",
      jadwal: "Selasa 07:00-08:00 wib",
    },
  ];

  const hari = [
    {
      value: "senin",
      label: "Senin",
    },
    {
      value: "selasa",
      label: "Selasa",
    },
    {
      value: "rabu",
      label: "Rabu",
    },
    {
      value: "kamis",
      label: "Kamis",
    },
    {
      value: "jumat",
      label: "Jumat",
    },
    {
      value: "sabtu",
      label: "Sabtu",
    },
    {
      value: "minggu",
      label: "Minggu",
    },
  ];
  return (
    <div>
      <p className="title-jadwal-dosen">Jadwal Saya</p>
      <div className="jadwal-dosen-section">
        <div className="header-jadwal">
          <div className="search">
            <Search
              placeholder="input search text"
              allowClear
              onSearch={onSearch}
              style={{
                width: 200,
                flexGrow: 1,
                borderRadius: "15px",
              }}
            />
          </div>
          <div className="filter-jadwal-dosen">
            <Select className="select-filter" placeholder="Hari" options={hari} />
            <Select className="select-filter" placeholder="Matakuliah" />
            <Select className="select-filter" placeholder="Kelas" />
          </div>
        </div>
        <div className="table-jadwal-dosen">
          <Table columns={column} dataSource={datasource} />
        </div>
      </div>
    </div>
  );
};

export default JadwalKuliahDosen;
