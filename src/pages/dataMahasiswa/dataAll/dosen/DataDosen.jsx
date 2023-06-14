import React, { useState, useEffect } from "react";
import "./dataall.css";
import { Button, Input, Pagination } from "antd";
import { Link } from "react-router-dom";

const { Search } = Input;

const DataDosen = () => {
  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Get token from local storage
        const token = localStorage.getItem("token");

        const response = await fetch("http://testing.biaracmpny.my.id/v1/dosen", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await response.json();

        const formattedData = data.dosens.map((dosen) => ({
          key: dosen.ID,
          nip: dosen.nip,
          name: dosen.name,
        }));
        setDataSource(formattedData);
        setFilteredData(formattedData);
        setTotalItems(formattedData.length);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (value) => {
    setSearchText(value);

    const filtered = dataSource.filter((data) => data.name.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered);
    setTotalItems(filtered.length);
    setCurrentPage(1);
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);

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
              <th>
                <Search placeholder="Cari Nama Dosen" allowClear onSearch={handleSearch} style={{ width: 200 }} />
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((data) => (
              <tr key={data.key}>
                <td>
                  <div className="nip-container">{data.nip}</div>
                  <hr className="horizontal-line" />
                </td>
                <td>{data.name}</td>
                <td>
                  <Link to={`/dashboard-admin/data/data-dosen/detail/${data.key}`}>
                    <Button className="button">Detail</Button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-container">
        <Pagination current={currentPage} pageSize={pageSize} total={totalItems} onChange={handleChangePage} showSizeChanger={false} />
      </div>
      <div className="button-container">
        <Link to="/dashboard-admin/data">
          <Button className="back-dosen">Back</Button>
        </Link>
        <Link to="/dashboard-admin/data/data-dosen/form-dosen">
          <Button className="tambah-dosen">Tambah</Button>
        </Link>
      </div>
    </div>
  );
};

export default DataDosen;
