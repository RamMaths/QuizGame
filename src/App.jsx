import { useState, useEffect } from 'react';
import { Question, Answers } from './Qn&An';
import { StartButton, NextButton } from './NextQ/';
import './App.css'

const url = 'https://opentdb.com/api.php?amount=1&difficulty=easy';

let nextFlag = false;

function App() {

  const [question, setQuestion] = useState('');
  const [select, setSelect] = useState('');
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    nextFlag = !nextFlag
  }, [select, question]);
  
  
  return (<>
    <h2>TriviaRam</h2>

    { !question && 
      <StartButton
      setQuestion={setQuestion}
      setAnswers={setAnswers}
      url={url}/>
    }

    <Question question={question.question}/>
    <Answers answers={answers} setAnswers={setAnswers} setSelect={setSelect}/>

    { nextFlag &&
      <NextButton
      setQuestion={setQuestion}
      setAnswers={setAnswers}
      url={url}/>
    }
    
    </>);
}

export default App
