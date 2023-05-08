import React, { useState } from 'react';
import decodeHtml from './functionality/decoder';
import randomizeArray from './functionality/randomNum';

let answers=[];

const Answers = ({
  question,
  nextB,
  setNextB,
  block,
  setBlock,
  setCorrect,
  setP1Score,
  setP2Score,
  p1Lifes,
  setP1Lifes,
  p2Lifes,
  setP2Lifes,
  playing,
  setPlaying,
  setLose,
  mode
  }) => {

  console.log(question);
  console.log(block);

  answers = nextB? answers : question && randomizeArray([...question.incorrect_answers, question.correct_answer]);
  
  const lose = () => {
    setLose(true);
    setNextB(false);
    console.log('you lose')
  };

  const correct = () => {
    setCorrect(true);
    setBlock(true);
    (playing===false) && setP1Score(currentV => currentV + 1);
    (mode===2 && playing===true) && setP2Score(currentV => currentV + 1);

    mode===2 && setPlaying(!playing);
    setNextB(true);
  };

  const incorrect = () => {
    setCorrect(false);
    setBlock(true);
    mode===2 && setPlaying(!playing);
    
    !playing? 
      (setP1Lifes(curLifes => {
        curLifes = curLifes - 1;
        (curLifes>0) ? setNextB(true) : lose();
        return curLifes;
      })) :
      (setP2Lifes(curLifes => {
        curLifes = curLifes - 1;
        (curLifes>0) ? setNextB(true) : lose();
        return curLifes;
      })) ;

  };

  const change = (answ) => {

    (answ === question?.correct_answer && !block) && correct();
    (answ !== question?.correct_answer && !block) && incorrect();
  };

  return (<div>
    {question && answers.map((answ, i) => {
      return <button className='btn' key={i} onClick={() => change(answ)}>{decodeHtml(answ)}</button>
    })}
    </div>);
};

export default Answers;

