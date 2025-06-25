// array includes

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(2));

const httpStatus = 200;

if (httpStatus === 200 || httpStatus === 201 || httpStatus === 204) {
  console.log("ok");
}

switch (httpStatus) {
  case 200:
  case 201:
  case 204:
    console.log("ok");
    break;

  default:
}

const SUCCESS_CODES = [200, 201, 204];

if (SUCCESS_CODES.includes(httpStatus)) {
  console.log("ok");
}

// optional chaining

const person = {
  name: "Matteo Antony",
  legs: ["left", "right"],
  speak() {
    return "Hello world!";
  },
};
// const person = undefined

console.log(person?.name);
console.log(person?.legs?.[0]);
console.log(person?.speak?.());

// nullish coalescing

console.log(1 == true);
console.log(0 == false);
console.log("true" == true);
console.log("false" == false);
console.log("" == false);

const likesIcecream = "";

console.log(likesIcecream || "stupid");
console.log(likesIcecream != null ? likesIcecream : "stupid");
console.log(likesIcecream ?? "stupid");

// CommonJS

const fs = require("fs");
const { myModule, person } = require("./01-variables");

module.exports = { person, myModule };

// static ES6 modules

import fs from "fs";
import mySum, { myModule, person as myPerson } from "./01-variables";
import * as vars from "./01-variables";

vars.myModule;
vars.person;
vars.default;

// named exports
export const person = {};
export const myModule = 21;
// default export
export default function sum(a, b) {
  return a + b;
}

// dynamic ES6 modules

import("./02-functions").then((module) => {
  console.log(module.person);
  console.log(module.default);
});
