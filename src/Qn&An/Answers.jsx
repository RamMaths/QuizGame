import { decodeHtml } from ".";
import { useRef } from "react";

const Answers = ({answers, select, setSelect, setNextB, handleAnswer}) => {

  const change = (answ) => {

    setSelect(prevState => {
      prevState = '';
      prevState += decodeHtml(answ);
      return prevState;
    });

    setNextB(true);
    handleAnswer(select);
  };

  return (<div>
    {answers.map((answ, i) => {
      return <button className='btn' key={i} onClick={() => change(answ)}>{answ}</button>
    })}
    </div>);
};

export default Answers;

