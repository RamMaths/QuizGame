import decodeHtml from "./functionality/decoder";

const Question = ({question}) => {
  return (<div className="bg-zinc-700 drop-shadow-md text-zinc-100 m-3 rounded-lg min-w-fit w-56">
      <h2 className="m-5 text-center">{question && decodeHtml(question)}</h2>
    </div>);
};

export default Question;
