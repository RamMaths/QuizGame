import React, {useState} from 'react';
import Trivia from './Qn&An/Trivia';
import ModeMenu from './Mode/ModeMenu';
import './index.css';

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
    <div className="flex flex-col items-center p-5">
      {!selected && <ModeMenu setSelected={setSelected} setMode={setMode}/>}
      {selected && <Trivia mode={mode}/>}
    </div>
  );
};

export default App;
