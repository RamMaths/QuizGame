const decodeHtml = (encodedString) => {
  const divElement = document.createElement("div");
  divElement.innerHTML = encodedString;
  return divElement.textContent;
};

export default decodeHtml;
