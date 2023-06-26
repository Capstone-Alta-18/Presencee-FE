import { Input, Select, Table } from "antd";
import React, { useEffect } from "react";
import { AudioOutlined } from "@ant-design/icons";
import dayjs from "dayjs"; // Mengimpor day.js
import "./jadwalKuliahDosen.css";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api/Index";
import { useGetJadwalDosen } from "./hooks/useGetData";

const JadwalKuliahDosen = () => {
  const [isLoading, dataJadwal, getDataJadwal] = useGetJadwalDosen();
  console.log({ dataJadwal });
  useEffect(() => {
    getDataJadwal();
  }, [getDataJadwal]);

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

  const columns = [
    {
      title: "Mata Kuliah",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <Link to={`/dosen-page/jadwal-kuliah-dosen/${record.dosen.user_id}/${record.matakuliah_id}/${record.jam_mulai}/${record.jam_selesai}`} style={{ color: "black" }}>
          {text}
        </Link>
      ),
    },
    {
      title: "Jumlah SKS",
      dataIndex: "sks",
      key: "sks",
    },
    {
      title: "Kelas",
      dataIndex: "room",
      key: "room",
      render: (room) => room.name,
    },
    {
      title: "Jadwal",
      dataIndex: "id",
      key: "jadwal",
      render: (id, record) => {
        const { jam_mulai, jam_selesai } = record;
        const startTime = dayjs(jam_mulai).locale("id").format("dddd, HH:mm");
        const endTime = dayjs(jam_selesai).locale("id").format("HH:mm");
        return `${startTime} - ${endTime}`;
      },
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
    <div className="jadwal-dosen-section">
      <p className="title-jadwal-dosen">Jadwal Saya</p>
      <div>
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
          <Table columns={columns} dataSource={dataJadwal ? dataJadwal : []} />
        </div>
      </div>
    </div>
  );
};

export default JadwalKuliahDosen;
