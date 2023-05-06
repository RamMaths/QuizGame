import React, {useState} from 'react';
import Trivia from './Qn&An/Trivia';
import ModeMenu from './Mode/ModeMenu';
import './App.css';

function App() {

  return(
    <>
      <Container/>
    </>
  );

};

const Container = () => {
  const [mode, setMode] = useState(0);
  const [selected, setSelected] = useState(false);

  return (
    <div className="container">
      <div className="menu">
        {!selected && <ModeMenu setSelected={setSelected} setMode={setMode}/>}
      </div>
    <div className="game">
      {selected && <Trivia mode={mode}/>}
    </div>
    </div>
  );
};

export default App;
