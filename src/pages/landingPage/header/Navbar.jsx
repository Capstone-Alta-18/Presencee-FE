import { Layout, Button, Drawer } from "antd";
import LeftMenu from "./leftMenu";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMAGES } from "../../../assets/constant";
import "./header.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  let { pathname: location } = useLocation();
  useEffect(() => {
    setVisible(false);
  }, [location]);

  return (
    <nav className="navbar">
      <Layout>
        <Layout.Header className="nav-header">
          <div className="logo">
            <img className="logo" src={IMAGES.logo1} alt="" />
          </div>
          <div className="navbar-menu">
            <div>
              <LeftMenu mode={"horizontal"} />
            </div>
            <Button className="menuButton" type="text" onClick={showDrawer}></Button>
            <Drawer title={"Brand Here"} placement="right" closable={true} onClose={showDrawer} visible={visible} style={{ zIndex: 99999 }}>
              <LeftMenu mode={"inline"} />
            </Drawer>
          </div>
        </Layout.Header>
      </Layout>
    </nav>
  );
};

export default Navbar;
