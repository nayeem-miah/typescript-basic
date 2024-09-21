let userId: string | number | boolean; // union symbol --->|
userId = 234;
userId = "356";
userId = true;

// using function
function displayUserInfo(userId:number| string|boolean) {
  console.log(userId);
}
displayUserInfo(123);
displayUserInfo("this is string");
displayUserInfo(true);
