// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Button } from "antd";
import { Input } from "antd";
import { Link } from "react-router-dom";
import "./datamhs.css";

const DataMhs = () => {
  const { Search } = Input;
  const dataSource = [
    {
      key: "1",
      tahun: "2018",
      nim: "4512636127377",
      namaMahasiswa: "M.Yazid",
    },
    {
      key: "2",
      tahun: "2018",
      nim: "4512636127377",
      namaMahasiswa: "Santoso",
    },
    {
      key: "3",
      tahun: "2018",
      nim: "4512636127377",
      namaMahasiswa: "Jane Smith",
    },
    {
      key: "4",
      tahun: "2018",
      nim: "4512636127377",
      namaMahasiswa: "Jane Smith",
    },
    {
      key: "5",
      tahun: "2018",
      nim: "4512636127377",
      namaMahasiswa: "Jane Smith",
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(dataSource);

  const handleDetail = (nim) => {
    // Handle detail logic here
  };

  const handleSearch = (value) => {
    setSearchText(value);

    const filtered = dataSource.filter((data) => data.namaMahasiswa.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <div className="container-mhs">
      <div className="title-box-mhs">
        <h1 className="title-mhs">Data Mahasiswa</h1>
      </div>
      <div className="table-container-mhs">
        <table className="custom-table-mhs">
          <thead>
            <tr>
              <th className="container-th1-mhs">Tanggal Masuk</th>
              <th className="container-th1-mhs">NIM</th>
              <th className="container-th-mhs">Nama Mahasiswa</th>
              <Search
                placeholder="Cari Nama Mahasiswa"
                allowClear
                onSearch={handleSearch}
                style={{
                  width: 250,
                }}
              />
            </tr>
            <tr>
              <td colSpan={3}></td>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data) => (
              <tr key={data.key}>
                <td>{data.tahun}</td>
                <td>{data.nim}</td>
                <td>{data.namaMahasiswa}</td>
                <td>
                  <button className="button-mhs" onClick={() => handleDetail(data.nim)}>
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-container-mhs">
        <Link to="/dashboard-admin/data">
          <Button className="back-mhs">Back</Button>
        </Link>
        <Link>
          <Button className="tambah-mhs">Tambah</Button>
        </Link>
      </div>
    </div>
  );
};

export default DataMhs;
