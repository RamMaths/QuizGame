import React, { useState } from 'react';
import decodeHtml from './functionality/decoder';
import { randomizeArray } from './functionality/randomNum';

let answers=[];
let colors=['yellow', 'lime', 'cyan', 'rose'];

const colorVariants = {
  yellow: 'bg-yellow-500 hover:bg-yellow-300',
  lime: 'bg-lime-500 hover:bg-lime-300',
  cyan: 'bg-cyan-500 hover:bg-cyan-300',
  rose: 'bg-rose-500 hover:bg-rose-300'
};

const Answers = ({
  question,
  nextB,
  setNextB,
  block,
  setBlock,
  setCorrect,
  setP1Score,
  setP2Score,
  setP1Lifes,
  setP2Lifes,
  playing,
  setPlaying,
  setLose,
  mode
  }) => {

  console.log(question);
  console.log(block);

  answers = nextB? answers : question && randomizeArray([...question.incorrect_answers, question.correct_answer]);

  colors = nextB? colors : question && randomizeArray(['yellow', 'lime', 'cyan', 'rose']);
  
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

  return (<div className='grid grid-cols-2 gap-1'>
    {question && answers.map((answ, i) => {
    return <Button className={`rounded-md w-28 h-20 px-4 m-2 ${colorVariants[colors[i]]}`} key={i} change={change} answ={answ}/>
    })}
    </div>);
};

const Button = ({className, change, answ}) => {
  return <button className={className} onClick={() => change(answ)}>{decodeHtml(answ)}</button>;
};

export default Answers;
