// how to run typescript program
//tsc index.ts --> index.js --> node index.js
// tsc index.ts --watch ---->running all time
var userName;
userName = "Md Nayeem";
console.log(userName);
var HerName = "abdul hamid";
console.log(HerName + userName);
var num = 356;
console.log(num);
// function different of typescript and javascript
// function javaScript
function addNumber(num1, num2) {
    console.log(num1 + num2);
}
addNumber(12, "34"); // output 1234
// function typescript
function addNumberTs(num1, num2) {
    var total = num1 + num2;
    return total;
}
var sum = addNumberTs(123, 45);
console.log("sum of numbers is ", sum);
