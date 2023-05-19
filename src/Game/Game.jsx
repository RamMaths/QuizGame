import { useState, createContext, useContext  } from 'react';
import Trivia from './Qn&An/Trivia';
import ModeMenu from './Mode/ModeMenu';

const GameContext = createContext();

export const useGameContext = () => useContext(GameContext);

const Game = () => {
  const [config, setConfig] = useState(null);
  const [selected, setSelected] = useState(false);
  const [question, setQuestion] = useState('');

  const getQuestion = async (url) => {
    try {
      const resp = await fetch(url);
      const { results } = await resp.json();
      const qData = results[0];
      console.log('qData: ' + qData);
      setQuestion({...qData});
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="grid grid-flow-row items-center justify-center p-5 w-full h-full">
      <GameContext.Provider value={{config, setConfig}}>
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
      </GameContext.Provider>
    </div>
  );
};

export default Game;
