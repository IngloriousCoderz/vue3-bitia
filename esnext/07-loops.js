const numbers = [1, 2, 3, 4, 5];

const square = (num) => num ** 2;
const isEven = (num) => num % 2 === 0;
const sum = (num1, num2) => num1 + num2;

// index-based
for (let i = 0; i < numbers.length; i++) {
  const item = numbers[i];
  console.log(i, item);
}

for (const item of numbers) {
  const index = numbers.indexOf(item);
  console.log(index, item);
}

// print all items

numbers.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

numbers.forEach(console.log);

numbers.forEach((item) => console.log(item));

// const c = 3;
// function sum(a, b) {
//   // console.log(a, b)
//   // const c = new Date()
//   // const c = Math.random()
//   return a + b + c;
// }

// squares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]

{
  const squares = [];
  numbers.forEach((item) => {
    squares.push(square(item));
  });
  console.log(squares, numbers);
}

// const a = 2;
// a = 3;

// const squares = []
// // squares = {}
// squares.push(1)

{
  const squares = numbers.map((item) => {
    return square(item);
  });
  console.log(squares, numbers);
}

{
  const squares = numbers.map((item) => square(item));
  console.log(squares);
}

// short-circuit
// cortocircuito(TM)

{
  const squares = numbers.map(square);
  console.log(squares, numbers);
}

// evens: [1, 2, 3, 4, 5] -> [2, 4]

{
  const evens = [];
  numbers.forEach((item) => {
    if (isEven(item)) {
      evens.push(item);
    }
  });
  console.log(evens, numbers);
}

{
  const evens = numbers.filter((item) => isEven(item));
  console.log(evens, numbers);
}

{
  const evens = numbers.filter(isEven);
  console.log(evens, numbers);
}

// firstEven: [1, 2, 3, 4, 5] -> 2

{
  let firstEven;
  numbers.forEach((item) => {
    if (!firstEven && isEven(item)) {
      firstEven = item;
    }
  });
  console.log(firstEven, numbers);
}

{
  const firstEven = numbers.find(isEven);
  console.log(firstEven);
}

// firstEvenIndex: [1, 2, 3, 4, 5] -> 1

{
  const firstEvenIndex = numbers.findIndex(isEven);
  console.log(firstEvenIndex);
}

// hasEven: [1, 2, 3, 4, 5] -> true

{
  let hasEven = false;
  numbers.forEach((item) => {
    if (!hasEven && isEven(item)) {
      hasEven = true;
    }
  });
  console.log(hasEven);
}

{
  const hasEven = numbers.some(isEven);
  console.log(hasEven);
}

// allEvens: [1, 2, 3, 4, 5] -> false

{
  let allEvens = true;
  numbers.forEach((item) => {
    if (allEvens && !isEven(item)) {
      allEvens = false;
    }
  });
  console.log(allEvens);
}

{
  const allEvens = numbers.every(isEven);
  console.log(allEvens);
}

// summation: [1, 2, 3, 4, 5] -> 15

{
  let summation = 0;
  numbers.forEach((item) => {
    summation += item;
  });
  console.log(summation);
}

{
  let summation = 0; // init
  numbers.forEach((item) => {
    summation = sum(summation, item); // update
  });
  console.log(summation); // return
}

{
  const summation = numbers.reduce((acc, item) => {
    return sum(acc, item);
  }, 0);
  console.log(summation);
}

{
  const summation = numbers.reduce((acc, item) => sum(acc, item), 0);
  console.log(summation);
}

{
  const summation = numbers.reduce(sum, 0);
  console.log(summation);
}

{
  const [firstItem, ...rest] = numbers;
  let summation = firstItem; // init
  rest.forEach((item) => {
    summation = sum(summation, item); // update
  });
  console.log(summation); // return
}

{
  const summation = numbers.reduce(sum);
  console.log(summation);
}

// sumOfSquareEvens: [1, 2, 3, 4, 5] -> [2, 4] -> [4, 16] -> 20

{
  let sumOfSquareEvens = 0;
  numbers.forEach((item) => {
    if (isEven(item)) {
      const squared = square(item);
      sumOfSquareEvens = sum(sumOfSquareEvens, squared);
    }
  });
  console.log(sumOfSquareEvens);
}

{
  const sumOfSquareEvens = numbers.reduce((acc, item) => {
    if (isEven(item)) {
      const squared = square(item);
      acc = sum(acc, squared);
    }
    return acc;
  }, 0);
  console.log(sumOfSquareEvens);
}

{
  const evens = numbers.filter(isEven);
  console.log(evens);
  const squares = evens.map(square);
  console.log(squares);
  const sumOfSquareEvens = squares.reduce(sum);
  console.log(sumOfSquareEvens);
}

{
  const sumOfSquareEvens = numbers.filter(isEven).map(square).reduce(sum);
  console.log(sumOfSquareEvens);
}

{
  const sumOfSquareEvens = numbers //
    .filter(isEven)
    .map(square)
    .reduce(sum);
  console.log(sumOfSquareEvens);
}

// sumOfEvenSquares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25] -> [4, 16] -> 20

{
  const sumOfEvenSquares = numbers.reduce((acc, item) => {
    const squared = square(item);
    if (isEven(squared)) {
      acc = sum(acc, squared);
    }
    return acc;
  }, 0);
  console.log(sumOfEvenSquares);
}

{
  const sumOfEvenSquares = numbers //
    .map(square)
    .filter(isEven)
    .reduce(sum);
  console.log(sumOfEvenSquares);
}
