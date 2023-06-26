import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Popconfirm, Button, Input, Select, Table, message } from "antd";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "./detailJadwal.css";
import { useGetDataAbsen } from "./hooks/useGetDataAbsen";

const DetailJadwal = () => {
  const { user_id } = useParams();
  const { Search } = Input;
  const onSearch = (value) => console.log(value);
  const currentDate = dayjs().format("dddd, DD MMMM YYYY");
  const [confirm, setConfirm] = useState(false);

  const [isLoading, dataAbsen, getDataAbsen, confirmAbsen] = useGetDataAbsen();
  console.log({ dataAbsen });
  useEffect(() => {
    getDataAbsen();
  }, []);

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

  const handleConfirm = async (id) => {
    const body = {
      id: id,
      is_konfirmasi: true,
    };
    await confirmAbsen(body);
    setConfirm(true);
  };

  const renderAksi = (is_konfirmasi, id) => {
    if (is_konfirmasi) {
      return <span style={{ borderRadius: "21px", background: "#34B139", padding: "5px", color: "#fff" }}>Terkonfirmasi</span>;
    } else {
      return (
        <Popconfirm title="Konfirmasi" description="Apakah anda yakin akan melakukan konfirmasi?" onConfirm={() => handleConfirm(id)} onCancel={cancel} okText="Yes" cancelText="No">
          <Button type="primary" style={{ borderRadius: "0" }}>
            Pilih Aksi
          </Button>
        </Popconfirm>
      );
    }
  };

  const columns = [
    {
      title: "Nama Mahasiswa",
      dataIndex: "mahasiswa",
      key: "mahasiswa",
      render: (mahasiswa) => mahasiswa.name,
    },
    {
      title: "NIM",
      dataIndex: "mahasiswa",
      key: "mahasiswa",
      render: (mahasiswa) => mahasiswa.nim,
    },
    {
      title: "Status Kedatangan",
      dataIndex: "status",
      key: "status",
      render: (text) => {
        const backgroundColor =
          text === "Sakit"
            ? "#3153AA" // Biru
            : text === "Izin"
            ? "#CCB90D" // Kuning
            : text === "Hadir"
            ? "rgba(64, 119, 76, 1)" // Hijau
            : text === "Dispensasi"
            ? "orange"
            : text === "Alpha"
            ? "#AA3131"
            : "";

        return (
          <span
            style={{
              backgroundColor,
              padding: "5px 30px",
              color: "white",
              borderRadius: "26px",
            }}
          >
            {text}
          </span>
        );
      },
    },
    {
      title: "Waktu",
      dataIndex: "time_attemp",
      key: "time_attemp",
      render: (waktu) => dayjs(waktu).format("HH:mm"),
    },
    {
      title: "Aksi",
      dataIndex: "is_konfirmasi",
      key: "is_konfirmasi",
      render: (is_konfirmasi, record) => renderAksi(is_konfirmasi, record.id),
    },
  ];

  const cancel = (e) => {
    console.log(e);
    message.error("Aksi dibatalkan");
  };

  return (
    <div>
      <div className="header-jadwal-dosen">
        <p className="title-jadwal-dosen">Data Absensi</p>
        <p className="tanggal-jadwal-dosen">{currentDate}</p>
      </div>
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
          <Table columns={columns} dataSource={dataAbsen} />
        </div>
      </div>
    </div>
  );
};

export default DetailJadwal;
