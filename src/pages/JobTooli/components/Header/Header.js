import React from "react";
import search from "./assets/search.png";
import "./Header.css";
import bell1 from "./assets/halfBell.png";
import bell2 from "./assets/belll2.png";
import bell0 from "./assets/bell0.png";
import user from "./assets/user.png";
import triangle from "./assets/triangle.png";
import logout from "./assets/logout.png";
import divider from './assets/divider.png'

const Header = () => {
  return (
    <div className="headerWrapper2">
      <div className="searchBar2">
        <img src={search} alt="" />
        <input
          className="inputSearch2"
          type="text"
          placeholder="Search jobs and applications ..."
        />
      </div>
      <div className="rightSide">
        <div className="imageContainer">
          <img className="bell0" src={bell0} alt="" />
          <img className="bell1" src={bell1} alt="" />
          <img className="bell2" src={bell2} alt="" />
        </div>
        <img src={user} alt="" />
        <div style={{lineHeight: '5px', margin: '0 10px'}}>
          <p style={{color: '#656565'}}>Riley Cooper</p>
          <p style={{color: '#AAAAAA'}}>Acme International</p>
        </div>
        <img src={triangle} alt="" />
        <img style={{margin: '0 20px'}} src={divider} alt="" />
        <img src={logout} alt="" />
        <p>jobsite</p>
      </div>
    </div>
  );
};

export default Header;
