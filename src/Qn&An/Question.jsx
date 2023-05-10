import decodeHtml from "./functionality/decoder";

const Question = ({question}) => {
  return (<div className="flex justify-center bg-zinc-700 text-zinc-100 w-60 h-30% rounded-lg">
    <h2 className="m-5 text-center">{question && decodeHtml(question)}</h2>
    </div>);
};

export default Question;

