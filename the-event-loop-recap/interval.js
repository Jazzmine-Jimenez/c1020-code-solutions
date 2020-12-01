/* eslint-disable no-console */
let count = 3;
const countDown = () => {
  console.log(count);
  count--;
  if (count === 0) {
    console.log('Blast off!');
    clearInterval(intervalID);

  }
};

const intervalID = setInterval(countDown, 1000);
