import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import aviate from "../assets/aviate.png";
import jobtooli from "../assets/jobTooli.png";

const HomeItem = ({ title, img, handleClick }) => (
  <div className="homeItem" onClick={handleClick}>
    <img src={img} alt="img" />
    <p>{title}</p>
  </div>
);

const Home = () => {
  const navigate = useNavigate();

  const routeItem = [
    { title: "Aviate", img: aviate, route: "/aviate" },
    { title: "Job Tooli", img: jobtooli, route: "/job-tooli" },
  ];

  return (
    <div className="main">
      <h1>Select a Project</h1>
      <div className="homeController">
        {routeItem.map((item, index) => (
          <HomeItem
            key={index}
            title={item.title}
            img={item.img}
            route={item.route}
            handleClick={() => navigate(item.route)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
