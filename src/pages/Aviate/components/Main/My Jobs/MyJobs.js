import React from "react";
import "./MyJobs.css";
import techmint from "./assets/Techmint.png";
import unacad from "./assets/unacademy.png";
import techno from "./assets/technovus.png";
import udemy from "./assets/udemy.png";
import ursa from "./assets/ursa.png";
import servio from "./assets/servio.png";
import reject from "./assets/rejectReason.png";

const AppicationBar = ({
  img,
  name,
  desc,
  location,
  costRange,
  status,
  chance,
}) => (
  <div className="singleApplication">
    <div className="descSection">
      <img src={img} alt="img" />
      <div>
        <p className="descSectionName">{name}</p>
        <p className="descSectionDesc">{desc}</p>
        <p className="descSectionLocation">{location}</p>
      </div>
    </div>

    <div className="costSection">
      <p className="price">
        ₹{costRange[0]} - ₹{costRange[1]}
      </p>
      <p className="staticPerMonth">Per Month</p>
    </div>

    <div className="statusSection">
      <p
        style={{
          backgroundColor: `${
            status === "Rejected"
              ? "#FFAAAA"
              : status === "Selected"
              ? "#C4FFD1"
              : "#FFF3B2"
          }`,
          color: `${
            status === "Rejected"
              ? "#AF0808"
              : status === "Selected"
              ? "#00A324"
              : "#AE9407"
          }`,
        }}
        className="statusSectionStatus"
      >
        {status}
      </p>
      <p className="statusSectionChance">{chance}</p>
    </div>

    <div className="rejectedSection">
      <img
        className={status === "Rejected" ? "" : "rejectHidden"}
        src={reject}
        alt="reason"
      />
    </div>
  </div>
);

const MyJobs = () => {
  const applicationContent = [
    {
      img: techmint,
      name: "Product Designer",
      desc: "Techmint, On-Site",
      location: "Bengaluru, India",
      costRange: ["50K", "70K"],
      status: "Rejected",
      chance: "",
    },
    {
      img: unacad,
      name: "Product Designer",
      desc: "Unacademy, Work From Home",
      location: "Bengaluru, India",
      costRange: ["60K", "80K"],
      status: "In Process",
      chance: "70% Chances",
    },
    {
      img: techno,
      name: "UX Designer",
      desc: "TechNovus, On-Site",
      location: "Bengaluru, India",
      costRange: ["60K", "75K"],
      status: "Selected",
      chance: "",
    },
    {
      img: udemy,
      name: "Product Designer",
      desc: "Udemy, On-Site",
      location: "Delhi, India",
      costRange: ["80K", "95K"],
      status: "In Process",
      chance: "80% Chances",
    },
    {
      img: ursa,
      name: "Product Designer",
      desc: "URSA, On-Site",
      location: "Bengaluru, India",
      costRange: ["50K", "70K"],
      status: "Selected",
      chance: "",
    },
    {
      img: techmint,
      name: "UX Designer",
      desc: "Techmint, On-Site",
      location: "Bengaluru, India",
      costRange: ["50K", "70K"],
      status: "Rejected",
      chance: "",
    },
    {
      img: servio,
      name: "Product Designer",
      desc: "Techmint, On-Site",
      location: "Bengaluru, India",
      costRange: ["50K", "70K"],
      status: "Selected",
      chance: "",
    },
    {
      img: ursa,
      name: "Product Designer",
      desc: "Techmint, On-Site",
      location: "Bengaluru, India",
      costRange: ["50K", "70K"],
      status: "In Process",
      chance: "40% Chances",
    },
  ];

  return (
    <div className="myJobsWrapper">
      <div className="headingContainer">
        <h1>My Jobs</h1>
        <div className="searchStatus">
          <p>Job Search Status</p>
          <div className="selectToggle">
            <div className="statusDot"></div>
            <select className="statusSelect" name="status" id="status">
              <option value="">Acively Interviewing</option>
              <option value="">Not Applying</option>
            </select>
          </div>
        </div>
      </div>

      <div className="applicationCenter">
        <p>Applications</p>
        {applicationContent.map((item, index) => (
          <AppicationBar
            key={index}
            img={item.img}
            name={item.name}
            desc={item.desc}
            location={item.location}
            costRange={item.costRange}
            status={item.status}
            chance={item.chance}
          />
        ))}
      </div>
    </div>
  );
};

export default MyJobs;
