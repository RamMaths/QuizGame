const ModeMenu = ({setSelected, setMode}) => {
  const handle1P = () => {
    setSelected(true);
    setMode(1);
  };

  const handle2P = () => {
    setSelected(true);
    setMode(2);
  };

  return(<div className="mode-menu">
      <h4>Select Mode</h4>
      <button onClick={handle1P}> 1 player</button>
      <button onClick={handle2P}> 2 player</button>
    </div>);
};

export default ModeMenu;
