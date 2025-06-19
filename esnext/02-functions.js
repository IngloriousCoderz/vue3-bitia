// 1. function declaration
// hoisting
// newspaper metaphor

{
  console.log(sum(2, 3));

  function sum(a, b) {
    return a + b;
  }
}

// 2. function expression
// no hoisting

{
  console.log(this);
  const sum = function (a, b) {
    console.log(this);
    return a + b;
  }.bind(this);

  console.log(sum(2, 3));
}

// 3. arrow function
// -no hoisting
// +auto-binding to this
{
  console.log(this);
  const sum = (a, b) => {
    console.log(this);
    return a + b;
  };

  console.log(sum(2, 3));
}

// +concise
{
  const sum = (a, b) => a + b;

  console.log(sum(2, 3));
}
