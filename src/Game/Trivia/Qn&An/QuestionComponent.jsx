import Question from './Question';
import Answers from './Answers';
import { useTriviaContext } from '../Trivia';

const QuestionComponent = () => {
  const {
    question,
    nextB, 
    setNextB,
    block,
    setBlock,
    setCorrect,
    setP1Score,
    setP2Score,
    p1Lifes,
    setP1Lifes,
    p2Lifes,
    setP2Lifes,
    playing,
    setPlaying,
    lose,
    setLose,
    mode
  } = useTriviaContext();

  return(
    <>
      <div className={`${question ? 'hidden' : undefined} flex flex-col justify-center items-center rounded-md drop-shadow-md flex-wrap w-full h-60 md:w-96 md:h-full`}>
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-purple-900 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Loading...</span>
        </div>

      </div>
      <div className={`${!question ? 'hidden' : undefined} flex flex-col justify-center items-center rounded-md drop-shadow-md flex-wrap w-full h-full md:w-96`}>
        <div className="pt-3 text-xl text-stone-700">
          {
            (mode===2 && !lose && !nextB) && (!playing ?  
              <h4 className='text-center'>Turn of player 1</h4> :
              <h4 className='text-center'>Turn of player 2</h4>)
          }
        </div>

        <Question question={question?.question}/>

        <Answers 
          question={question} 
          nextB={nextB}
          setNextB={setNextB} 
          block={block}
          setBlock={setBlock}
          setCorrect={setCorrect}
          setP1Score={setP1Score}
          setP2Score={setP2Score}
          setP1Lifes={setP1Lifes}
          p1Lifes={p1Lifes}
          setP2Lifes={setP2Lifes}
          p2Lifes={p2Lifes}
          playing={playing}
          setPlaying={setPlaying}
          setLose={setLose}
          mode={mode}
        />
      </div>
    </>
  );
};

export default QuestionComponent;
