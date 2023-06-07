import React, { useEffect, useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { Button, Form, Input, DatePicker, Popconfirm, Space, message, Select, Checkbox, Radio, Alert, Modal, notification, Col, Row } from "antd";
import "./formJadwalKuliah.css";

const FormJadwalKuliah = () => {
  const [formBio] = Form.useForm();
  const [rowData, setRowData] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [open, setOpen] = useState(false);

  const { RangePicker } = DatePicker;
  const onChange = (value, dateString) => {
    console.log("Selected Time: ", value);
    console.log("Formatted Selected Time: ", dateString);
  };
  const onOk = (value) => {
    console.log("onOk: ", value);
  };

  const TABLE_COLUMNS = [
    {
      title: "Full Name",
      dataIndex: "fullName",
      key: "fullName",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Booking Time",
      dataIndex: "bookingTime",
      key: "bookingTime",
    },
    {
      title: "Date Booking",
      dataIndex: "dateBooking",
      key: "dateBooking",
    },
    {
      title: "Notes",
      dataIndex: "notes",
      key: "notes",
    },
    {
      title: "Service",
      dataIndex: "service",
      key: "service",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Action",
      dataIndex: "action",
      render: (_, record) =>
        TABLE_BOOKING.length >= 1 ? (
          <Space>
            <a className="edit-button" onClick={() => handleEdit(record)}>
              Edit
            </a>
            <Popconfirm title="Sure to delete?" arrow={false} onConfirm={() => onDelete(record.id)}>
              <a className="delete-button">Delete</a>
            </Popconfirm>
          </Space>
        ) : null,
    },
  ];

  //   to handle edit button
  const handleEdit = (row_data) => {
    setRowData(row_data);
    setIsEdit(true);
    formBio.setFieldsValue();
  };

  //   to handle cancel button
  const handleCancel = () => {
    setRowData();
    setIsEdit(false);
    formBio.resetFields();
  };

  //   Add Data to table
  const onAdd = (values) => {
    const body = {
      ...values,
    };
    addBooking({
      variables: {
        object: {
          ...body,
        },
      },
      onError: (err) => {
        message.open({
          type: "Terjadi Kesalahan saat memasukan data",
          content: `${err?.message}`,
        });
      },
      onCompleted: () => {
        // Tampilkan notifikasi setelah berhasil submit
        notification.success({
          message: "Sukses",
          description: "Data booking berhasil disimpan.",
        });
        handleCancel();
      },
    });
  };

  //   Delete Data from table
  const onDelete = (row_id) => {
    deleteBooking({
      variables: { id: row_id },
      onError: (err) => {
        message.open({
          type: "Terjadi Kesalahan saat menghapus data",
          content: `${err?.message}`,
        });
      },
    });
  };

  //   Edit Data from table
  const onEdit = (values) => {
    const id = rowData.id;
    const body = {
      ...values,
    };

    updateBooking({
      variables: { pk_columns: { id: id }, _set: { ...body } },
      onCompleted: () => {
        handleCancel();
      },
      onError: (err) => {
        message.open({
          type: "error",
          content: `${err?.message}`,
        });
      },
    });
  };

  const onFinish = (values) => {
    // Lakukan proses submit form di sini
    // ...
    // Tampilkan notifikasi setelah berhasil submit
    notification.success({
      message: "Sukses",
      description: "Data booking berhasil disimpan.",
    });
  };

  return (
    <div className="Layout-jadwal-kuliah">
      <p>Manage Jadwal</p>
      {/* Form */}
      <Form className="display-form-jadwal-kuliah" name="form-bio" form={formBio} layout="vertical" onFinish={isEdit ? onEdit : onAdd} colon={false} style={{}}>
        <div className="layout-form-jadwal-kuliah">
          <h1 className="title-form-jadwal-kuliah"> Lihat Jadwal Kuliah </h1>
          <Row>
            <Col className="col-layout-form-jadwal-kuliah" span={12}>
              <Form.Item
                name="mataKuliah"
                label="Mata Kuliah"
                rules={[
                  {
                    message: "Please input nama Mata Kuliah!",
                  },
                ]}
                className="white-label"
              >
                <Input style={{ padding: "5px 12px", width: "444px" }} placeholder="Input Nama Mata Kuliah" />
              </Form.Item>

              {/* Jumlah sks */}
              <Form.Item
                name="jumlahSks"
                label="Jumlah SKS"
                rules={[
                  {
                    message: "Please input Jumalah SKS Mata Kuliah!",
                  },
                ]}
                className="white-label"
              >
                <Input style={{ padding: "5px 12px", width: "444px" }} placeholder="Input Jumlah SKS " />
              </Form.Item>

              {/* Kelas */}
              <Form.Item
                name="Kelas"
                label="Kelas"
                rules={[
                  {
                    message: "Please input Kelas",
                  },
                ]}
                className="white-label"
              >
                <Input style={{ padding: "5px 12px", width: "444px" }} placeholder="Input Kelas" />
              </Form.Item>
            </Col>

            <Col span={12}>
              {/* Pengajar */}
              <Form.Item
                name="Pengajar"
                label="Pengajar"
                rules={[
                  {
                    message: "Please input Pengajar!",
                  },
                ]}
                className="white-label"
              >
                <Input style={{ padding: "5px 12px", width: "444px" }} placeholder="Input Pengajar" />
              </Form.Item>

              {/* Jadwal kelas*/}
              <Form.Item
                name="jadwalKelas"
                label="Jadwal Kelas"
                rules={[
                  {
                    message: "Input Jadwal Kelas!",
                  },
                ]}
                className="white-label"
              >
                <Space direction="vertical" size={12}>
                  <DatePicker showTime onChange={onChange} onOk={onOk} style={{ padding: "5px 12px", width: "444px" }} />
                </Space>
              </Form.Item>
            </Col>
          </Row>

          {/* button edit and delete */}
          {isEdit ? (
            <Space>
              <Button type="primary" htmlType="submit" loading={loadingUpdateBooking}>
                Save
              </Button>
              <Button type="primary" onClick={handleCancel} danger>
                Cancel
              </Button>
            </Space>
          ) : (
            <Form.Item>
              <Button className="submit-form-jadwal-kuliah" style={{ float: "right" }} htmlType="submit">
                Simpan
              </Button>
            </Form.Item>
          )}
        </div>
      </Form>
      <div>
        <Button className="submit-form-jadwal-kuliah" style={{ float: "left", margin: "50px 0px" }} htmlType="submit">
          Back
        </Button>
        <Button className="submit-form-jadwal-kuliah" style={{ float: "right", margin: "50px 0px" }} htmlType="submit">
          Delete
        </Button>
        <Button className="submit-form-jadwal-kuliah" style={{ float: "right", margin: "50px 50px" }} htmlType="submit">
          Update
        </Button>
      </div>
    </div>
  );
};

export default FormJadwalKuliah;
