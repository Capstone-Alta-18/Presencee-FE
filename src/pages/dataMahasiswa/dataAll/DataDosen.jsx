import React, { useState } from "react";
import "./dataall.css";
import { Button } from "antd";
import { Input } from "antd";
import { Link } from "react-router-dom";

const DataDosen = () => {
  const { Search } = Input;
  const dataSource = [
    {
      key: "1",
      nip: "4512636127377",
      namaDosen: "John Doe",
    },
    {
      key: "2",
      nip: "4512636127377",
      namaDosen: "Jane Smith",
    },
    {
      key: "3",
      nip: "4512636127377",
      namaDosen: "Jane Smith",
    },
    {
      key: "4",
      nip: "4512636127377",
      namaDosen: "Jane Smith",
    },
    {
      key: "5",
      nip: "4512636127377",
      namaDosen: "Jane Smith",
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(dataSource);

  const handleDetail = () => {};

  const handleSearch = (value) => {
    setSearchText(value);

    const filtered = dataSource.filter((data) => data.namaDosen.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered);
  };

  return (
    <div className="container">
      <div className="title-box">
        <h1 className="title">Data Dosen</h1>
      </div>
      <div className="table-container">
        <table className="custom-table">
          <thead>
            <tr>
              <th className="container-th1">NIP</th>
              <th className="container-th">Nama Dosen</th>
              <Search
                placeholder="Cari Nama Dosen"
                allowClear
                onSearch={handleSearch}
                style={{
                  width: 200,
                }}
              />
            </tr>
          </thead>
          <tbody>
            {filteredData.map((data) => (
              <tr key={data.key}>
                <td>
                  <div className="nip-container">{data.nip}</div>
                  <hr className="horizontal-line" />
                </td>
                <td>{data.namaDosen}</td>
                <td>
                  <button className="button" onClick={() => handleDetail(data.nip)}>
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-container">
        <Link to="/dashboard-admin/data">
          <Button className="back">Back</Button>
        </Link>
        <Link>
          <Button className="tambah">Tambah</Button>
        </Link>
      </div>
    </div>
  );
};

export default DataDosen;
