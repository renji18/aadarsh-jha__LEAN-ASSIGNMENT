import React from 'react'
import './Filters.css'
import toggleOn from './assets/Rectangle 10.png'
import toggleOn2 from './assets/Ellipse 47.png'
import toggleOff from './assets/Rectangle 9.png'
import add from './assets/Subtract.png'

const Filters = () => {

  const filters = [
    {name: 'JOBS'},
    {name: 'JOBS COMAINS'},
    {name: 'SCORE'},
    {name: 'APPLICATION DATE'},
  ]

  return (
    <div className="filtersWrapper2">
      <h2>Filters</h2>
      <div className="filterToggleTray">
        <div>
          <img src={toggleOn} alt="" />
          <img className='whiteDotInToggleOn' src={toggleOn2} alt="" />
          <p>Show rejected applications</p>
        </div>
        <div>
          <img src={toggleOff} alt="" />
          <img className='whiteDotInToggleOff' src={toggleOn2} alt="" />
          <p>Show rejected applications</p>
        </div>
      </div>
      {filters.map((item, index) => (
        <div className='filterJobTooli2' key={index}>
          <img src={add} alt="add" />
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default Filters