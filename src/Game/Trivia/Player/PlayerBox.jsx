import { useTriviaContext } from "../Trivia";
import { useGameContext } from "../../Game";
import Player from './Player';
import './PlayerBox.css';

const PlayerBox = () => {

  const {
    p1Lifes, p1Score,
    p2Lifes, p2Score
  } = useTriviaContext();

  const {
    config
  } = useGameContext();

  const player1 = {
    num: 1,
    pScore: p1Score,
    pLifes: p1Lifes
  };

  const player2 = {
    num: 2,
    pScore: p2Score,
    pLifes: p2Lifes
  };

  return (
    <div className="container-player">
      {
        <Player
          player={player1}
          className="player-box"
        />
      }

      {
        (+config.mode === 2) && 
          <Player 
            player={player2}
            className="player-box"
          />
      }
    </div>
  )
};

export default PlayerBox;
