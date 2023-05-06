const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const randomizeArray = (arr) => {
  const obj = {};
  const newArr = [];

  for(let i=0; i<arr.length; i++) {
    let randN = getRandomInt(arr.length);
    while(obj[randN]) {
      randN = getRandomInt(arr.length);
    }
    obj[randN] = randN;
    newArr.push(arr[randN]);
  }

  return newArr;
}

export default randomizeArray;
