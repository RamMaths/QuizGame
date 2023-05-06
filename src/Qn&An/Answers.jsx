import React, { useState } from 'react';
import decodeHtml from './functionality/decoder';
import randomizeArray from './functionality/randomNum';

let answers=[];

const Answers = ({question, nextB, setNextB, block, setBlock, setCorrect, setP1Score, setP2Score, playing,setPlaying, mode}) => {

  console.log(question);
  console.log(block);

  answers = nextB? answers : question && randomizeArray([...question.incorrect_answers, question.correct_answer]);
  

  const change = (answ) => {

    if(answ === question?.correct_answer && !block) {
      setCorrect(true);
      setBlock(true);
      (playing===false) && setP1Score(currentV => currentV + 1);
      (mode===2 && playing===true) && setP2Score(currentV => currentV + 1);

      mode===2 && setPlaying(!playing);
    } else if(answ !== question?.correct_answer && !block) {
      setCorrect(false);
      setBlock(true);

      mode===2 && setPlaying(!playing);
    } 
    
    setNextB(true);
  };

  return (<div>
    {question && answers.map((answ, i) => {
      return <button className='btn' key={i} onClick={() => change(answ)}>{decodeHtml(answ)}</button>
    })}
    </div>);
};

export default Answers;

