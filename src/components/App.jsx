import React from 'react';
import { CssBaseline } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import { Actors, Movieinformation, Movies, Profile, Navbar } from './';

import usestyles from './styles'

const App = () => {
  const classes=usestyles();

  return(
  <div className={classes.root}>
    <CssBaseline />
    <Navbar/>
      <main className={classes.content}>
      <div className={classes.toolbar}/>
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/movie/:id" element={<Movieinformation />} />
          <Route exact path="/actors/:id" element={<Actors />} />
          <Route exact path="/profile/:id" element={<Profile />} />
        </Routes>
      </main>
  </div>
)};
export default App;
