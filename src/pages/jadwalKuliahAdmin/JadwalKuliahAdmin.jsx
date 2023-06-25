import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";

import "./jadwalKuliah.css";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api/Index";
import dayjs from "dayjs";
dayjs.locale("id");
import "./jadwalKuliah.css";
import { Link } from "react-router-dom";

const dataSource = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
  },
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

const JadwalKuliahAdmin = () => {
  const [dataSource, setDataSource] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await api.getJadwal();
      if (response.data && Array.isArray(response.data.data)) {
        const formattedData = response.data.data.map((item) => ({
          key: item.id,
          mataKuliah: item.name,
          jumlahSks: item.sks,
          kelas: item.room_id,
          pengajar: item.dosen ? item.dosen.name : "",
          jadwal: `${dayjs(item.jam_mulai).format("dddd")} ${dayjs(item.jam_mulai).format("HH.mm")}-${dayjs(item.jam_selesai).format("HH.mm")} WIB`,
        }));
        setDataSource(formattedData);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const renderMataKuliah = (text, data) => {
    return (
      <Link to={`/admin-page/form-jadwal-kuliah-admin/${data.key}`} style={{ color: "black" }}>
        {text}
      </Link>
    );
  };

  const renderJumlahSks = (text) => {
    return <span>{text} SKS</span>;
  };

  const columns = [
    {
      title: "Matakuliah",
      dataIndex: "mataKuliah",
      key: "mataKuliah",
      render: renderMataKuliah,
    },
    {
      title: "Jumlah SKS",
      dataIndex: "jumlahSks",
      key: "jumlahSks",
      render: renderJumlahSks,
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
      render: (text) => <span>{text}</span>,
    },
  ];

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
