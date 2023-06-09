import { memo } from "react";
import decodeHtml from "../functionality/decoder";
import './Question.css';

const Question = ({question}) => {
  return (<div className="question">
      <h2 className="m-5 flex justify-center align-center text-center">{question && decodeHtml(question)}</h2>
    </div>);
};

export default memo(Question);
