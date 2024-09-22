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
var person;
person = {
    name: "Nayeem",
    roll: 2143,
    profession: "student",
};
// console.log(person);
// array of object
var student;
student = [
    { name: "abdul basir", age: 34 },
    {
        name: "abdul hasim",
        age: 43,
    },
];
// console.log(student[0]);
var users;
users = [];
// let user1: { name: string; id?: number }; //optional chining --?
var user1;
user1 = {
    name: "md kamal hossain",
    id: 123,
};
users.push(user1);
var user2;
user2 = {
    name: "md Akash",
    id: 124,
};
users.push(user2);
// console.log(users);
// looping
for (var user in users) {
    console.log(users[user]);
}
