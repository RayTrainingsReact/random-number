function flip() {
  return Math.random() >= 0.5;
}

function randomNumber(n) {
  let randomNumber = 0;

  if(n > 1000000)
    throw Error;

  do {
    let currentDate = new Date();
    const lastDigit = currentDate.getMilliseconds() % 10;
    const result1 = randomNumber + lastDigit;
    const result2 = randomNumber * lastDigit;
    let result3;

    if (result1 < n && result2 < n) {
      randomNumber = result1 < result2 ? result2 : result1;
    } else if (result1 < n) {
      randomNumber = result1;
    } else if (result2 < n) {
      randomNumber = result2;
    }

    result3 = Math.pow(randomNumber, lastDigit);
    if (result3 < n && result3 > 0) {
      randomNumber = result3;
    }
  } while(flip());
  return randomNumber;
}

console.log(randomNumber(5));
console.log(randomNumber(100));
console.log(randomNumber(24555));
console.log(randomNumber(1000001));