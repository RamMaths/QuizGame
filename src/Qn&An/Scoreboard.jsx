const Scoreboard = ({p1Score, p2Score, mode}) => {
  return (<div>
      <h2>Player 1: {p1Score}</h2>
      {mode===2 && <h2>Player 2: {p2Score}</h2>}
    </div>
  );
};

export default Scoreboard
