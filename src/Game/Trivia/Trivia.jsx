import { useState, useContext, createContext, Suspense } from 'react';
import React from 'react';
import { useGameContext } from '../Game';
import QuestionComponent from './Qn&An/QuestionComponent';
import Result from './Result';
import PlayerBox from './Player/PlayerBox';
import decodeHtml from './functionality/decoder';

import './Trivia.css';

const TriviaContext = createContext();

export const useTriviaContext = () => useContext(TriviaContext);


const Trivia = () => {
  const { question, config } = useGameContext();
  const [nextB, setNextB] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [block, setBlock] = useState(false);
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  const [p1Lifes, setP1Lifes] = useState(5);
  const [p2Lifes, setP2Lifes] = useState(5);
  //false it's the first player
  const [playing, setPlaying] = useState(false);
  const [lose, setLose] = useState(false);

  return (
    <Suspense>
      <TriviaContext.Provider value={{
        question,
        nextB, setNextB,
        correct, setCorrect,
        block, setBlock,
        p1Score, setP1Score,
        p2Score, setP2Score,
        p1Lifes, setP1Lifes,
        p2Lifes, setP2Lifes,
        playing, setPlaying,
        lose, setLose,
        }}>
        <div className="container-trivia">

          <QuestionComponent />
          <Result />
          <PlayerBox />

          <div className="flex flex-col justify-center items-center bg-stone-100 rounded-md drop-shadow-md mb-8">
            {
              (lose && config.mode===2) && (playing ?  
                <h4 className="text-red-500">Player 1 loses</h4> :
                <h4 className="text-red-500">Player 2 loses</h4> )
            }

            {
              (lose && config.mode===1) && <h4 className="text-red-500">Player 1 loses</h4>
            }

            { 
              lose && 
                <h2>The answer is {decodeHtml(question?.correct_answer)}</h2>
            }

            {
              (lose && config.mode===2) && (!playing ?  
                <h4 className="text-green-500">Player 1 wins</h4> :
                <h4 className="text-green-500">Player 2 wins</h4> )
            }
          </div>

        </div>

      </TriviaContext.Provider>
    </Suspense>
  );
}

export default Trivia;
