import React, {useState} from 'react';
import Trivia from './Qn&An/Trivia';
import ModeMenu from './Mode/ModeMenu';

function App() {
  //I will use this state to set the amount of players
  const [mode, setMode] = useState(0);
  const [selected, setSelected] = useState(false);

  console.log(mode);

  return(<>
    <h2>TriviaRam</h2>
    {!selected && <ModeMenu setSelected={setSelected} setMode={setMode}/>}
    {selected && <Trivia mode={mode}/>}
    </>
  );

};

export default App;
