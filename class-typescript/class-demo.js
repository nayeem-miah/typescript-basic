var Users = /** @class */ (function () {
    function Users(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    Users.prototype.display = function () {
        console.log("userName : ".concat(this.userName, ", age : ").concat(this.age));
    };
    return Users;
}());
// class object
var users1 = new Users("nayeem", 23);
var users2 = new Users("kabila", 24);
// users1.display();
// users2.display()
// another example
var Students = /** @class */ (function () {
    function Students(studentName, roll, department) {
        this.department = department;
        this.studentName = studentName;
        this.roll = roll;
    }
    Students.prototype.showData = function () {
        console.log("Student Name is: ".concat(this.studentName, ".\n    Student Roll Number is : ").concat(this.roll, ".\n    student department is : ").concat(this.department));
    };
    return Students;
}());
// student object dealer
var st1 = new Students("Abdul Ahad", 676710, "food technology");
var st2 = new Students("Rakib", 676965, "CST");
st1.showData();
st2.showData();
console.log(st1.studentName);
