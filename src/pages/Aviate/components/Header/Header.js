import React from "react";
import "./Header.css";
import logo from "./assets/aviate logo.png";
import notif from "./assets/messages-icon.png";
import award from "./assets/award.png";
import bell from "./assets/Vector.png";
import user from "./assets/user.png";
import search from "./assets/search.png";
import dot from "./assets/award-dot.png";

const Header = () => {
  return (
    <div className="header">
      <img className="logo_img" src={logo} alt="aviate_logo" />

      <div className="search_bar_holder">
        <input
          type="text"
          placeholder="Type for Search"
          className="search_bar"
        />
        <img src={search} alt="search_icon" />
      </div>

      <div className="icon_holders">
        <div className="notif">
          <img src={notif} alt="notif" />
          <img className="dot_icon" src={dot} alt="notifDot" />
        </div>
        <div className="bell">
          <img src={bell} alt="bell" />
          <img className="dot_icon" src={dot} alt="bellDot" />
        </div>
        <div className="award">
          <img style={{ width: "16.5px" }} src={award} alt="award" />
          <img style={{ transform: "translate(5px,  -8px)"}} className="dot_icon" src={dot} alt="awardDot" />
        </div>
      </div>

      <div className="user_data">
        <img src={user} alt="user" />
        <div>
          <p>Akash Mishra</p>
          <button>EDIT MY PROFILE</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
