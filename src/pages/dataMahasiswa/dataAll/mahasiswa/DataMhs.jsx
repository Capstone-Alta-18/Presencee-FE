import React, { useState, useEffect } from "react";
import { Button, Input, Pagination } from "antd";
import { Link } from "react-router-dom";
import "./datamhs.css";
import { api } from "../../../../api/Index";

const DataMhs = () => {
  const { Search } = Input;
  const [dataSource, setDataSource] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.getMahasiswa();
        const data = response.data;

        const formattedData = data.mahasiswas.map((mahasiswa) => ({
          key: mahasiswa.ID,
          tanggalMasuk: new Date(mahasiswa.CreatedAt).toLocaleDateString(),
          nim: mahasiswa.nim,
          namaMahasiswa: mahasiswa.name,
        }));

        setDataSource(formattedData);
        setFilteredData(formattedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDetail = (nim) => {
    // Handle detail logic here
  };

  const handleSearch = (value) => {
    setSearchText(value);

    const filtered = dataSource.filter((data) => data.namaMahasiswa.toLowerCase().includes(value.toLowerCase()));
    setFilteredData(filtered);
  };

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const paginatedData = filteredData.slice(startIndex, endIndex);

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
              <th>
                <Search placeholder="Cari Nama Mahasiswa" allowClear onSearch={handleSearch} style={{ width: 200 }} />
              </th>
              <th></th>
            </tr>
            <tr>
              <td colSpan={3}></td>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((data) => (
              <tr key={data.key}>
                <td>{data.tanggalMasuk}</td>
                <td>{data.nim}</td>
                <td>{data.namaMahasiswa}</td>
                <td>
                  <Button className="button-mhs" onClick={() => handleDetail(data.nim)}>
                    Detail
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination-container">
        <Pagination current={currentPage} pageSize={pageSize} total={filteredData.length} onChange={handleChangePage} showSizeChanger={false} />
      </div>
      <div className="button-container-mhs">
        <Link to="/admin-page/data">
          <Button className="back-mhs">Kembali</Button>
        </Link>
        <Link to="/admin-page/data/data-mahasiswa/form-mahasiswa">
          <Button className="tambah-mhs">Tambah</Button>
        </Link>
      </div>
    </div>
  );
};

export default DataMhs;
