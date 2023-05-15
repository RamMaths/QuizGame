import { useState } from 'react';
import Trivia from './Qn&An/Trivia';
import ModeMenu from './Mode/ModeMenu';

const Game = ({question, getQuestion, setQuestion}) => {
  const [config, setConfig] = useState({});
  const [selected, setSelected] = useState(false);

  console.log(config?.mode);

  return (
    <div className="grid grid-flow-row items-center justify-center p-5 w-full h-full">
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
