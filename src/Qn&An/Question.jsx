import decodeHtml from "./functionality/decoder";

const Question = ({question}) => {
  return (<div className="bg-zinc-700 text-zinc-100 m-3 rounded-lg">
      <h2 className="m-5 text-center">{question && decodeHtml(question)}</h2>
    </div>);
};

export default Question;

