import { getQuestion } from ".";

const StartButton = ({setQuestion, setAnswers, url}) => {
  return <button className='btn start' onClick={() => getQuestion(setQuestion, setAnswers, url)}>Start question</button>;
};

export default StartButton;
