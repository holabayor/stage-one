const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const isPerfect = (num) => {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
};

const digitSum = (num) => {
  return num
    .toString()
    .split('')
    .reduce((acc, cur) => acc + parseInt(cur), 0);
};

const isArmstrongNumber = (num) => {
  const length = num.toString().length;

  let sum = 0;
  let temp = num;
  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** length;
    temp = parseInt(temp / 10);
  }
  console.log(sum);
  if (sum === parseInt(num)) {
    return true;
  } else {
    return false;
  }
};

module.exports = {
  isPrime,
  isPerfect,
  digitSum,
  isArmstrongNumber,
};
