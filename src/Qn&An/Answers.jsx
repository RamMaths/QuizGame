import React, { useState, useEffect } from 'react';
import decodeHtml from "./decoder";

const Answers = ({question, setNextB, block, setBlock, setCorrect}) => {

  console.log(question);
  console.log(block);

  const answers = question && [...question.incorrect_answers, question.correct_answer];

  const change = (answ) => {

    if(answ === question?.correct_answer && !block) {
      setCorrect(true);
      setBlock(true);
    } else if(answ !== question?.correct_answer && !block) {
      setCorrect(false);
      setBlock(true);
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

