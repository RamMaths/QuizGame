import { useTriviaContext } from "./Trivia";
import { useGameContext } from "../Game";
import decodeHtml from "./functionality/decoder";

const colorVariants = {
  correctBg: 'bg-green-300 border-2 border-green-500 text-green-700 rounded-md mt-2 drop-shadow-md flex flex-col items-center text-center',
  incorrectBg: 'bg-red-300 border-2 border-red-500 text-red-700 rounded-md mt-2 drop-shadow-md flex flex-col items-center text-center',
  correctButton: 'bg-green-500 text-green-100 rounded-md p-1 m-2 hover:bg-green-400',
  incorrectButton: 'bg-red-500 text-red-100 rounded-md p-1 m-2 hover:bg-red-400',
};


const Result = () => {
  const {
    nextB,
    setNextB,
    setBlock,
    correct,
  } = useTriviaContext();

  const {
    question,
    setQuestion,
    getQuestion,
    config
  } = useGameContext();

  const handleNextB = () => {
    nextB && setQuestion(null);
    nextB && getQuestion(config?.url);
    setNextB(false);
    setBlock(false);
  };


  return (
    <div className={`${!nextB ? 'hidden' : undefined} md:row-start-2 md:row-end-2 md:col-span-2 md:text-2xl`}>
      <div className={correct?colorVariants.correctBg:colorVariants.incorrectBg}>
        <div>
          { 
            nextB && 
            (correct ? 
              <h2 className="text-2xl">You are correct</h2> :
              (<>
                <h2 className="text-2xl">You are not correct</h2>
                <h2>The answer is {decodeHtml(question?.correct_answer)}</h2>
              </>))
          }
        </div>
        <div>
          { nextB &&
            <button className={correct?colorVariants.correctButton:colorVariants.incorrectButton} onClick={handleNextB}>Next Button</button>
          }
        </div>
      </div>
    </div>
  )
};

export default Result;
