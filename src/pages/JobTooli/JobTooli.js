import React from 'react'
import NavBar from './components/NavBar/NavBar'
import Header from './components/Header/Header'
import TitlesAndStuff from './components/TitlesAndStuff/TitlesAndStuff'
import Main from './components/Main/Main'
import Filters from './components/Filters/Filters'

const JobTooli = () => {
  return (
    <div className='jobTooli3' style={{ backgroundColor: '#F5F5F5'}}>
      <NavBar />
      <Header />
      <TitlesAndStuff />
      <Filters />
      <Main />
    </div>
  )
}

export default JobTooli