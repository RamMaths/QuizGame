import React, { lazy } from 'react';
import Navbar from './Navbar/Navbar';
import './index.css';
const TriviaGame = lazy(() => import('./Games/TriviaGame/Game'));
const TicTacToeGame = lazy(() => import('./Games/TicTacToeGame/TicTacToeGame'));


function App() {
  return(
    <>
      <Navbar/>
      <TicTacToeGame/>
    </>
  );

};

export default App;
