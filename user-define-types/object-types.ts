// js code
// let person = {
//   name: "Nayeem",
//   roll: 2143,
//   profession: "student",
// };
// // console.log(person);
// // console.log(person.name);
// console.log(person["name"]);

// ts code
let person: object;
person = {
  name: "Nayeem",
  roll: 2143,
  profession: "student",
};
// console.log(person);

// array of object
let student: object[];
student = [
  { name: "abdul basir", age: 34 },
  {
    name: "abdul hasim",
    age: 43,
  },
];
// console.log(student[0]);

let allUsers: object[];

allUsers = [];
// let user1: { name: string; id?: number }; //optional chining --?
let user1: { name: string; id: number };
user1 = {
  name: "md kamal hossain",
  id: 123,
};
allUsers.push(user1);

let user2: { name: string; id: number };
user2 = {
  name: "md Akash",
  id: 124,
};
allUsers.push(user2);
// console.log(users);

// looping
for (let user in allUsers) {
  console.log(allUsers[user]);
}
