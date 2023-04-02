/*
The rest and spread operators are two features introduced in ECMAScript 6 (ES6) that allow for more flexible
 and concise JavaScript code.

Rest operator
The rest operator (...) is used to represent an indefinite number of arguments as an array. It can be used in function
 parameters to capture all arguments passed to the function. Here's an example:
*/

console.log("Rest Operator");

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log("filter 1 from args : ", filter(2, 3, 4, 1, 5, 3));

/*
Spread operator
The spread operator (...) is used to expand an array into individual elements. It can be used in function calls,
array literals, and object literals. Here are some examples:

 */
// Function calls

const greet = (firstName, lastName) => {
  console.log(`Hello, ${firstName} ${lastName}`);
};
const name = ["Abdullah", "Ghani"];
greet(...name);

// Array literals
console.log("spread Operator");
const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);

// Object literals
const obj1 = { x: 1, y: 2 };
const obj2 = { ...obj1, z: 3 };

console.log(obj2); // Output: { x: 1, y: 2, z: 3 }

/*
In this example, the spread operator ...obj1 is used to copy the properties of obj1 into a new object obj2. T
he z property is then added to obj2 using the object literal notation.

In summary, the rest and spread operators are powerful features of ES6 that allow for more flexible and
concise JavaScript code. The rest operator can be used to capture an indefinite number of arguments as an array,
while the spread operator can be used to expand an array into individual elements or to copy properties of
an object into a new object.
*/
