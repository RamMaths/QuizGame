const ModeMenu = ({setSelected, setMode}) => {
  const handle1P = () => {
    setSelected(true);
    setMode(1);
  };

  const handle2P = () => {
    setSelected(true);
    setMode(2);
  };

  return(<div className="flex flex-col items-center bg-zinc-700 text-zinc-100 w-60 h-36 rounded-lg">
      <h4 className="p-4">Select Mode</h4>
      <button className="bg-orange-400 w-20 rounded-md m-2 hover:bg-orange-300" onClick={handle1P}> 1 player</button>
      <button className="bg-orange-400 w-20 rounded-md m-2 hover:bg-orange-300" onClick={handle2P}> 2 player</button>
    </div>);
};

export default ModeMenu;
