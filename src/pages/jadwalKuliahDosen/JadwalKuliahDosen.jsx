import { Input, Table } from "antd";
import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import "./jadwalKuliahDosen.css";
import { Key } from "@phosphor-icons/react";

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
      key: 1,
      mataKuliah: "Bahasa Indonesia",
      jumlahSks: "3",
      kelas: "Kelas B",
      jumlahMahasiswa: "30",
      jadwal: "Selasa 07:00-08:00 wib",
    },
    {
      key: 1,
      mataKuliah: "Bahasa Indonesia",
      jumlahSks: "3",
      kelas: "Kelas B",
      jumlahMahasiswa: "30",
      jadwal: "Selasa 07:00-08:00 wib",
    },
    {
      key: 1,
      mataKuliah: "Bahasa Indonesia",
      jumlahSks: "3",
      kelas: "Kelas B",
      jumlahMahasiswa: "30",
      jadwal: "Selasa 07:00-08:00 wib",
    },
    {
      key: 1,
      mataKuliah: "Bahasa Indonesia",
      jumlahSks: "3",
      kelas: "Kelas B",
      jumlahMahasiswa: "30",
      jadwal: "Selasa 07:00-08:00 wib",
    },
    {
      key: 1,
      mataKuliah: "Bahasa Indonesia",
      jumlahSks: "3",
      kelas: "Kelas B",
      jumlahMahasiswa: "30",
      jadwal: "Selasa 07:00-08:00 wib",
    },
  ];
  return (
    <div>
      <div className="jadwal-dosen-section">
        <div className="header-jadwal">
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{
              width: 200,
            }}
          />
        </div>
        <div className="table-jadwal-dosen">
          <Table columns={column} dataSource={datasource} />
        </div>
      </div>
    </div>
  );
};

export default JadwalKuliahDosen;
