import React, { useEffect, useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import { api } from "../../../api/Index";
import { useGetDataJadwalId } from "./hooks/useGetDataJadwalId";
import { Form, Input, Select, DatePicker, Button, Row, Col } from "antd";

const { Option } = Select;

const UpdateJadwalKuliah = ({ id_jadwal }) => {
  const [formBio] = Form.useForm();
  const [dataJadwalKuliah, setDataJadwalKuliah] = useState(null);
  const [, , getDataJadwal] = useGetDataJadwalId();
  const [dosenOptions, setDosenOptions] = useState([]);
  const [roomOptions, setRoomOptions] = useState([]);
  const [matakuliahOptions, setMatakuliahOptions] = useState([]);
  console.log(dataJadwalKuliah);
  useEffect(() => {
    getDataJadwal().then(([isLoading, data]) => {
      setDataJadwalKuliah(data);
    });
  }, []);

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
          matakuliah_id: dataJadwalKuliah?.matakuliah_id,
          sks: dataJadwalKuliah?.data.sks,
          room_id: dataJadwalKuliah?.room_id,
          dosen_id: dataJadwalKuliah?.dosen_id,
          jam_awal: dataJadwalKuliah?.jam_awal ? moment(dataJadwalKuliah.jam_awal) : null,
          jam_selesai: dataJadwalKuliah?.jam_selesai ? moment(dataJadwalKuliah.jam_selesai) : null,
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

export default UpdateJadwalKuliah;
