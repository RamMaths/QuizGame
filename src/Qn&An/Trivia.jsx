import React from 'react';
import { useState } from 'react';
import Question from './Question';
import Answers from './Answers';
import Scoreboard from './Scoreboard';


function Trivia({mode}) {
  const [question, setQuestion] = useState('');
  const [nextB, setNextB] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [block, setBlock] = useState(false);
  const [p1Score, setP1Score] = useState(0);
  const [p2Score, setP2Score] = useState(0);
  //false it's the first player
  const [playing, setPlaying] = useState(false);

  const getQuestion = async () => {
    const url = 'https://opentdb.com/api.php?amount=1&difficulty=easy';

    try {
      const resp = await fetch(url);
      const { results } = await resp.json();
      const qData = results[0];
      setQuestion({...qData});
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleNextB = () => {
    nextB && getQuestion();
    setNextB(false);
    setBlock(false);
  };

  return (<div className="trivia">
    {
      (mode===2) && (!playing ?  
        <h4>Turn of player 1</h4> :
        <h4>Turn of player 2</h4>)
    }
    
    { !question && 
      <button className="start-btn" onClick={getQuestion}>Start Button</button>
    }

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
      playing={playing}
      setPlaying={setPlaying}
      mode={mode}
    />

    { 
      nextB && 
        (correct ? 
        <h2>You are correct</h2> :
        (<div>
          <h2>You are not correct</h2>
          <h2>The answer is {question?.correct_answer}</h2>
        </div>))
    }

    { nextB &&
      <button className="next-btn" onClick={handleNextB}>Next Button</button>
    }

    <Scoreboard
      p1Score={p1Score}
      p2Score={p2Score}
      mode={mode}
    />
  </div>);
}

export default Trivia;
