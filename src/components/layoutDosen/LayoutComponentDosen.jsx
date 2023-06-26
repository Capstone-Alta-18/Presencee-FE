import React, { useState } from "react";
import { Layout, Menu, Button, Drawer } from "antd";
import { MENU_ITEM_DOSEN } from "./constant";
import { IMAGES } from "./../../assets/constant";
import { DotsThreeOutlineVertical, List } from "@phosphor-icons/react";
import "./layoutComponent.css";
import { Link, useLocation } from "react-router-dom";

const { Header, Sider, Content } = Layout;

const LayoutComponentDosen = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState([location.pathname]);

  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState("left");

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const handleMenuClick = ({ key }) => {
    setSelectedKeys([key]);
    onClose();
  };

  return (
    <div>
      <Layout>
        {/* sidebar */}
        <Sider className="side-bar" trigger={null} collapsible collapsed={collapsed}>
          <Button className="btn-menu" theme="light" type="text" icon={<List size={20} />} onClick={showDrawer} />
          <Menu className="menu-bar-admin" mode="inline" defaultSelectedKeys={1} selectedKeys={selectedKeys} items={MENU_ITEM_DOSEN} onClick={handleMenuClick}>
            {MENU_ITEM_DOSEN.map((item) => (
              <Menu.Item key={item.key} icon={item.icon} disabled={item.disabled}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>

        <Drawer className="drawer-bar ant-drawer-content-wrapper" placement={placement} closable={false} onClose={onClose} open={open} key={placement}>
          <Button className="dots-icon" onClick={onClose}>
            <DotsThreeOutlineVertical />
          </Button>
          <Menu className="menu-bar-drawer" mode="inline" selectedKeys={selectedKeys} items={MENU_ITEM_DOSEN} onClick={handleMenuClick} />
        </Drawer>

        <Layout>
          {/* header */}
          <Header className="header-layout">
            <div className="nav-brand">
              <img src={IMAGES.logo1} alt="logo presencess" width={166} />
            </div>
            <div className="nav-users">
              <img src={IMAGES.profilImage} alt="" width={50} />
              <p> Dosen</p>
              <Link to="/login-dosen">
                <Button
                  type="primary"
                  onClick={() => {
                    localStorage.removeItem("token");
                    localStorage.removeItem("dosen_id");
                  }}
                  danger
                >
                  Logout
                </Button>
              </Link>
            </div>
          </Header>

          {/* content */}
          <Content style={{ paddingLeft: "130px", paddingTop: "50px", paddingRight: "50px" }}>{children}</Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default LayoutComponentDosen;
