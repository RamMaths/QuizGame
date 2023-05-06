import React from 'react';

import decodeHtml from "./decoder";

const Answers = ({question, setNextB, setCorrect}) => {

  console.log(question);
  const answers = question && [...question.incorrect_answers, question.correct_answer];

  const change = (answ) => {

    if(answ === question?.correct_answer) setCorrect(true);
    else if(answ !== question?.correct_answer) setCorrect(false);

    setNextB(true);
  };

  return (<div>
    {question && answers.map((answ, i) => {
      return <button className='btn' key={i} onClick={() => change(answ)}>{decodeHtml(answ)}</button>
    })}
    </div>);
};

export default Answers;

