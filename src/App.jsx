import { useState, useEffect } from 'react';
import { Question, Answers } from './Qn&An';
import './App.css'


function App() {
  const [question, setQuestion] = useState('');
  const [select, setSelect] = useState('');
  const [answers, setAnswers] = useState([]);
  const [nextB, setNextB] = useState(false);

  const getQuestion = async () => {
    const url = 'https://opentdb.com/api.php?amount=1&difficulty=easy';

    try {
      const resp = await fetch(url);
      const { results } = await resp.json();
      const qData = results[0];
      setAnswers([...qData?.incorrect_answers, qData?.correct_answer]);
      setQuestion(qData);
    } catch (err) {
      console.log(err.message);
    }
  };

  const handleNextB = () => {
    setNextB(false);
    getQuestion();
  };

  const handleAnswer = (select) => {
    console.log(`Correct: ${question?.correct_answer}, Selected: ${select}`)
  };

  return (<>
    <h2>TriviaRam</h2>

    { !question && 
      <button className="start-btn" onClick={getQuestion}>Start Button</button>
    }

    <Question question={question.question}/>
    <Answers 
      answers={answers} 
      select={select}
      setSelect={setSelect} 
      setNextB={setNextB} 
      handleAnswer={handleAnswer}
    />

    {/* { */}
    {/*   nextFlag && (isCorrect ? <h2>You are correct</h2> : <h2>You are not correct</h2>) */}
    {/* } */}

    { nextB &&
      <button className="next-btn" onClick={handleNextB}>Next Button</button>
    }
  </>);
}

export default App;
