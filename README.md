# HNG 12 Backend Stage one Task

This Number CLassification API takes an integer as input and returns a JSON response with mathematical properties of the number and a fun fact about the number from [Numbers API](https://http://numbersapi.com).

## Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/holabayor/stage-one.git
   cd stage-one
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Run the server**

   ```sh
   node app.js
   ```

4. **Test the server**
   Open a browser or use curl to access:

   `http://localhost:3000/api/classify-number?number=371`

**Example Response**

```json
{
  "number": "371",
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11,
  "fun_fact": "371 is a narcissistic number."
}
```

**Technologies Used**

- Node.js
- Express.js

You can test a live deployment [here](https://stage-one-j1wp.onrender.com/api/classify-number?number=371)
