import React, { Fragment } from 'react'
import Header from './components/Header/Header'
import NavBar from './components/NavBar/NavBar'
import SideTopics from './components/SideTopics/SideTopics'
import Main from './components/Main/Main'

const Aviate = () => {
  return (
    <Fragment>
      <Header />
      <NavBar />
      <Main />
      <SideTopics />
    </Fragment>
  )
}

export default Aviate