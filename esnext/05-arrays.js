const numbers = [1, 2, 3, 4, 5];

numbers.push(6);
console.log(numbers);

numbers.pop();
console.log(numbers);

numbers.shift();
console.log(numbers);

numbers.unshift(1);
console.log(numbers);

numbers.splice(2, 1, 6, 7);
console.log(numbers);

// destructuring
{
  const [firstItem, secondItem] = numbers;
  // const [, secondItem, , fourthItem] = numbers;

  // const firstItem = numbers[0];
  // const SECOND_ITEM_INDEX = 1;
  // const secondItem = numbers[SECOND_ITEM_INDEX];
  const lastItem = numbers[numbers.length - 1];
  console.log(firstItem, secondItem, lastItem);
}

// spread operator (rest)
{
  const [firstItem, secondItem, ...rest] = numbers;
  console.log(firstItem, secondItem, rest);
}

{
  const newNumbers = [...numbers, 8];
  console.log(newNumbers, numbers);
}

{
  delete numbers[3];
  console.log(numbers, numbers.length);
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
  for (const num of numbers) {
    console.log(num);
  }

  for (const indexString in numbers) {
    console.log(indexString, numbers[indexString]);
  }
}
