import React from "react";
import "./SideTopics.css";
import session from "./assets/session.png";
import dots from "./assets/3 dots.png";
import pesto from "./assets/pesto.png";
import vernacular from "./assets/vernacular.png";
import technovus from "./assets/technovus.png";

const SessionItem = ({ title, date, timing, id, length }) => (
  <div
    style={{
      borderBottom: `${id === length ? "0" : "0.5"}`,
      marginBottom: `${id === length ? "0" : "15px"}`,
      paddingBottom: `${id === length ? "0" : "15px"}`,
    }}
    className="itemCard"
  >
    <div>
      <p className="cardTitle">{title}</p>
      <p className="cardDate">{date}</p>
      <p className="cardTiming">{timing}</p>
    </div>
    <button className="cardBtn">Enroll Now</button>
  </div>
);

const EventItem = ({ img, name, title, date, timing }) => (
  <div className="eventItemHolder">
    <div className="imgHolder">
      <img src={`${img}`} alt="img" />
      <span>{name}</span>
    </div>
    <div className="eventHolder">
      <p className="eventTitle">{title}</p>
      <p className="eventDate">{date}</p>
      <p className="eventTiming">{timing}</p>
    </div>
  </div>
);

const SideTopics = () => {
  const demoSessionItems = [
    {
      id: 1,
      title: "Mock Interview",
      date: "24th August, 2022",
      timing: "(9:00 AM - 11:00 AM)",
    },
    {
      id: 2,
      title: "Portfolio Presentation",
      date: "10th Sept, 2022",
      timing: "(12:00 AM - 2:00 PM)",
    },
    {
      id: 3,
      title: "Technical Round",
      date: "10th Sept, 2022",
      timing: "(12:00 AM - 2:00 PM)",
    },
  ];

  const demoEventItems = [
    {
      img: pesto,
      name: "Pesto",
      title: "Portfolio Presentation",
      date: "Tomorrow",
      timing: "(9:00 AM - 11:00 AM)",
    },
    {
      img: vernacular,
      name: "Vernacular.Ai",
      title: "Group Discussion",
      date: "25th August, 2022",
      timing: "(9:00 AM - 10:00 AM)",
    },
    {
      img: technovus,
      name: "Groww",
      title: "Mock Interview 1",
      date: "Tomorrow",
      timing: "(2:00 PM - 4:00 PM)",
    },
  ];

  return (
    <div className="sideTopics">
      <div className="suggestedSessions">
        <img className="sessionIcon" src={session} alt="sessionIcon" />
        <img className="dots" src={dots} alt="dots" />
        <div className="titleSection">
          <p className="title">Suggested Sessions</p>
          <p className="seeAll">See all</p>
        </div>
        {demoSessionItems.map((item) => (
          <SessionItem
            key={item.id}
            title={item.title}
            date={item.date}
            length={demoSessionItems.length}
            id={item.id}
            timing={item.timing}
          />
        ))}
      </div>
      <div className="events">
        <img className="dots" src={dots} alt="dots" />
        <div className="eventsTitleSection">
          <p className="eventsTitle">Upcoming Events</p>
        </div>
        <div className="dateSection">
          <select
            className="date-picker"
            name="DateSelector"
            id="date-selector"
          >
            <option value="">August, 2022</option>
            <option value="">September, 2022</option>
            <option value="">October, 2022</option>
          </select>
        </div>
        {demoEventItems.map((item) => (
          <EventItem
            key={item.name}
            img={item.img}
            name={item.name}
            title={item.title}
            date={item.date}
            timing={item.timing}
          />
        ))}
      </div>
    </div>
  );
};

export default SideTopics;
