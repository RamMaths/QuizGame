import React, { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import { About, HighScores, LogIn, SharedComponents } from './Pages';
const Game = lazy(() => import('./Game/Game'));


function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/QuizGame' element={<SharedComponents/>}>
          <Route index element={<Game/>}/>
          <Route path='highscores' element={<HighScores/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='login' element={<LogIn/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );

};

export default App;
