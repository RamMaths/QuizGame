import React, { lazy } from 'react';
import Navbar from './Navbar/Navbar';
import './index.css';
const Game = lazy(() => import('./Game/Game'));


function App() {
  return(
    <>
      <Navbar/>
      <Game/>
    </>
  );

};

export default App;
