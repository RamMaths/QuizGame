import React, {useState} from 'react';
import Trivia from './Qn&An/Trivia';
import ModeMenu from './Mode/ModeMenu';
import './index.css';

function App() {
  const [question, setQuestion] = useState('');

  const getQuestion = async () => {
    const url = 'https://opentdb.com/api.php?amount=1&difficulty=easy';

    try {
      const resp = await fetch(url);
      const { results } = await resp.json();
      const qData = results[0];
      setQuestion({...qData});
    } catch (err) {
      console.log(err.message);
    }
  };

  return(
    <>
      <Container question={question} getQuestion={getQuestion}/>
    </>
  );

};

const Container = ({question, getQuestion, setQuestion}) => {
  const [mode, setMode] = useState(0);
  const [selected, setSelected] = useState(false);

  return (
    <div className="flex flex-col items-center p-5">
      {!selected && 
      <ModeMenu 
        setSelected={setSelected}
        setMode={setMode}
        question={question}
        getQuestion={getQuestion}/>
      }

      {selected && 
        <Trivia mode={mode}
        question={question}
        setQuestion={setQuestion}
        getQuestion={getQuestion}
        />
      }
    </div>
  );
};

export default App;
