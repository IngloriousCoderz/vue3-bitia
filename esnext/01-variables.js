// let è meglio di var perché:

// 1. è meno permissivo
// let a;
// a = 2;
// let a = 3;

// 2. non è soggetto a hoisting
var a = 2;

// 3. miglior scoping
if (true) {
  let b = 3;
}

{
  let b = 4;
}

function func() {
  let b = 5;
  console.log(b);
}

func();

const c = 1;
// c = 2;
// const d;
const PI = 3.14;
const COLOR = "#FF000";
// const answer = prompt("Are you happy?");
