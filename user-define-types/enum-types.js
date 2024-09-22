// Enum stored constants : duplicate value is not here
// enum types ---> numeric, string , heterogenous
// numeric enum
var RequestType;
(function (RequestType) {
    RequestType[RequestType["readDate"] = 1] = "readDate";
    RequestType[RequestType["saveDate"] = 9] = "saveDate";
    RequestType[RequestType["deleteData"] = 10] = "deleteData";
})(RequestType || (RequestType = {}));
// console.log(RequestType);
// console.log(RequestType["deleteData"]);
// string enum
var RequestType2;
(function (RequestType2) {
    RequestType2["readDate"] = "READ_DATA";
    RequestType2["deleteData"] = "DELETE_DATA";
})(RequestType2 || (RequestType2 = {}));
// console.log(RequestType2);
// console.log(RequestType2.deleteData);
// heterogenous enum
var RequestType3;
(function (RequestType3) {
    RequestType3["readDate"] = "this is read data";
    RequestType3["deleteData"] = "this is delete data ";
    RequestType3[RequestType3["id"] = 234] = "id";
})(RequestType3 || (RequestType3 = {}));
console.log(RequestType3);
console.log(RequestType3.deleteData);
console.log(RequestType3['id']);
