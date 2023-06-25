import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Form, Input, Select, DatePicker, Button, Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./updateJadwalKuliah.css";
import { api } from "../../../api/Index";
import moment from "moment";

const { Option } = Select;

const UpdateJadwalKuliah = ({ id_jadwal }) => {
  const [formBio] = Form.useForm();
  const [matakuliahId, setMatakuliahId] = useState("");
  const [sks, setSks] = useState("");
  const [roomId, setRoomId] = useState("");
  const [dosenId, setDosenId] = useState("");
  const [jamAwal, setJamAwal] = useState(null);
  const [jamSelesai, setJamSelesai] = useState(null);
  const [dosenOptions, setDosenOptions] = useState([]);
  const [roomOptions, setRoomOptions] = useState([]);
  const [matakuliahOptions, setMatakuliahOptions] = useState([]);

  useEffect(() => {
    const fetchJadwalById = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await api.getJadwalByID(id_jadwal, token);
        const jadwal = response.data.data[0];
        setMatakuliahId(jadwal.matakuliah_id);
        setSks(jadwal.sks);
        setRoomId(jadwal.room_id);
        setDosenId(jadwal.dosen_id);
        setJamAwal(jadwal.jam_mulai);
        setJamSelesai(jadwal.jam_selesai);
        setDosenOptions([{ ID: jadwal.dosen_id, name: jadwal.dosen.name }]);
        setRoomOptions([{ ID: jadwal.room_id, name: jadwal.room.name }]);
        setMatakuliahOptions([{ ID: jadwal.matakuliah_id, name: jadwal.name }]);
      } catch (error) {
        console.error("Failed to fetch jadwalById:", error);
      }
    };

    fetchJadwalById();
  }, [id_jadwal]);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await api.deleteJadwalById(id_jadwal, token);
      // Redirect or show success message
    } catch (error) {
      console.error("Failed to delete jadwal:", error);
    }
  };

  const onFinish = () => {};

  return (
    <div className="Layout-jadwal-kuliah">
      <p>Manage Jadwal</p>
      <Form
        form={formBio}
        layout="vertical"
        colon={false}
        onFinish={onFinish}
        initialValues={{
          matakuliah_id: matakuliahId,
          sks,
          room_id: roomId,
          dosen_id: dosenId,
          jam_awal: jamAwal ? moment(jamAwal) : null,
          jam_selesai: jamSelesai ? moment(jamSelesai) : null,
        }}
      >
        <div className="layout-form-jadwal-kuliah">
          <h1 className="title-form-jadwal-kuliah"> Lihat Jadwal Kuliah </h1>
          <Row>
            <Col className="col-layout-form-jadwal-kuliah" span={12}>
              <Form.Item name="matakuliah_id" label="Mata Kuliah" className="white-label">
                <Select className="input-box" showSearch placeholder="" optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  {matakuliahOptions.map((matakuliah) => (
                    <Option key={matakuliah.ID} value={matakuliah.ID}>
                      {matakuliah.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item
                name="sks"
                label="Jumlah SKS"
                rules={[
                  {
                    required: true,
                    message: "Mohon masukkan Jumlah SKS Mata Kuliah!",
                  },
                ]}
                className="white-label"
              >
                <Input className="input-box" placeholder="Masukkan Jumlah SKS" />
              </Form.Item>

              <Form.Item name="room_id" label="Kelas" className="white-label">
                <Select className="input-box" showSearch placeholder="" optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  {roomOptions.map((room) => (
                    <Option key={room.ID} value={room.ID}>
                      {room.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col className="col-layout-form-jadwal-kuliah" span={12}>
              <Form.Item name="dosen_id" label="Pengajar" className="white-label">
                <Select className="input-box" showSearch placeholder="" optionFilterProp="children" filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  {dosenOptions.map((dosen) => (
                    <Option key={dosen.ID} value={dosen.ID}>
                      {dosen.name}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item label="Jadwal Kelas" className="white-label">
                <Row>
                  <Col>
                    <Form.Item name="jam_awal" noStyle>
                      <DatePicker className="input-box-jam" showTime={{ format: "HH:mm" }} format="YYYY-MM-DD HH:mm" />
                    </Form.Item>
                  </Col>
                  <Col span={12}>
                    <Form.Item name="jam_selesai" noStyle>
                      <DatePicker className="input-box-jam" showTime={{ format: "HH:mm" }} format="YYYY-MM-DD HH:mm" />
                    </Form.Item>
                  </Col>
                </Row>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button className="submit-form-jadwal-kuliah" style={{ float: "right" }} htmlType="submit">
              Simpan
            </Button>
          </Form.Item>
        </div>
      </Form>
      <div className="footer-update-jadwal">
        <Link to={"/admin-page/jadwal-kuliah-admin"}>
          <div>
            <Button className="btn-jadwal" type="primary">
              Back
            </Button>
          </div>
        </Link>
        <div>
          <Button className="btn-jadwal" type="primary" danger onClick={handleDelete}>
            Hapus
          </Button>
        </div>
      </div>
    </div>
  );
};

UpdateJadwalKuliah.propTypes = {
  id_jadwal: PropTypes.string.isRequired,
};

export default UpdateJadwalKuliah;
