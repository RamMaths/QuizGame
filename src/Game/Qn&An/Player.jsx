import { memo } from "react";

const Player = ({player, className}) => {
  const {num, pScore, pLifes} = player;
  return (<div className={className}>
      <h2 className="border-b-2 border-b-gray-400">Player {num}</h2>
      <h2 className="md:pt-5">Score: {pScore}</h2>
      <h2 className="">Lifes: {pLifes}</h2>
    </div>
  );
};

export default memo(Player);
