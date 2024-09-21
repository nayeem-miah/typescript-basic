// how to run typescript program
//tsc index.ts --> index.js --> node index.js
// tsc index.ts --watch ---->running all time

let userName: string;
userName = "Md Nayeem";
console.log(userName);

let HerName = "abdul hamid";
console.log(HerName + userName);

let num: number = 356;
console.log(num);

// function different of typescript and javascript

// function javaScript
function addNumber(num1, num2) {
  console.log(num1 + num2);
}
addNumber(12, "34"); // output 1234

// function typescript
function addNumberTs(num1: number, num2: number) {
  const total = num1 + num2;
  return total;
}
const sum = addNumberTs(123, 45);
console.log("sum of numbers is ", sum);
