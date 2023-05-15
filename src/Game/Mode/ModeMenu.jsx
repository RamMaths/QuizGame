import { useState } from 'react';
import { useGameContext } from '../Game';

const url = 'https://opentdb.com/api.php?amount=1&difficulty=easy';

const modes = [1, 2];
const categories = { 
  'General Knowledge': 9,
  'Entertainment: Books': 10,
  'Entertainment: Film': 11,
  'Entertainment: Music': 12,
  'Entertainment: Musicals & Theatres': 13,
  'Entertainment: Television': 14,
  'Entertainment: Video Games': 15,
  'Entertainment: Board Games': 16,
  'Science & Nature': 17,
  'Science: Computers': 18,
  'Science: Mathematics': 19,
  'Mythology': 20,
  'Sports': 21,
  'Geography': 22,
  'History': 23,
  'Politics': 24,
  'Art': 25,
  'Celebrities': 26,
  'Animals': 27,
  'Vehicles': 28,
  'Entertainment: Comics': 29,
  'Science: Gadgets': 30,
  'Entertainment: Japanese Anime & Manga': 31,
  'Entertainment: Cartoon & Animations': 32
};


const ModeMenu = ({setSelected, getQuestion}) => {
  const [mode, setMode] = useState(1);
  const [categ, setCateg] = useState(Object.keys(categories)[0]);
  const { setConfig } = useGameContext();

  const start = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    let newConfig = Object.fromEntries([...formData.entries()]);
    newConfig = {...newConfig, category: categories[categ], url: `${url}&category=${categories[categ]}`};
    console.log(newConfig);
    setConfig(currConfig => {
      currConfig = {...newConfig}
      getQuestion(currConfig?.url);
      return currConfig;
    });
    setSelected(true);
  }

  const handleMode = (e) => {
    setMode(e.target.value);
  };

  const handleCateg = (e) => {
    setCateg(e.target.value);
  }

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

      <select className="bg-stone-400 mt-1 mb-3" id="mode" name="category" value={categ} onChange={handleCateg}>
        {Object.keys(categories).map((category) => {
          return <option key={category}>{category}</option>;
        })}
      </select>

      { 
        <button type='submit' className="last:items-center bg-red-500 w-20 rounded-md m-2 hover:bg-red-300 text-red-200">Start</button>
      }
    </form>
  </div>);
};

export default ModeMenu;
