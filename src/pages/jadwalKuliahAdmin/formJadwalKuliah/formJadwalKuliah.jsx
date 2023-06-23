import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, DatePicker, Popconfirm, Space, message, Select, Checkbox, Radio, Alert, Modal, notification, Col, Row } from "antd";
import "./formJadwalKuliah.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { useFetchDosenOptions, useFetchMatkulOptions, useFetchRoomOptions } from "./hooks/useGetData";
import { api } from "../../../api/Index";

const { Option } = Select;

const FormJadwalKuliah = () => {
  const [formBio] = Form.useForm();
  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);
  const dosenOptions = useFetchDosenOptions();
  const roomOptions = useFetchRoomOptions();
  const matkulOptions = useFetchMatkulOptions();

  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };

  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  const handleSuccessClick = () => {
    Swal.fire({
      title: "Berhasil Menyimpan Data",
      icon: "success",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  const handleErrorClick = () => {
    Swal.fire({
      title: "WARNING",
      text: "Apakah anda yakin untuk menghapus data ini?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Delete ",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const handleEdit = (row_data) => {
    setRowData(row_data);
    setIsEdit(true);
    formBio.setFieldsValue();
  };

  const handleCancel = () => {
    setRowData();
    setOpen(false);
    setIsEdit(false);
    formBio.resetFields();
  };

  const onAdd = (values) => {
    const body = {
      ...values,
    };
    // Tambahkan kode untuk mengirim data ke API di sini
    api
      .createJadwal(body)
      .then((response) => {
        console.log(response);
        handleSuccessClick();
      })
      .catch((error) => {
        console.log(error);
        handleErrorClick();
      });
  };

  const onDelete = (row_id) => {
    // Tambahkan kode untuk menghapus data dari API di sini
    api
      .deleteJadwal(row_id)
      .then((response) => {
        console.log(response);
        handleSuccessClick();
      })
      .catch((error) => {
        console.log(error);
        handleErrorClick();
      });
  };

  const onEdit = (values) => {
    const id = rowData.id;
    const body = {
      ...values,
    };
    // Tambahkan kode untuk memperbarui data ke API di sini
    api
      .updateJadwal(id, body)
      .then((response) => {
        console.log(response);
        handleCancel();
      })
      .catch((error) => {
        console.log(error);
        handleErrorClick();
      });
  };

  const onFinish = (values) => {
    notification.success({
      message: "Sukses",
      description: "Data booking berhasil disimpan.",
    });
  };

  return (
    <div className="Layout-jadwal-kuliah">
      <p>Manage Jadwal</p>
      <Form className="display-form-jadwal-kuliah" name="form-bio" form={formBio} layout="vertical" onFinish={isEdit ? onEdit : onAdd} colon={false} style={{}}>
        <div className="layout-form-jadwal-kuliah">
          <h1 className="title-form-jadwal-kuliah"> Lihat Jadwal Kuliah </h1>
          <Row>
            <Col className="col-layout-form-jadwal-kuliah" span={12}>
              <Form.Item name="matakuliah_id" label="Mata Kuliah" className="white-label">
                <Select className="input-box" showSearch placeholder="" optionFilterProp="children" filterOption={(input, option) => option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  {matkulOptions.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
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
                <Input className="input-box" placeholder="Masukkan Jumlah SKS " />
              </Form.Item>

              <Form.Item name="room_id" label="Kelas" className="white-label">
                <Select className="input-box" showSearch placeholder="" optionFilterProp="children" filterOption={(input, option) => option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  {roomOptions.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>

            <Col className="col-layout-form-jadwal-kuliah" span={12}>
              <Form.Item name="dosen_id" label="Pengajar" className="white-label">
                <Select className="input-box" showSearch placeholder="" optionFilterProp="children" filterOption={(input, option) => option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0}>
                  {dosenOptions.map((option) => (
                    <Select.Option key={option.value} value={option.value}>
                      {option.label}
                    </Select.Option>
                  ))}
                </Select>
              </Form.Item>

              <Form.Item name="jam" label="Jadwal Kelas" className="white-label">
                <Space direction="vertical" size={12}>
                  <DatePicker className="input-box" showTime onChange={onChange} onOk={onOk} />
                </Space>
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button className="submit-form-jadwal-kuliah" style={{ float: "right" }} htmlType="submit" onClick={handleSuccessClick}>
              Simpan
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default FormJadwalKuliah;
