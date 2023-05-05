import { getQuestion } from ".";

const NextButton = ({setQuestion, setAnswers, url}) => {
  return <button className='btn next' onClick={() => getQuestion(setQuestion, setAnswers, url)}>Next question</button>;
};

export default NextButton;
