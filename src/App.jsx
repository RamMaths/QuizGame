import React, {useState} from 'react';
import Trivia from './Qn&An/Trivia';

function App() {
  //I will use this state to set the amount of players
  const [mode, setMode] = useState(1);

  return(
    <Trivia />
  );

};

export default App;
