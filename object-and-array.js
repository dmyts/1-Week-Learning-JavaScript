// Learning about Object and Array in JavaScript

// Make Object
const person = {
  name: "Dana Raga",
  age: 16,
  isStudent: true,
  greet: function() {
    return `Hello, my name is ${this.name}`;
  }
}

console.log(person); // Output: Dana Raga
console.log(person.greet()); // Output: Hello, my name is Dana Raga

person.school = "Vocational High School";
person.age = 17;

// Array
let fruits = [
  "Apple",
  "Banana",
  "Grape"
];

console.log(fruits[0]); // Output: Apple
console.log(fruits.length); // Output: 3

// Adding Elements
fruits.push = "Orange";
fruits.unshift = "Pear";

// Deleting Element
fruits.pop();
fruits.shift();
