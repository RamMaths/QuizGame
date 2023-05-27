import { useState } from 'react';
import { useGameContext } from '../Game';

const url = 'https://opentdb.com/api.php?amount=1&difficulty=easy';

const modes = [1, 2];
const categories = { 
  'General Knowledge': 9,
  'Books': 10,
  'Film': 11,
  'Music': 12,
  'Musicals & Theatres': 13,
  'Television': 14,
  'Video Games': 15,
  'Board Games': 16,
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
  'Japanese Anime & Manga': 31,
  'Cartoon & Animations': 32
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
    <h1 className="pt-4 text-3xl border-b-2 h-1/3 border-b-gray-400">Select Mode</h1>
    <form onSubmit={start}>
      <div className="flex flex-col align-center justify-start pt-3">
        <label htmlFor='framework'>
          Players
        </label>
        <select className="bg-stone-400 mt-1 mb-3" id="mode" name="mode" value={mode} onChange={handleMode}>
          {modes.map((mode) => {
            return <option key={mode}>{mode}</option>;
          })}
        </select>

        <label htmlFor='framework'>
          Category
        </label>
        <select className="bg-stone-400 mt-1 mb-3 w-52" id="mode" name="category" value={categ} onChange={handleCateg}>
          {Object.keys(categories).map((category) => {
            return <option key={category}>{category}</option>;
          })}
        </select>
      </div>

      <div className="flex flex-col items-center">
        { 
          <button type='submit' className="last:items-center bg-purple-500 w-20 rounded-md m-2 hover:bg-purple-200 text-violet-100">Start</button>
        }
      </div>
    </form>
  </div>);
};

export default ModeMenu;
