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
  const [, data, getDataJadwal] = useGetDataJadwalId();
  const [dosenOptions, setDosenOptions] = useState([]);
  const [roomOptions, setRoomOptions] = useState([]);
  const [matakuliahOptions, setMatakuliahOptions] = useState([]);

  useEffect(() => {
    getDataJadwal().then(([ data]) => {
      setDataJadwalKuliah(data);
    });
  }, []);

  useEffect(() => {
    if (data) {
      formBio.setFieldsValue({
        matakuliah_id: data.name,
        sks: data.sks,
        room_id: data.room.name,
        dosen_id: data.dosen.name,
        jam_awal: data.jam_mulai ? moment(data.jam_mulai) : null,
        jam_selesai: data.jam_selesai ? moment(data.jam_selesai) : null,
      });
    }
  }, [data]);

  const handleDelete = async () => {
    try {
      const token = localStorage.getItem("token");
      await api.deleteJadwalByID(id_jadwal, token);
      // Redirect or show success message
    } catch (error) {
      console.error("Failed to delete jadwal:", error);
    }
  };

  const onFinish = () => {};

  const saveResponse = (data) => {
    const { matakuliah, sks, room, dosen, jam_mulai, jam_selesai } = data.data;
    data({
      matakuliah_id: matakuliah.ID,
      sks,
      room_id: room.ID,
      dosen_id: dosen.ID,
      jam_awal: moment(jam_mulai),
      jam_selesai: moment(jam_selesai),
    });
  };

  return (
    <div className="Layout-jadwal-kuliah">
      <p>Manage Jadwal</p>
      <Form form={formBio} layout="vertical" colon={false} onFinish={onFinish}>
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
            <Button className="submit-form-jadwal-kuliah" style={{ float: "right" }} htmlType="submit" onClick={() => saveResponse(response)}>
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
          <Button className="btn-hapus" type="primary" style={{ float: "right" }}>
            Hapus
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateJadwalKuliah;
