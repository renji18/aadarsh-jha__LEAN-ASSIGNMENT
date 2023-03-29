import React, { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import Aviate from './pages/Aviate/Aviate';
import Home from './pages/Home/Home';
import JobTooli from './pages/JobTooli/JobTooli';


function App() {
  return (
    <Fragment>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aviate' element={<Aviate />} />
        <Route path='/job-tooli' element={<JobTooli />} />
      </Routes>
    </Fragment>
  );
}

export default App;
