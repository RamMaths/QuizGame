import { memo } from "react";
import decodeHtml from "../functionality/decoder";

const Question = ({question}) => {
  return (<div className="bg-zinc-100 drop-shadow-md text-purple-900 m-6 rounded-lg min-w-fit h-full w-56 text-lg md:text-2xl flex justify-center align-center">
      <h2 className="m-5 flex justify-center align-center text-center">{question && decodeHtml(question)}</h2>
    </div>);
};

export default memo(Question);
