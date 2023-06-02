import { Link } from "react-scroll";
import { Menu } from "antd";
import "./header.css";

// eslint-disable-next-line react/prop-types
const LeftMenu = ({ mode }) => {
  return (
    <Menu className="textmenu" mode={mode}>
      <Menu.Item key="home">
        <Link to="home" spy={true} smooth={true} offset={-70} duration={700}>
          Home
        </Link>
      </Menu.Item>
      <Menu.Item key="features">
        <Link to="features" spy={true} smooth={true} offset={-70} duration={700}>
          Features
        </Link>
      </Menu.Item>
      <Menu.Item key="help">
        <Link to="help" spy={true} smooth={true} offset={-70} duration={700}>
          Help
        </Link>
      </Menu.Item>
      <Menu.Item key="aboutus">
        <Link to="aboutus" spy={true} smooth={true} offset={-70} duration={700}>
          About Us
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default LeftMenu;
