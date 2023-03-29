import React from "react";
import search from "./assets/search.png";
import "./Filters.css";
import location from './assets/Group 35.png'
import filter1 from './assets/filter.png'
import filter2 from './assets/filter2.png'
import filter3 from './assets/filter3.png'
import close from './assets/close.png'

const AppliedFilter = ({ title }) => (
  <div className="appliedFilter">
    <img src={close} alt="closebtn" />
    <span>{title}</span>
  </div>
)

const Filters = () => {

  const selectedFilters = [
    {filter: 'UX Design'},
    {filter: 'Full Time'},
    {filter: 'On-Site'},
    {filter: 'Delhi NCR'},
    {filter: 'Bangalore'},
  ]


  return (
    <div className="filters">
      <h1>Search for Jobs</h1>

      <div className="filterContainers">
        <div className="search-bar-holder">
          <input
            type="text"
            placeholder="Search by Job title, company, keywords"
            className="search-bar"
          />
          <img src={search} alt="search-icon" />
        </div>

        <div className="location-holder">
          <input
            type="text"
            placeholder="Anywhere"
            className="location-bar"
          />
          <img src={location} alt="location-icon" />
        </div>

        <div className="filter-holder">
          <input
            type="text"
            placeholder="Filters"
            className="filter-bar"
          />
          <img src={filter1} alt="filter-icon" />
          <img style={{top: '47%', left: '4%'}} src={filter2} alt="filter-icon" />
          <img style={{top: '60%', left: '5.5%'}} src={filter3} alt="filter-icon" />
        </div>
      </div>

      <div className="appliedFilters">
          {selectedFilters.map((item, index) => (
            <AppliedFilter key={index} title={item.filter} />
          ))}
        </div>
    </div>
  );
};

export default Filters;
