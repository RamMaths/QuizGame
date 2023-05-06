import React from 'react';
import { useState } from 'react';
import Question from './Question';
import Answers from './Answers';


function Trivia() {
  const [question, setQuestion] = useState('');
  const [nextB, setNextB] = useState(false);
  const [correct, setCorrect] = useState(false);
  const [block, setBlock] = useState(false);

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
    />

    { 
      nextB && (correct ? <h2>You are correct</h2> : <h2>You are not correct</h2>)
    }

    { nextB &&
      <button className="next-btn" onClick={handleNextB}>Next Button</button>
    }
  </div>);
}

export default Trivia;
