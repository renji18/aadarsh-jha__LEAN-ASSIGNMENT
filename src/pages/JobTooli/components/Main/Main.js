import React from "react";
import "./Main.css";
import deselect from "./assets/Rectangle 27.png";
import updown from "./assets/Swap.png";
import download from "./assets/Download_light.png";
import deselectBg from "./assets/Ellipse 50.svg";
import man from './assets/m 5.png'
import woman from './assets/w 3.png'
import goodStatus from './assets/Lol_light.png'
import badStatus from './assets/Angry_light.png'
import bookmarked from './assets/Rectangle 1.png'
import notBookmarked from './assets/Rectangle 2.png'
import threeDot from './assets/Vector.png'
import clock from './assets/Time.png'

const JobListItem = ({ selected, img, bookmark, name, position, timing, step, status, statusImg}) => (
  <div className="jobItem2">
    <div className="circleSelected"></div>
    <img className="face2" src={img} alt="" />
    <div className="info2">
      <div className="name2">
        <img className="bookmark2" src={bookmark} alt="" />
        <p>{name}</p>
        <img className="clock2" src={clock} alt="clock" />
        <p className="timing2">{timing}</p>
      </div>
      <p className="name2position2">{position}</p>
    </div>
    <div className="step2">
      <p>{step}</p>
      <div className="stepDot2">......</div>
    </div>
    <div className="status2">
      <img src={statusImg} alt="" />
      <p>{status}</p>
    </div>
    <img className="threeDot" src={threeDot} alt="..." />
  </div>
);

const Main = () => {
  const jobItems = [
    {
      selected: false,
      img: man,
      bookmark: bookmarked,
      name: "Chikelu Obasea",
      position: "Full Stack Ruby on Rails Developer",
      timing: "16 sep 2018",
      step: "New",
      statusImg: goodStatus,
      status: "85%",
    },
    {
      selected: true,
      img: woman,
      bookmark: notBookmarked,
      name: "Grigory Kozhukhoz",
      position: "Miracle Marketer on Steroids",
      timing: "20 feb 2019",
      step: "Personality Accessment",
      statusImg: badStatus,
      status: "5%",
    },
    {
      selected: false,
      img: man,
      bookmark: bookmarked,
      name: "Chikelu Obasea",
      position: "Full Stack Ruby on Rails Developer",
      timing: "16 sep 2018",
      step: "New",
      statusImg: goodStatus,
      status: "85%",
    },
    {
      selected: true,
      img: woman,
      bookmark: notBookmarked,
      name: "Grigory Kozhukhoz",
      position: "Miracle Marketer on Steroids",
      timing: "20 feb 2019",
      step: "Personality Accessment",
      statusImg: badStatus,
      status: "5%",
    },
    {
      selected: false,
      img: man,
      bookmark: bookmarked,
      name: "Chikelu Obasea",
      position: "Full Stack Ruby on Rails Developer",
      timing: "16 sep 2018",
      step: "New",
      statusImg: goodStatus,
      status: "85%",
    },
    {
      selected: true,
      img: woman,
      bookmark: notBookmarked,
      name: "Grigory Kozhukhoz",
      position: "Miracle Marketer on Steroids",
      timing: "20 feb 2019",
      step: "Personality Accessment",
      statusImg: badStatus,
      status: "5%",
    },
    {
      selected: false,
      img: man,
      bookmark: bookmarked,
      name: "Chikelu Obasea",
      position: "Full Stack Ruby on Rails Developer",
      timing: "16 sep 2018",
      step: "New",
      statusImg: goodStatus,
      status: "85%",
    },
    {
      selected: true,
      img: woman,
      bookmark: notBookmarked,
      name: "Grigory Kozhukhoz",
      position: "Miracle Marketer on Steroids",
      timing: "20 feb 2019",
      step: "Personality Accessment",
      statusImg: badStatus,
      status: "5%",
    },
    {
      selected: false,
      img: man,
      bookmark: bookmarked,
      name: "Chikelu Obasea",
      position: "Full Stack Ruby on Rails Developer",
      timing: "16 sep 2018",
      step: "New",
      statusImg: goodStatus,
      status: "85%",
    },
    {
      selected: true,
      img: woman,
      bookmark: notBookmarked,
      name: "Grigory Kozhukhoz",
      position: "Miracle Marketer on Steroids",
      timing: "20 feb 2019",
      step: "Personality Accessment",
      statusImg: badStatus,
      status: "5%",
    },
    {
      selected: false,
      img: man,
      bookmark: bookmarked,
      name: "Chikelu Obasea",
      position: "Full Stack Ruby on Rails Developer",
      timing: "16 sep 2018",
      step: "New",
      statusImg: goodStatus,
      status: "85%",
    },
    {
      selected: true,
      img: woman,
      bookmark: notBookmarked,
      name: "Grigory Kozhukhoz",
      position: "Miracle Marketer on Steroids",
      timing: "20 feb 2019",
      step: "Personality Accessment",
      statusImg: badStatus,
      status: "5%",
    },
    {
      selected: false,
      img: man,
      bookmark: bookmarked,
      name: "Chikelu Obasea",
      position: "Full Stack Ruby on Rails Developer",
      timing: "16 sep 2018",
      step: "New",
      statusImg: goodStatus,
      status: "85%",
    },
    {
      selected: true,
      img: woman,
      bookmark: notBookmarked,
      name: "Grigory Kozhukhoz",
      position: "Miracle Marketer on Steroids",
      timing: "20 feb 2019",
      step: "Personality Accessment",
      statusImg: badStatus,
      status: "5%",
    },
  ];

  return (
    <div className="mainWrapper2">
      <div className="head2">
        <div className="deselctBox2">
          <img src={deselectBg} alt="" />
          <img className="deselect2" src={deselect} alt="" />
        </div>
        <p style={{ color: "#61DC00" }}>deselect 3 rows</p>
        <div className="dropDown2">
          <img src={updown} alt="" />
          <select name="" id="">
            <option value="">Sort by: newest first</option>
            <option value="">Sort by: oldest first</option>
          </select>
        </div>
        <div style={{ display: "flex", gap: "15px" }} className="endSection2">
          <img style={{ height: "40px" }} src={download} alt="" />
          <p>Bulk Actions</p>
        </div>
      </div>
      {jobItems.map((item, index) => (
        <JobListItem selected={item.selected} img={item.img} bookmark={item.bookmark} name={item.name} key={index} position={item.position} timing ={item.timing} step={item.step} status={item.status} statusImg={item.statusImg} />
      ))}
    </div>
  );
};

export default Main;
