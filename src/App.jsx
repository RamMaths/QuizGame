import React, {useState} from 'react';
import Game from './Game/Game';
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
      <Game question={question} getQuestion={getQuestion} setQuestion={setQuestion}/>
    </>
  );

};

export default App;
