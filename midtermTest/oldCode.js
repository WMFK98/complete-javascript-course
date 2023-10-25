// //1. create object with object literals
// const st1 = {
//   studentId: 651000101,
//   firstname: 'Somchai',
//   lastname: 'Sookjai',
//   studentId: 1,
// };

// console.log(typeof st1);
// console.log(st1);
// const st2 = {}; //empty object {} === const st2=new Object()
// console.log(Object.prototype.isPrototypeOf(st2));
// console.log(typeof st2);

// console.log(Object.keys(st1)); //array of property key
// console.log(Object.values(st1)); //array of property value

// const st3 = { firstname: 'Suda', lastname: 'Jaidee', studentId: 651000102 };
// console.log(st3);

// //composite object : address object is nested in st4 object
// const st4 = {
//   firstname: 'Pornchai',
//   lastname: 'Jaidee',
//   studentId: 651000103,
//   address: { province: 'Bangkok', country: 'Thailand' },
//   getFullname: function () {
//     return `${this.firstname} ${this.lastname}`;
//   },
// };
// //get property 1) objectname.propertykey 2) objectname["propertykey"]
// console.log(st4.firstname);
// console.log(st4['lastname']); //dynamic key
// //dynamic property: add a new one, update or delete existing property
// st4.email = 'pornchai.jai@kmutt.ac.th'; //add a new property
// st4.firstname = 'Pornsak'; //edit property value
// delete st4.email; //delete a property
// st4.getAddress = function () {
//   //add a new property that stores function
//   return this.address;
// };
// console.log(st4);
// console.log(Object.prototype.isPrototypeOf(st4));
// console.log(Date.prototype.isPrototypeOf(st4));
// console.log(st4.getFullname()); //Pornchai Jaidee
// //property value can store function
// const st5 = {
//   firstname: 'Porntip',
//   lastname: 'Dee',
//   studentId: 651000105,
//   getFullname: function () {
//     return `${this.firstname} ${this.lastname}`;
//   },
// };
// console.log(st5.getFullname()); //Porntip Dee

// //constructor function
// function Person(id, fn, ln) {
//   this.id = id;
//   this.firstname = fn;
//   this.lastname = ln;
// }
// //2. create object by using constructor function
// const p1 = new Person(1001, 'Adam', 'Jo');
// const p2 = new Person(1002, 'Henry', 'Moore');
// const p3 = new Person(1003, 'Mia', 'Anderson');
// console.log(p1);
// console.log(p2);
// console.log(p3);
// p1.email = 'adam@gamil.com';
// //Object prototype<-Person prototype<-p1
// console.log(Object.prototype.isPrototypeOf(p1));
// console.log(Person.prototype.isPrototypeOf(p1));

// // 3. create object by using Class
// //javascript is a prototype based, not class based
// //Syntactic sugar
// class Circle {
//   constructor(r) {
//     this.radius = r;
//   }
//   //shared method among circle objects
//   area() {
//     return Math.PI * Math.pow(this.radius, 2);
//   }
//   getRadius() {
//     return this.radius;
//   }
// }
// const c1 = new Circle(2);
// const c2 = new Circle(3);
// const c3 = new Circle(4);
// console.log(c1.area());
// console.log(c2.area());
// console.log(c3.area());
// console.log(c1.getRadius());
// console.log(c2.getRadius());
// console.log(c3.getRadius());
// // Object prototype<-Circle prototype<-c1
// console.log(Object.prototype.isPrototypeOf(c1));
// console.log(Circle.prototype.isPrototypeOf(c1));

// //4. create object with Object.create() function
// // const p1 = new Person(1001, 'Adam', 'Jo')
// const pp1 = Object.create(p1);
// console.log(pp1);
// console.log(pp1.id);
// console.log(pp1.firstname);
// console.log(pp1.lastname);
// console.log(Object.prototype.isPrototypeOf(pp1)); //true
// console.log(Person.prototype.isPrototypeOf(pp1)); //true
// pp1.hobbies = ['reading', 'shopping'];
// console.log(Object.keys(pp1));
// console.log(Object.values(pp1));
// console.log(Object.entries(pp1));

// // === or == compare reference address between two objects
// const stA = {
//   studentId: 651000101,
//   firstname: 'Somchai',
//   lastname: 'Sookjai',
//   studentId: 1,
// };
// const stC = { firstname: 'Suda', lastname: 'Jaidee', studentId: 651000102 };
// const stD = { firstname: 'Suda', lastname: 'Jaidee', studentId: 651000102 };
// const stB = stA;
// console.log(stA === stC); //false
// console.log(stA === stB); //true
// console.log(stC === stD); //false
// //create compare function to compare two students
// function compareStudent(stA, stB) {
//   return stA.studentId === stB.studentId;
// }
// console.log(compareStudent(stA, stB)); //true
// console.log(compareStudent(stC, stD)); //true
// console.log(compareStudent(stA, stC)); //false

// const obj1 = {};
// const obj2 = { id: 1 };

// console.log(JSON.stringify(obj1)); //return string
// console.log(JSON.stringify(obj2)); //return string

// // //compare whether object is empty or not by using JSON.stringify
// // if (JSON.stringify(obj1) === '{}') console.log('object is an empty')
// // else console.log('object is not empty')

// // if (JSON.stringify(obj2) === '{}') console.log('object is an empty')
// // else console.log('object is not empty')

// function isEmpty(obj) {
//   return JSON.stringify(obj) === '{}';
// }
// console.log(isEmpty(obj1));
// console.log(isEmpty(obj2));
