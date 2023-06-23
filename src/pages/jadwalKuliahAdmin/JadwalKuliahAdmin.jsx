import React, { useEffect, useState } from "react";
import { Button, Table } from "antd";
import "./JadwalKuliah.css";
import { Link, useParams } from "react-router-dom";
import { api } from "../../api/Index";

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
          jadwal: item.jam,
        }));
        setDataSource(formattedData);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  const renderMataKuliah = (text, record) => {
    // Custom rendering for MataKuliah column
    return (
      <Link to={`/admin-page/form-jadwal-kuliah-admin/${record.key}`} style={{ color: "black" }}>
        {text}
      </Link>
    );
  };

  const renderJumlahSks = (text) => {
    // Custom rendering for JumlahSks column
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
