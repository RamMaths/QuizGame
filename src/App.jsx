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
      <Game question={question} getQuestion={getQuestion}/>
    </>
  );

};

const Game = ({question, getQuestion, setQuestion}) => {
  const [config, setConfig] = useState({});
  const [selected, setSelected] = useState(false);

  console.log(config?.mode);

  return (
    <div className="grid grid-cols-1 items-center justify-center w-3/5 p-5 h-screen">

      {!selected && 
      <ModeMenu 
        setSelected={setSelected}
        setConfig={setConfig}
        setMode={setConfig}
        question={question}
        getQuestion={getQuestion}/>
      }

      {selected && 
        <Trivia mode={+config?.mode}
        question={question}
        setQuestion={setQuestion}
        getQuestion={getQuestion}
        />
      }
    </div>
  );
};

export default App;
