const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

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

app.get('/api/classify-number', (req, res) => {
  const { number } = req.query;

  // Check if number is not provided or is not a number
  if (!number || isNaN(number)) {
    return res.status(400).json({
      error: 'true',
      message: 'Please provide a valid number',
    });
  }

  const is_prime = isPrime(number);
  const is_perfect = isPerfect(number);
  const properties = [];
  const digit_sum = digitSum(number);

  // Properties of the number can be odd, even, armstrong or combination of these
  if (isArmstrongNumber(number)) properties.push('armstrong');
  number % 2 === 0 ? properties.push('even') : properties.push('odd');

  //   console.log(isArmstrongNumber(number));

  // Get fun fact from an external API
  return fetch(`http://numbersapi.com/${number}/math`)
    .then((response) => response.text())
    .then((data) => {
      res.status(200).json({
        number,
        is_prime,
        is_perfect,
        properties,
        digit_sum,
        fun_fact: data,
      });
    })
    .catch((err) => {
      console.log('Error fetching fun fact', err);
      res.status(200).json({
        number,
        is_prime,
        is_perfect,
        properties,
        digit_sum,
      });
    });
});

// Catch all other routes and methods
app.all('*', (req, res) => {
  res.status(404).json({
    error: 'true',
    message: 'The requested route does not exist',
  });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
