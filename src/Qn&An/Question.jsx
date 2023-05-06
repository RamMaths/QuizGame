import decodeHtml from "./functionality/decoder";

const Question = ({question}) => {
  return (<>
    <h2>{question && decodeHtml(question)}</h2>
    </>);
};

export default Question;

