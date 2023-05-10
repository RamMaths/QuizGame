const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};

export const randomizeArray = (arr) => {
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

export const getColor = () => {
  const colors = ['yellow', 'lime', 'cyan', 'rose'];
  const index = getRandomInt(colors.length);
  return colors[index];
}

