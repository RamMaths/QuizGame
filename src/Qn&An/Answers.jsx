import { decodeHtml } from "../NextQ";

const Answers = ({answers, setSelect}) => {

  const change = (answ) => {
    setSelect(decodeHtml(answ));
  };

  return (<div>
    {answers.map((answ, i) => {
      return <button className='btn' key={i} onClick={() => change(answ)}>{answ}</button>
    })}
    </div>);
};

export default Answers;

