import React from 'react';
import { useState, useCallback, useContext, createContext, Suspense } from 'react';
import Player from './Player';
import QuestionComponent from './Qn&An/QuestionComponent';
import { useGameContext } from '../Game';
import decodeHtml from './functionality/decoder';

const colorVariants = {
  correctBg: 'bg-green-300 border-2 border-green-500 text-green-700 rounded-md mt-2 drop-shadow-md flex flex-col items-center text-center',
  incorrectBg: 'bg-red-300 border-2 border-red-500 text-red-700 rounded-md mt-2 drop-shadow-md flex flex-col items-center text-center',
  correctButton: 'bg-green-500 text-green-100 rounded-md p-1 m-2 hover:bg-green-400',
  incorrectButton: 'bg-red-500 text-red-100 rounded-md p-1 m-2 hover:bg-red-400',
};

const TriviaContext = createContext();

export const useTriviaContext = () => useContext(TriviaContext);


function Trivia({
  mode,
  question,
  setQuestion,
  getQuestion
}) {
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

  const { config } = useGameContext();

  const player1 = {
    num: 1,
    pScore: p1Score,
    pLifes: p1Lifes
  };

  const player2 = {
    num: 2,
    pScore: p2Score,
    pLifes: p2Lifes
  };

  const handleNextB = useCallback(() => {
    nextB && setQuestion(null);
    nextB && getQuestion(config?.url);
    setNextB(false);
    setBlock(false);
  }, [nextB]);

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
        mode
        }}>
        <div className={`grid grid-flow-row items-center justify-center gap-x-3 gap-y-3 md:grid-flow-col md:grid-col-2 md:gap-x-6 md:gap-y-0`}>

          <QuestionComponent/>

          <div className={`${!nextB ? 'hidden' : undefined} md:row-start-3 md:row-end-4 md:col-span-3 md:text-2xl`}>
            <div className={correct?colorVariants.correctBg:colorVariants.incorrectBg}>
              <div>
                { 
                  nextB && 
                  (correct ? 
                    <h2 className="text-2xl">You are correct</h2> :
                    (<>
                      <h2 className="text-2xl">You are not correct</h2>
                      <h2>The answer is {decodeHtml(question?.correct_answer)}</h2>
                    </>))
                }
              </div>
              <div>
                { nextB &&
                  <button className={correct?colorVariants.correctButton:colorVariants.incorrectButton} onClick={handleNextB}>Next Button</button>
                }
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 items-center gap-3 w-full h-full text-xl md:grid-cols-1 md:grid-rows-4 md:w-60 md:text-2xl md:gap-y-6">
            {
              <Player
                player={player1}
                className={`flex flex-col items-center justify-center bg-stone-100 rounded-md drop-shadow-lg p-2 md:row-start-1 md:row-span-2 md:h-full`}
              />
            }

            {
              (mode === 2) && 
                <Player 
                  player={player2}
                  className={`flex flex-col items-center justify-center bg-stone-100 rounded-md drop-shadow-lg p-2 md:row-start-3 md:row-span-2 md:h-full`}
                />
            }

          </div>

          <div className="flex flex-col justify-center items-center bg-stone-100 rounded-md drop-shadow-md mb-8">
            {
              (lose && mode===2) && (playing ?  
                <h4 className="text-red-500">Player 1 loses</h4> :
                <h4 className="text-red-500">Player 2 loses</h4> )
            }

            {
              (lose && mode===1) && <h4 className="text-red-500">Player 1 loses</h4>
            }

            { 
              lose && 
                <h2>The answer is {decodeHtml(question?.correct_answer)}</h2>
            }

            {
              (lose && mode===2) && (!playing ?  
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
