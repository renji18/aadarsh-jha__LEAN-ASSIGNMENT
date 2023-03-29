import React from 'react'
import Filters from './Filters/Filters'
import './Main.css'
import MyJobs from './My Jobs/MyJobs'

const Main = () => {
  return (
    <div className="mainContentHolder">
      <Filters />
      <MyJobs />
    </div>
  )
}

export default Main