let userId: string | number; // union symbol --->|
userId = 234; //no error
userId = "356"; //no error
// userId = true; // error

// using function
function displayUserInfo(userId: number | string | boolean) {
  console.log(userId);
}
displayUserInfo(123); //no error
displayUserInfo("this is string"); //no error
displayUserInfo(true); //no error


let newArrays: string[];
newArrays = ["Nayeem", "hablu", "abAhad", "pronay", "zihad"];
console.log(newArrays);
newArrays.push("34");
console.log(newArrays);