import { useState, createContext, useContext, Suspense, lazy  } from 'react';
import ModeMenu from './Mode/ModeMenu';
import './Game.css'

const Trivia = lazy(() => import('./Trivia/Trivia'));

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
    <Suspense>
      <div className="game">
        <GameContext.Provider value={{config, setConfig, question, setQuestion, getQuestion}}>
        {!selected && 
        <ModeMenu 
          setSelected={setSelected}
          setConfig={setConfig}
          setMode={setConfig}
          question={question}
          getQuestion={getQuestion}/>
        }

        {selected && 
          <Trivia/>
        }
        </GameContext.Provider>
      </div>
    </Suspense>
  );
};

export default Game;
