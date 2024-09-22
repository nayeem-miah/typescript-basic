// Enum stored constants : duplicate value is not here
// enum types ---> numeric, string , heterogenous

// numeric enum
enum RequestType {
  readDate = 1,
  saveDate = 9,
  deleteData,
}

// console.log(RequestType);
// console.log(RequestType["deleteData"]);

// string enum
enum RequestType2 {
  readDate = "READ_DATA",
  deleteData = "DELETE_DATA",
}
// console.log(RequestType2);
// console.log(RequestType2.deleteData);

// heterogenous enum
enum RequestType3 {
  readDate = "this is read data",
  deleteData = "this is delete data ",
  id = 234,
}
console.log(RequestType3);
console.log(RequestType3.deleteData);
console.log(RequestType3['id']);