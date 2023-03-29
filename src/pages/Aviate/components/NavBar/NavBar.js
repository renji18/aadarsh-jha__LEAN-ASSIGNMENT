import React from 'react'
import './NavBar.css'
import hamburger from "./assets/hamburger'.png"
import dashboard from './assets/dashboard.png'
import myjobs from './assets/myjobs.png'
import messages from './assets/messages.png'
import upcoming from './assets/eventupcoming.png'
import logout from './assets/logout.png'

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="hamburger">
        <img src={hamburger} alt="hamburger" />
      </div>

      <div className="navs">
        <div className="dashborad">
          <img src={dashboard} alt="dashboard" />
        </div>
        <div className="myJobs">
          <img src={myjobs} alt="myJobs" />
        </div>
        <div className="messages">
          <img src={messages} alt="messages" />
        </div>
        <div className="upcomingEvents">
          <img src={upcoming} alt="upcoming" />
        </div>
      </div>

      <div className="logoutSection">
        <div className="help">
          <button>HELP</button>
        </div>
        <div className="logOut">
          <img src={logout} alt="logout" />
          <p>Log Out</p>
        </div>
      </div>
    </div>
  )
}

export default NavBar