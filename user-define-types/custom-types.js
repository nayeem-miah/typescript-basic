var persons;
persons = [];
var p;
p = {
    name: "p",
    id: 1,
};
persons.push(p);
// console.log(persons);
var q;
q = {
    name: "q",
    id: 2,
};
persons.push(q);
// console.log(persons);
var r;
r = {
    name: "r",
    id: 3,
};
persons.push(r);
var users = [];
var user1;
user1 = {
    userName: "Nayeem",
    userId: 123,
};
users.push(user1);
// console.log(users);
var user2;
user2 = {
    userName: "Mohin ali",
    userId: 124,
};
users.push(user2);
var getRequest;
getRequest = "GET";
// function
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("POST");
