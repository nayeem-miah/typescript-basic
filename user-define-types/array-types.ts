// benefit using typescript
// dealer array type of String then you can array value not a numbers

// let userNames: string[];
let userNames: Array<string>; //== let userNames: string[];
userNames = ["habib", "abib", "mabim"];
console.log(userNames);

// array multiple types

let multipleArray: (string | number)[];
multipleArray = ["345", "4543", 324];
console.log(multipleArray);

// shift(remove first item) , unShift(add first item),push(added last item), pop(remove last item),sort(sorting)

let array: (number | string)[];
array = [2345, 12, 34, 4354];
console.log(array);
array.push(234);
console.log(array);
array.pop();
console.log(array);
array.unshift(234);
console.log(array);
array.shift();
console.log(array);

let newArray: string[];
newArray = ["Nayeem", "hablu", "abAhad", "pronay", "zihad"];
console.log(newArray);
newArray.sort();
console.log(newArray);
