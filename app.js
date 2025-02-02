const express = require('express');
const cors = require('cors');
const { isArmstrongNumber, isPrime, isPerfect, digitSum } = require('./utils');

const app = express();
const PORT = 3000;

app.use(cors());

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
    });
});

// Catch all other routes and methods
app.all('*', (_, res) => {
  res.status(404).json({
    error: 'true',
    message: 'The requested route does not exist',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
