import NextButton from "./NextButton";
import StartButton from "./StratButton";

export const getQuestion = async (setQuestion, setAnswers, url) => {
  try {
    const resp = await fetch(url);
    const { results } = await resp.json();
    const qData = results[0];
    setAnswers([...qData.incorrect_answers, qData.correct_answer]);
    setQuestion(qData);
  } catch (err) {
    console.log(err.message);
  }
};

export const decodeHtml = (encodedString) => {
  const divElement = document.createElement("div");
  divElement.innerHTML = encodedString;
  return divElement.textContent;
};

export {NextButton, StartButton};
