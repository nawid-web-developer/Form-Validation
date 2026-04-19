// window.name = "jawad";

// function stdName() {
//   window.std1 = "amir";

//   //   console.log(name);
// }

// alert(window.std1);
// // console.log(window.std1);
// stdName();

// let x = 10;
// x *= 2;

// console.log(x, "the value is: ", "");

// const arr1 = [1, 2, 3, 45, 5];

// for (let x in arr1) {
//   console.log(arr1[x]);
// }

// if (true) {
// } else {
// }

// function functionName(name) {
//   //   alert("hey, I am amir");

//   return name;
// }

// console.log(functionName("jawad"));

// new Function("num1", "num2", "return num1 + num2");

// emp = { id: 102, name: "Shyam Kumar", salary: 40000 };

// document.write(emp.id + " " + emp.name + " " + emp.salary);

// console.log(emp.id, emp.name, emp.salary);

// const name = new Object();

// name.id = 102;
// name.std1 = "amir";

// function objeName(id, name, salary) {
//   this.id = id;
//   this.name = name;
//   this.salary = salary;
// }
// let today = new Date();

// console.log(today.getSeconds());

// window.onload = function () {
//   getTime();
// };

// function getTime() {
//   let date = new Date();

//   let h = date.getHours();
//   let m = date.getMinutes();
//   let s = date.getSeconds();

//   m = checkTime(m);
//   s = checkTime(s);

//   console.log("Your Time zone is: ", h, ":", m, ":", s);

//   setTimeout(() => {
//     getTime();
//   }, 1000);
// }

// function checkTime(i) {
//   if (i < 10) {
//     i = "0" + i;
//   }
//   return i;
// }

// window.alert("Hi, I am Student in the 6th semester of Software engineering.");
// confirm("Do you want to do this?");

// prompt("Please enter your name:");

// setTimeout(() => {}, timeout);

// open();
// close();

// let b = window.history.go();

// console.log(b);

// let x = window.screen.pixelDepth;

// console.log(x);

// document.write("hello ");

// document.getElementById("h1");
//  Polymorphism
// class Animal {
//   speak() {
//     console.log("Animal is speaking");
//   }
// }
// class Dog extends Animal {
//   speak() {
//     console.log("Dog is barking");
//   }
// }
// const dog = new Dog();
// dog.speak();

// // Abstraction
// class BankAccount {
//   constructor(balance) {
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//   }

//   getBalance() {
//     return this.balance;
//   }
// }
// const account = new BankAccount(1000);
// account.deposit(500);
// console.log(account.getBalance());

// let heading = document.getElementById("h3").value;
// console.log(heading);

// class Employee {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }

//   details() {
//     console.log("This is your id: ", this.id, "This is your name: ", this.name);
//   }
// }

// let e1 = new Employee(100, "Ali");
// let e2 = new Employee(101, "Sakhi");

// e1.details();
// e2.details();

// let class1 = class {
//   constructor(id, name) {
//     this.id = id;
//     this.name = name;
//   }

//   details() {
//     console.log("This is your id: ", this.id, "This is your name: ", this.name);
//   }
// };

// function Employee(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// Employee.prototype.fullName = function () {
//   return this.firstName + this.lastName;
// };

// let e1 = new Employee("ali", "zafar");
// let e2 = new Employee("Qasem", "Bashir");

// console.log(e1.fullName());
// console.log(e2.fullName());

// parent class
// class companyName {
//   constructor() {
//     this.company = "NTech";
//   }
// }

// child class extends parent class
// class Employee extends companyName {
//   constructor(id, name) {
//     super();

//     this.id = id;
//     this.name = name;
//   }
// }
// let e1 = new Employee(1, "ali");

// console.log(e1.company);

// let p = document.getElementsByTagName("p");
// p = "this some another text";

// console.log(p);
