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

  return(<div className="flex flex-col justify-center items-center bg-stone-200 rounded-md drop-shadow-md text-stone-600 w-80 text-2xl" >
    <h1 className="p-4 text-xl border-b-2 h-1/3 border-b-gray-400">Select Mode</h1>
    <form className="flex flex-col items-start " onSubmit={start}>

      <label htmlFor='framework'>
        Select Players
      </label>
      <select className="bg-stone-400 mt-1 mb-3" id="mode" name="mode" value={mode} onChange={handleMode}>
        {modes.map((mode) => {
          return <option key={mode}>{mode}</option>;
        })}
      </select>
      { 
        <button type='submit' className="last:items-center bg-red-500 w-20 rounded-md m-2 hover:bg-red-300 text-red-200">Start</button>
      }
    </form>
  </div>);
};

export default ModeMenu;
