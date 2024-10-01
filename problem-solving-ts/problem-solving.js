//1. dealer a function
function dealerFun(name, age) {
    console.log("name is ".concat(name, ".\n  age is ").concat(age));
}
// dealerFun("abdullah", 12);
//2.  sum of two numbers
var num1 = 123;
var num2 = 12;
// console.log(`sum of two numbers is = ${num1 + num2}`);
// using function sum of two numbers
function addTwoNumbers(num1, num2) {
    console.log("sum of two numbers is = ".concat(num1 + num2));
    console.log("sub  of two numbers is = ".concat(num1 - num2));
    console.log("multiply  of two numbers is = ".concat(num1 * num2));
}
// addTwoNumbers(12, 10);
// addTwoNumbers(10, 10);
// addTwoNumbers(120, 10);
//  arrow function
var towNumberOFSum = function (a, b) {
    var sum = a + b;
    return sum;
};
var total = towNumberOFSum(12, 34);
// console.log(`total numbers of :`, total);
// even or odd number
var x = 11;
if (x % 2 == 0) {
    //   console.log(x, "is event number");
}
else {
    //   console.log(`x is odd number`);
}
// ternary operator
// x % 2 == 0 ? console.log(x, "is event number") : console.log(`x is odd number`);
// using function even or odd number check
function checkNumber(x) {
    x % 2 == 0
        ? console.log(x, "is event number")
        : console.log("x is odd number");
}
checkNumber(12);
checkNumber(13);
// looping in array
var arrayName;
arrayName = [234, 34, 45, 56];
var numberOFSum = 0;
for (var i = 0; i < arrayName.length; i++) {
    var element = arrayName[i];
    //   console.log(element);
    numberOFSum = numberOFSum + element;
}
// console.log("total numbers of an array =", numberOFSum);
// for in an array
var mans = ["habki", "asdf ", "erw"];
for (var man in mans) {
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
var students = [];
var student1;
student1 = {
    name: "MD Nayeem",
    id: 12,
};
var student2;
student2 = {
    name: "MD bali",
    id: 13,
};
var student3;
student3 = {
    name: "MD ali",
    id: 14,
};
students.push(student1, student2, student3);
console.log(students);
for (var student in students) {
    console.log(students[student]);
}
// two  numbers of biggest number (if else condition) normal
var a = 10;
var b = 12;
if (a > b) {
    console.log("a is biggest number");
}
else {
    console.log("b is biggest numbers");
}
//  using function biggest numbers
function biggestNumber(x, y) {
    if (x > y) {
        // console.log("x is biggest number:", x);
        return x;
    }
    else {
        // console.log("y is biggest numbers:", y);
        return y;
    }
}
console.log(biggestNumber(12, 34));
var big = biggestNumber(43, 21);
console.log("Biggest numbers is : ", big);
// loopin even number 
var loopinEvenNumber = function (i, su) {
    if (su === void 0) { su = 0; }
    for (var j = 0; j < i; j++) {
        if (j % 2 == 0) {
            su = j + su;
        }
    }
    console.log("total numbers sum of :", su);
};
loopinEvenNumber(20);
