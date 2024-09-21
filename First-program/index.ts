// how to run typescript program ----compal
//tsc index.ts --> index.js --> node index.js
// tsc index.ts --watch ---->running all time

// with typescript
let userName: string;
userName = "Md Nayeem";
console.log(userName);

let num: number = 356;
console.log(num);

// without typescript
let HerName = "abdul hamid";
console.log(HerName );



// function different of typescript and javascript

// function javaScript
function addNumber(num3, num4) {
  console.log(num3 + num4);
}
addNumber(12, "34"); // output 1234

// function typescript
function addNumberTs(num1: number, num2: number) {
  const total = num1 + num2;
  return total;
}
const sum = addNumberTs(123, 45);
console.log("sum of numbers is ", sum);
