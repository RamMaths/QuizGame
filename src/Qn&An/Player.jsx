const Player = ({player}) => {
  const {num, pScore, pLifes} = player;
  return (<div className="flex flex-col items-center justify-center bg-stone-100 rounded-md drop-shadow-lg mt-2 p-2">
      <h2 className="border-b-2 border-b-gray-400">Player {num}</h2>
      <h2>Score: {pScore}</h2>
      <h2>Lifes: {pLifes}</h2>
    </div>
  );
};

export default Player;
