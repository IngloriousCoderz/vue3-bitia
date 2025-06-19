const numbers = [1, 2, 3, 4, 5];

const square = (num) => num ** 2;

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
  console.log(squares);
}

{
  const squares = numbers.map((item) => square(item));
  console.log(squares);
}

// short-circuit
// cortocircuito(TM)

{
  const squares = numbers.map(square);
  console.log(squares);
}
