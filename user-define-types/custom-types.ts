let persons: object[];
persons = [];
type Person = { name: string; id: number };
let p: Person;
p = {
  name: "p",
  id: 1,
};

persons.push(p);
// console.log(persons);
let q: Person;
q = {
  name: "q",
  id: 2,
};
persons.push(q);
// console.log(persons);
let r: Person;
r = {
  name: "r",
  id: 3,
};
persons.push(r);
// console.log(persons);

// ---------------------------------

type User = { userName: string; userId: number };
let users: User[] = [];
let user1: User;
user1 = {
  userName: "Nayeem",
  userId: 123,
};
users.push(user1);
// console.log(users);
let user2: User;
user2 = {
  userName: "Mohin ali",
  userId: 124,
};
users.push(user2);
// console.log(users);

// -----------------
type RequestTypes = "GET" | "POST";
let getRequest: RequestType;
getRequest = "GET";

// function
function requestHandler(requestType: RequestTypes) {
  console.log(requestType);
}
requestHandler("POST")