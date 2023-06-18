import React, { useState } from "react";
import { IMAGES } from "./../../../assets/constant";
import LeftMenu from "./leftMenu";
import "./header.css";
import { Button, Dropdown, Drawer } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => {
    setDrawerVisible(true);
  };

  const onClose = () => {
    setDrawerVisible(false);
  };

  const handleMenuItemClick = () => {
    setDrawerVisible(false);
  };

  const items = [
    {
      label: <Link to="/login-admin">Portal Admin</Link>,
      key: "1",
    },
    {
      label: <Link to="/login-dosen">Portal Dosen</Link>,
      key: "3",
    },
  ];

  return (
    <nav className="navbar">
      <img className="logo-navbar" src={IMAGES.logo1} alt="logo presence" width={240} />
      <div className="menu-bar">
        <LeftMenu mode="horizontal" onItemClick={handleMenuItemClick} />
        <Dropdown menu={{ items }} placement="bottom" className="btn-protal" trigger={["click"]}>
          <Button type="primary" className="btn-portal">
            Portal
          </Button>
        </Dropdown>
        <Button className="menu-drawer" type="text" onClick={showDrawer}>
          <MenuOutlined />
        </Button>
        <Drawer className="drawer" placement="top" closable={false} onClose={onClose} visible={drawerVisible}>
          <Button style={{ color: "#fff", fontSize: "24px", marginBottom: "49px" }} type="text" onClick={handleMenuItemClick}>
            <MenuOutlined />
          </Button>
          <LeftMenu mode="vertical" onItemClick={handleMenuItemClick} />
        </Drawer>
      </div>
    </nav>
  );
};

export default Navbar;
