import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, DatePicker, Popconfirm, Space, message, Select, Checkbox, Radio, Alert, Modal, notification, Col, Row, TimePicker } from "antd";
import "./updateJadwalKuliah.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import dayjs from "dayjs";

const { Option } = Select;

const UpdateJadwalKuliah = () => {
  const [formBio] = Form.useForm();
  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);

  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const hari = [
    {
      Value: "Senin",
      label: "Senin",
    },
    {
      Value: "Selasa",
      label: "Selasa",
    },
    {
      Value: "Rabu",
      label: "Rabu",
    },
    {
      Value: "Kamis",
      label: "Kamis",
    },
    {
      Value: "Jumat",
      label: "Jumat",
    },
    {
      Value: "Sabtu",
      label: "Sabtu",
    },
  ];

  return (
    <div className="Layout-jadwal-kuliah">
      <p>Manage Jadwal</p>
      <Form className="display-form-jadwal-kuliah" name="form-bio" form={formBio} layout="vertical" colon={false} style={{}}>
        <div className="layout-form-jadwal-kuliah">
          <h1 className="title-form-jadwal-kuliah"> Lihat Jadwal Kuliah </h1>
          <Row>
            <Col className="col-layout-form-jadwal-kuliah" span={12}>
              <Form.Item name="matakuliah_id" label="Mata Kuliah" className="white-label">
                <Select className="input-box" showSearch placeholder="" optionFilterProp="children" filterOption={(input, option) => option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0}></Select>
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
                <Input className="input-box" placeholder="Masukkan Jumlah SKS " />
              </Form.Item>

              <Form.Item name="room_id" label="Kelas" className="white-label">
                <Select className="input-box" showSearch placeholder="" optionFilterProp="children" filterOption={(input, option) => option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0}></Select>
              </Form.Item>
            </Col>

            <Col className="col-layout-form-jadwal-kuliah" span={12}>
              <Form.Item name="dosen_id" label="Pengajar" className="white-label">
                <Select className="input-box" showSearch placeholder="" optionFilterProp="children" filterOption={(input, option) => option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0}></Select>
              </Form.Item>

              <Form.Item name="jam" label="Jadwal Kelas" className="white-label">
                <Space direction="vertical" size={12}>
                  <div className="jadwal-hari">
                    <Select placeholder="hari" options={hari} style={{ width: "100px" }} />
                    <TimePicker.RangePicker />
                    <DatePicker format="YYYY-MM-DD HH:mm:ss" showTime={{ defaultValue: dayjs("00:00:00", "HH:mm:ss") }} />
                  </div>
                </Space>
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
        <div>
          <Button className="btn-jadwal" type="primary">
            Back
          </Button>
        </div>
        <div>
          <Button className="btn-jadwal" type="primary">
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UpdateJadwalKuliah;
