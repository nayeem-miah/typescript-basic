class Users {
  // properties , method, constructor

  userName: string;
  age: number;
  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }
  display(): void {
    console.log(`userName : ${this.userName}, age : ${this.age}`);
  }
}
// class object
let users1 = new Users("nayeem", 23);
let users2 = new Users("kabila", 24);
// users1.display();
// users2.display()

// another example
class Students {
  studentName: string;
  roll: number;
  department: string;

  constructor(studentName: string, roll: number, department: string) {
    this.department = department;
    this.studentName = studentName;
    this.roll = roll;
  }

  showData() {
    console.log(`Student Name is: ${this.studentName}.
    Student Roll Number is : ${this.roll}.
    student department is : ${this.department}`);
  }
}
// student object dealer
let st1 = new Students("Abdul Ahad", 676710, "food technology");
let st2 = new Students("Rakib", 676965, "CST");
st1.showData()
st2.showData()
console.log(st1.studentName);
