import React from "react";
import { Button, Table } from "antd";
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
  return (
    <div className="display-table">
      <p>Manage Jadwal</p>
      <Table rowClassName={() => "rowClassName1"} className="table-jadwal-kuliah" dataSource={dataSource} columns={columns} pagination={{ pageSize: 10 }} />
      <Link to="/form-jadwal-kuliah-admin">
        <Button className="btn-add" style={{ float: "right" }}>
          Tambahkan
        </Button>
      </Link>
    </div>
  );
};

export default JadwalKuliahAdmin;
