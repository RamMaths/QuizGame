import Question from "./Question";
import Answers from "./Answers";

export { Question, Answers }

export const decodeHtml = (encodedString) => {
  const divElement = document.createElement("div");
  divElement.innerHTML = encodedString;
  return divElement.textContent;
};
