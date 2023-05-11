import { useState } from 'react';
import Trivia from './Qn&An/Trivia';
import ModeMenu from './Mode/ModeMenu';

const Game = ({question, getQuestion, setQuestion}) => {
  const [config, setConfig] = useState({});
  const [selected, setSelected] = useState(false);

  console.log(config?.mode);

  return (
    <div className="grid grid-cols-1 items-center justify-center w-5/8 p-5 h-screen">
      {!selected && 
      <ModeMenu 
        setSelected={setSelected}
        setConfig={setConfig}
        setMode={setConfig}
        question={question}
        getQuestion={getQuestion}/>
      }

      {selected && 
        <Trivia mode={+config?.mode}
        question={question}
        setQuestion={setQuestion}
        getQuestion={getQuestion}
        />
      }
    </div>
  );
};

export default Game;
