// Learning Function & Arrow Function

// Function Declaration
function greet(name) {
  return `Hello, my name is ${name}!`;
}

console.log(greet("Dana Raga"));

// Function Expression
const greet1 = function(name1) {
  return `Hello, my name is ${name1}`;
}

console.log(greet1("Dana"));

// Arrow Function

const greet2 = (name2) => {
  return `Hello, my name is ${name2}`;
}

console.log(greet2("Raga"));
/* If there is only one parameter and one statement,
the brackets and {} can be omitted: */

const greet3 = name3 => `Hai, my name is ${name3}`;
console.log(greet3("Danaraga"));

// Challange: Create a Function to Calculate the Area of ​​a Square
/* Create two versions of the calculateArea function to calculate the area of ​​a square, one with a function declaration and one with an arrow function */

// With Function Declaration
function calculateArea(side) {
  return side * side;
}
console.log(calculateArea(4));

// With Arrow Function
const calculateArea1 = side1 => side1 * side1;
console.log(calculateArea1(10));

