import React from "react";
import { useParams } from "react-router-dom";
import { Input, Select, Table } from "antd";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "./detailJadwal.css";

const DetailJadwal = () => {
  const { id } = useParams();
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const currentDate = dayjs().format("dddd, DD MMMM YYYY");

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

  const column = [
    {
      title: "Nama Mahasiswa",
      dataIndex: "namaMahasiswa",
      key: "namaMahasiswa",
    },
    {
      title: "NIM",
      dataIndex: "nim",
      key: "nim",
    },
    {
      title: "Status Kedatangan",
      dataIndex: "statusKedatangan",
      key: "statusKedatangan",
    },
    {
      title: "Waktu",
      dataIndex: "waktu",
      key: "waktu",
    },
    {
      title: "Aksi",
      dataIndex: "aksi",
      key: "aksi",
    },
  ];

  const datasource = [
    {
      id: 1,
      namaMahasiswa: "Viki Ade Safaat",
      nim: "20110312",
      statusKedatangan: (
        <span
          style={{
            backgroundColor: "green",
            padding: "5px",
            color: "white",
          }}
        >
          Hadir
        </span>
      ),
      waktu: "18.00",
      aksi: "Aksi",
    },
    {
      id: 2,
      namaMahasiswa: "John Doe",
      nim: "20120345",
      statusKedatangan: (
        <span
          style={{
            backgroundColor: "red",
            padding: "5px",
            color: "white",
          }}
        >
          Alpha
        </span>
      ),
      waktu: "18.00",
      aksi: "Aksi",
    },
    {
      id: 3,
      namaMahasiswa: "Jane Smith",
      nim: "20130456",
      statusKedatangan: (
        <span
          style={{
            backgroundColor: "yellow",
            padding: "5px",
            color: "black",
          }}
        >
          Izin
        </span>
      ),
      waktu: "18.00",
      aksi: "Aksi",
    },
    {
      id: 4,
      namaMahasiswa: "Alex Johnson",
      nim: "20140567",
      statusKedatangan: (
        <span
          style={{
            backgroundColor: "blue",
            padding: "5px",
            color: "white",
          }}
        >
          Sakit
        </span>
      ),
      waktu: "18.00",
      aksi: "Aksi",
    },
  ];

  return (
    <div>
      <p className="title-jadwal-dosen">
        Matakuliah - Kelas <br /> Hari
      </p>
      <p className="tanggal-jadwal-dosen">{currentDate}</p>
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
        <div className="table-jadwal-dosen-detail">
          <Table columns={column} dataSource={datasource} />
        </div>
      </div>
    </div>
  );
};

export default DetailJadwal;
