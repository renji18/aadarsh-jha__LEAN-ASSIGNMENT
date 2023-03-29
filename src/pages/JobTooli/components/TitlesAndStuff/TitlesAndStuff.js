import React from 'react'
import './TitlesAndStuff.css'
import user from './assets/User_add.png'

const TitlesAndStuff = () => {
  return (
    <div className='titleStuffWrapper'>
      <h1>Applications</h1>
      <p>showing<strong> 45 </strong> results from 108 total</p>
      <img src={user} alt="" />
    </div>
  )
}

export default TitlesAndStuff