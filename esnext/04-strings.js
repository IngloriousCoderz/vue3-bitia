const name = "Antony";

const singleQuotes = 'Hello "world", how are you?';
const doubleQuotes = "Hello 'world', how are you?";

// template literal:
// 1. multiline
// 2. can use single and double quotes
// 3. js expr interpolation
const templateLiteral = `I can use both
'single' quotes  and "double" quotes!
Of course, \`backticks\` have to be escaped.
${name.toUpperCase()}`;

console.log(templateLiteral);

const id = 1;
const url = "/api/users/" + id + "/profile";
const betterUrl = `/api/users/${id}/profile`;

url[2] = "x";
console.log(url);
