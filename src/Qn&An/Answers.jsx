import React, { useState } from 'react';
import decodeHtml from "./decoder";

const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const randomizeArray = (arr) => {
  const obj = {};
  const newArr = [];

  for(let i=0; i<arr.length; i++) {
    let randN = getRandomInt(arr.length);
    while(obj[randN]) {
      randN = getRandomInt(arr.length);
    }
    obj[randN] = randN;
    newArr.push(arr[randN]);
  }

  return newArr;
}

const Answers = ({question, setNextB, block, setBlock, setCorrect, setP1Score, setP2Score, playing,setPlaying, mode}) => {

  console.log(question);
  console.log(block);

  const answers = question && randomizeArray([...question.incorrect_answers, question.correct_answer]);
  

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

