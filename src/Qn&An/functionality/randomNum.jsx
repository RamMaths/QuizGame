const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

const randomizeArray = (arr) => {
  const set = new Set();
  const newArr = [];

  for(let i=0; i<arr.length; i++) {
    let randN = getRandomInt(arr.length);
    while(set.has(randN)) {
      randN = getRandomInt(arr.length);
    }
    set.add(randN)
    newArr.push(arr[randN]);
  }

  return newArr;
}

export default randomizeArray;
