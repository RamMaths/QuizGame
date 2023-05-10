import { useState } from 'react';

const ModeMenu = ({setSelected, setConfig, getQuestion}) => {
  const modes = [1, 2];
  const [mode, setMode] = useState(1);

  const start = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const newConfig = Object.fromEntries([...formData.entries()]);
    console.log(newConfig);
    setConfig(newConfig);
    setSelected(true);
    getQuestion();
  }

  const handleMode = (e) => {
    setMode(e.target.value);
  };

  return(<div className="flex flex-col items-center justify-center bg-zinc-700 text-zinc-100 w-60 h-48 rounded-lg" >
    <h4 className="p-4">Select Mode</h4>
    <form className="flex flex-col items-start " onSubmit={start}>

      <label htmlFor='framework'>
        Select Players
      </label>
      <select className="bg-gray-500 mt-1 mb-3" id="mode" name="mode" value={mode} onChange={handleMode}>
        {modes.map((mode) => {
          return <option key={mode}>{mode}</option>;
        })}
      </select>
      { 
        <button type='submit' className="last:items-center bg-red-400 w-20 rounded-md m-2 hover:bg-red-300">Start</button>
      }
    </form>
  </div>);
};

export default ModeMenu;
