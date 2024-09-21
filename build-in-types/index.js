// build in types: number , string , boolean , null, undefined , void(no return)
// any type-----> super type
// var id = [2134, 345, 54356];
var id = 234;
var userID;
var firstName;
var lastName;
var isActive;
firstName = "Nayeem";
lastName = " Islam";
userID = 1232;
isActive = true;
// var fullName = firstName + " " + lastName;
var fullName = firstName.concat(lastName);
console.log("Name is : ".concat(fullName, ",\nyour userID : ").concat(userID, "\nyour Account is active : ").concat(isActive));
// split
console.log(fullName.split(" "));
console.log(fullName.split(","));
console.log(fullName.toLocaleUpperCase());
console.log(fullName.toLocaleLowerCase());
// console.log(id.toLocaleLowerCase()); //TypeError: id.toLocaleLowerCase is not a function
// void
function display() {
    console.log("hi i am display");
}
display();
