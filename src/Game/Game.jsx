import { useState, createContext, useContext  } from 'react';
import Trivia from './Trivia/Trivia';
import ModeMenu from './Mode/ModeMenu';
import './Game.css'

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
      setQuestion({...qData});
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="game">
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
