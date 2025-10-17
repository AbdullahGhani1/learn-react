/*
==== Destructuring =====
Easily extract array elements or object properties and store them in a variables
Destructuring is a feature introduced in ECMAScript 6 (ES6) that allows you to extract data from arrays
and objects into separate variables. It provides a concise syntax for extracting multiple values from an array or object and assigning them to variables.

Array Destructuring
Here's an example of array destructuring:
*/

const [firstName, lastName] = ["Abdullah", "Ghani", 29];

console.log(`Name:\t ${firstName} ${lastName}`);

// Object Destructuring
// Here's an example of object destructuring:
const { age } = { firstName: "Abdullah", lastName: "Ghani", age: 28 };
console.log(`age:\t ${age}`);
/*
In summary, destructuring is a powerful feature of ES6 that allows you to extract data from arrays and objects
into separate variables with a concise syntax. Array destructuring allows you to extract multiple values from
an array and assign them to variables, while object destructuring allows you to extract values from an object and assign them to variables with different names.
*/
