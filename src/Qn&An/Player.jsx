const Player = ({player}) => {
  const {num, pScore, pLifes} = player;
  return (<div>
      <h2>Player {num} Score: {pScore}</h2>
      <h2>Player {num} Lifes: {pLifes}</h2>
    </div>
  );
};

export default Player;
