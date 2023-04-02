console.log("spread Operator");
const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 5, 6];
console.log(newNumbers);

console.log("Rest Operator");

const filter = (...args) => {
  return args.filter((el) => el === 1);
};

console.log("filter 1 from args : ", filter(2, 3, 4, 1, 5, 3));
