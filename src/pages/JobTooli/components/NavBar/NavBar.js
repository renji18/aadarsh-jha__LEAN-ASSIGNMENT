import React from "react";
import "./NavBar.css";
import logo1 from "./assets/logoBigBlack.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import archive from "./assets/archive.png";
import user from "./assets/userLogo.png";
import ham from "./assets/ham.png";
import hamConnector from "./assets/hamburgerConnector.png";
import chart from "./assets/canvas graph.png";
import brush from "./assets/paint.png";
import setting from "./assets/setting.png";

const NavBar = () => {
  return (
    <div className="sideBar">
      <div className="logo2">
        <img src={logo1} alt="logo" />
        <img style={{ top: "33px", left: "5px" }} src={logo2} alt="logo" />
        <img style={{ top: "63px", left: "35px" }} src={logo3} alt="logo" />
      </div>
      <div className="navBarOptions2">
        <div className="iconHolders2">
          <img src={archive} alt="" />
          <img src={user} alt="" />
          <div style={{display: 'flex', flexDirection: 'row'}}>
            <img style={{ width: "5px" }} src={hamConnector} alt="" />
            <div style={{display: 'flex', flexDirection: 'column', gap: '14px'}}>
              <img style={{ height: "4px" }} src={ham} alt="" />
              <img style={{ height: "4px" }} src={ham} alt="" />
              <img style={{ height: "4px" }} src={ham} alt="" />
            </div>
          </div>
          <img src={chart} alt="" />
          <img src={brush} alt="" />
          <img src={setting} alt="" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
