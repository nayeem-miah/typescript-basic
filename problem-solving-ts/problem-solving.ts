//1. dealer a function
function dealerFun(name: string, age: number): void {
  console.log(`name is ${name}.
  age is ${age}`);
}
// dealerFun("abdullah", 12);

//2.  sum of two numbers
let num1: number = 123;
let num2: number = 12;
// console.log(`sum of two numbers is = ${num1 + num2}`);

// using function sum of two numbers
function addTwoNumbers(num1: number, num2: number): void {
  console.log(`sum of two numbers is = ${num1 + num2}`);
  console.log(`sub  of two numbers is = ${num1 - num2}`);
  console.log(`multiply  of two numbers is = ${num1 * num2}`);
}
// addTwoNumbers(12, 10);
// addTwoNumbers(10, 10);
// addTwoNumbers(120, 10);

//  arrow function
let towNumberOFSum = (a: number, b: number) => {
  let sum = a + b;
  return sum;
};
let total = towNumberOFSum(12, 34);
// console.log(`total numbers of :`, total);

// even or odd number
let x: number = 11;
if (x % 2 == 0) {
  //   console.log(x, "is event number");
} else {
  //   console.log(`x is odd number`);
}

// ternary operator
// x % 2 == 0 ? console.log(x, "is event number") : console.log(`x is odd number`);

// using function even or odd number check
function checkNumber(x: number) {
  x % 2 == 0
    ? console.log(x, "is event number")
    : console.log(`x is odd number`);
}
checkNumber(12);
checkNumber(13);

// looping in array
let arrayName: number[];
arrayName = [234, 34, 45, 56];
let numberOFSum: number = 0;
for (let i = 0; i < arrayName.length; i++) {
  const element = arrayName[i];
  //   console.log(element);
  numberOFSum = numberOFSum + element;
}
// console.log("total numbers of an array =", numberOFSum);

// for in an array
let mans: string[] = ["habki", "asdf ", "erw"];
for (const man in mans) {
  //   console.log(mans[man], man);
}

// object
// let students;
// students = {
//   name: "MD Nayeem",
//   id: 12,
// };
// console.log(students);

// object  (array , push)
let students: object[] = [];
let student1: { name: string; id: number };
student1 = {
  name: "MD Nayeem",
  id: 12,
};

let student2: { name: string; id: number };
student2 = {
  name: "MD bali",
  id: 13,
};
let student3: { name: string; id: number };
student3 = {
  name: "MD ali",
  id: 14,
};
students.push(student1, student2, student3);
console.log(students);

for (const student in students) {
  console.log(students[student]);
}
