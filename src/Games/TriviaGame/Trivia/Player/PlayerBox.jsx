import { useTriviaContext } from "../Trivia";
import { useGameContext } from "../../Game";
import Player from './Player';

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
    <div className="grid grid-cols-2 items-center gap-3 w-full h-full text-xl md:grid-cols-1 md:grid-rows-4 md:w-60 md:text-2xl md:gap-y-6">
      {
        <Player
          player={player1}
          className={`flex flex-col items-center justify-center bg-stone-100 rounded-md drop-shadow-lg p-2 md:row-start-1 md:row-span-2 md:h-full`}
        />
      }

      {
        (+config.mode === 2) && 
          <Player 
            player={player2}
            className={`flex flex-col items-center justify-center bg-stone-100 rounded-md drop-shadow-lg p-2 md:row-start-3 md:row-span-2 md:h-full`}
          />
      }
    </div>
  )
};

export default PlayerBox;
