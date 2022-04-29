import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { Menu, Icon, Button } from "antd";
import { connect } from "react-redux";

function Nav(props) {
  return (
    <nav>
      <Menu style={{ textAlign: "center" }} mode="horizontal" theme="dark">
        <Menu.Item key="mail">
          <Link to="/screensource">
            <Icon type="home" />
            Sources
          </Link>
        </Menu.Item>

        <Menu.Item key="test">
          <Link to="/screenmyarticles">
            <Icon type="read" />
            My Articles
          </Link>
        </Menu.Item>

        <Menu.Item padding={0} key="app">
          <Link to="/">
            <Icon type="logout" />
            Logout
          </Link>
        </Menu.Item>

        <Menu.Item padding={0} key="fr">
          <Link to="/screensource" onClick={() => props.changeLangue("fr")}>
            <Icon type="french" />
            <img
              padding={0}
              margin={10}
              width={50}
              src={"../images/fr.png"}
            ></img>
          </Link>
        </Menu.Item>
        <Menu.Item key="thai">
          <Link
            to="/screensource"
            onClick={() => {
              props.changeLangue("it");
              // changeDefault();
            }}
          >
            <Icon type="thai" />
            <img
              padding={0}
              margin={10}
              width={50}
              src={"../images/thai.png"}
            ></img>
          </Link>
        </Menu.Item>
      </Menu>
    </nav>
  );
}
function mapDispatchToProps(dispatch) {
  return {
    changeLangue: function (country) {
      dispatch({ type: "changeLangue", pays: country });
    },
  };
}
export default connect(null, mapDispatchToProps)(Nav);
