import React from 'react';
import { useState } from 'react';
import Question from './Question';
import Answers from './Answers';
import decodeHtml from './functionality/decoder';
import Player from './Player';

const colorVariants = {
  correctBg: 'bg-green-300 border-2 border-green-500 text-green-700 rounded-md mt-2 drop-shadow-md flex flex-col items-center text-center',
  incorrectBg: 'bg-red-300 border-2 border-red-500 text-red-700 rounded-md mt-2 drop-shadow-md flex flex-col items-center text-center',
  correctButton: 'bg-green-500 text-green-100 rounded-md p-1 m-2 hover:bg-green-400',
  incorrectButton: 'bg-red-500 text-red-100 rounded-md p-1 m-2 hover:bg-red-400',
};


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

  const handleNextB = () => {
    nextB && getQuestion();
    setNextB(false);
    setBlock(false);
  };

  return (
  <div className={`${!question ? 'hidden' : undefined} grid grid-flow-row items-center justify-center`}>
    <div className="flex flex-col justify-center items-center bg-stone-100 rounded-md drop-shadow-md flex-wrap">
      <div>
        {
          (mode===2 && !lose && !nextB) && (!playing ?  
            <h4 className='text-center'>Turn of player 1</h4> :
            <h4 className='text-center'>Turn of player 2</h4>)
        }
      </div>

      <Question question={question.question}/>

      <Answers 
        question={question} 
        nextB={nextB}
        setNextB={setNextB} 
        block={block}
        setBlock={setBlock}
        setCorrect={setCorrect}
        setP1Score={setP1Score}
        setP2Score={setP2Score}
        setP1Lifes={setP1Lifes}
        p1Lifes={p1Lifes}
        setP2Lifes={setP2Lifes}
        p2Lifes={p2Lifes}
        playing={playing}
        setPlaying={setPlaying}
        setLose={setLose}
        mode={mode}
      />
    </div>

    <div className={!nextB ? 'hidden' : undefined}>
      <div className={correct?colorVariants.correctBg:colorVariants.incorrectBg}>
        <div>
          { 
            nextB && 
            (correct ? 
              <h2>You are correct</h2> :
              (<>
                <h2>You are not correct</h2>
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

    <div className="grid grid-cols-2 items-center gap-3">
      { question &&
        <Player
          player={player1}
        />
      }

      {
        (mode === 2 && question) && 
          <Player 
            player={player2}
          />
      }

    </div>

    <div>
      {
        (lose && mode===2) && (playing ?  
          <h4>Player 1 loses</h4> :
          <h4>Player 2 loses</h4> )
      }

      {
        (lose && mode===1) && <h4>Player 1 loses</h4>
      }

      { 
        lose && 
          <h2>The answer is {decodeHtml(question?.correct_answer)}</h2>
      }
    </div>

  </div>);
}

export default Trivia;
