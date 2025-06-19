const person = { firstName: "Matteo Antony", "last-name": "Mistretta" };

// R - RETRIEVE/READ

// square bracket notation
console.log(person["last-name"]);
console.log(person["firstName"]);

// dot notation
console.log(person.firstName);
// console.log(person.last-name);

const key = "firstName";
console.log(person[key]);

for (const key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key, person[key]);
  }
}

// C - CREATE

person.age = 42;
console.log(person);

// U - UPDATE

person.age = 43;
console.log(person);

// D - DELETE

person.age = undefined;
console.log(person);

delete person.age;
console.log(person);

// destructuring

{
  const { "last-name": lastName, firstName } = person;

  // const firstName = person.firstName;
  // const lastName = person["last-name"];
  console.log(firstName, lastName);
}

// spread operator

{
  const { firstName, ...rest } = person;
  console.log(firstName, rest);
}

{
  const newPerson = { ...person, age: 42 };
  console.log(newPerson, person);
}

function sum(...operands) {
  let total = 0;
  for (let i = 0; i < operands.length; i++) {
    total += operands[i];
  }
  return total;
}

console.log(sum(1, 2, 3, 4, 5));

const dog = {
  name: "Arya",
  age: 10,
  bark() {
    console.log("Woof!");
  },
};
