import * as tf from '@tensorflow/tfjs';
import { useState, useEffect } from 'react';
import { FaCircleNotch, FaTimes } from 'react-icons/fa';

//css
import './TicTacToeGame.css';

const selected = new Set([]);

const TicTacToeGame = () => {
  const [update, setUpdate] = useState(true);
  const [model, setModel] = useState(null);
  const [board, setBoard] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
    
  useEffect(() => {
    const loadModel = async () => {
      const model_url = "https://raw.githubusercontent.com/RamMaths/Models/main/ttt-model/ttt_model.json";
      const newModel = await tf.loadLayersModel(model_url);
      setModel(newModel);
    };

    loadModel();
  }, []);

  const forcUpdate = () => {
    setUpdate(!update);
  }

  const handleButton = (i) => {
    if(!selected.has(i)) {
      const newBoard = board.map(el => el);
      newBoard[i] = -1;
      setBoard(newBoard);
      selected.add(i);
      tf.tidy(() => {
        const tensorBoard = tf.tensor(newBoard);
        tensorBoard.print();
        const expandTensor = tf.expandDims(tensorBoard);
        const result = model.predict(expandTensor);
        tf.squeeze(result).array().then(arr => {
          const max = arr.indexOf(Math.max(...arr));
          console.log(max);
          newBoard[max] = 1;
          setBoard(newBoard);
          selected.add(max);
          forcUpdate();
        });
      });
    }
  }

  return (
    <div className="ttt-container">
      <div className="ttt-box">
        {board.map((el, i) => {
          return (<button key={i} className="btn-box" onClick={() => handleButton(i)}>
            {
              el !== 0 && 
                (el === 1 ?
                <FaCircleNotch/> :
                <FaTimes/>)
            }
          </button>);
        })}
      </div>
    </div>
  );
};

export default TicTacToeGame;
