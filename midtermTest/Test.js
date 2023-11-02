// // // console.log('kuy9');
// // // console.log(1 + false);
// // // console.log(undefined + null);
// // // console.log(5);

// // const person = {
// //   name: 'John',
// //   age: 30,
// // };
// // const person2 = {
// //   name: 'John',
// //   kuy: 30,
// // };

// // // const j = person.valueOf(person2);

// // // const jam = new Person('jam', 99);
// // // console.log('V');
// // // console.log(john);
// // // console.log(jam);

// // function Person(name, age) {
// //   this.name = name;
// //   this.age = age;
// //   console.log(this);
// // }
// // const john = new Person('John', 30);

// // const Human = {
// //   greet: function () {
// //     console.log('Hello!');
// //   },
// // };

// // const john2 = Object.create(Human);

// // class Person3 {
// //   constructor(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }
// // }

// // const lang = new Person3('lang', 9);
// // console.log(lang);

// // class Student {
// //   constructor(name, attendance, testScore) {
// //     this.name = name;
// //     this.attendance = attendance;
// //     this.testScore = testScore;
// //   }
// // }
// // const s1 = new Student();

// // const studnet = {
// //   name: 'a',
// //   attendance: [true, false, true, true, true],
// //   testScore: [90, 90, 90, 90, 90],
// // };

// // console.log(Student);

// // function createPerson(name, age) {
// //   return {
// //     name,
// //     age: age,
// //   };
// // }
// // const john = createPerson('John', 30);

// // console.log(john.brith);
// // john.brith = null;
// // console.log(john);

// // const studnet = {
// //   name: 'fluke',
// //   1990: 'register',
// //   testScore: [90, 90, 90, 90, 90],
// // };
// // console.log(studnet['name']);

// // const obj = {
// //   age: null,
// //   name: null,
// //   foo() {
// //     return 'bar';
// //   },
// // };
// // const obj2 = {
// //   age: null,
// //   name: null,
// //   foo() {
// //     return 'bar';
// //   },
// // };

// // const onlykey = Object.keys(obj);
// // const onlykey2 = Object.keys(obj2);

// // console.log(onlykey.length === onlykey2.length);

// // function shallowEquality(object1, object2) {
// //   const keys1 = Object.keys(object1);
// //   const keys2 = Object.keys(object2);
// //   console.log(keys1, keys2);

// //   if (keys1.length !== keys2.length) {
// //     return false;
// //   }

// //   for (let key of keys1) {
// //     if (object1[key] !== object2[key]) {
// //       return false;
// //     }
// //   }

// //   return true;
// // }

// // const city1 = { address: 'th', name: 'Tokyo' };
// // const city2 = { name: 'Tokyo', address: 'th' };
// // // shallowEquality(city1, city2);

// // const person = {
// //   name: 'Blue',
// // };
// // const cityJson = JSON.stringify(city1);
// // const city2Json = JSON.stringify(city2);

// // console.log(cityJson);
// // console.log(city2Json);

// // console.log(cityJson === city2Json);

// // const studnet = {
// //   name: 'fluke',
// //   1990: 'register',
// //   testScore: [90, 90, 90, 90, 90],
// // };

// // const studentCopy = { ...studnet, age: 90 };
// // console.log(studentCopy);
// // console.log(studnet === studentCopy); //false

// // const { name, ...kuy } = studnet;
// // console.log(kuy);
// // const { name: name2, testScore: testScore2 } = studentCopy;

// // studnet.name = 'nong';

// // console.log(studnet.name);
// // console.log(name);

// // console.log(studentCopy);
// // console.log('original V');
// // console.log(studnet);
// // console.log(studnet === studentCopy);

// const school = {
//   student: {
//     name: { firstname: 'wichira', lastname: 'matrakampa' },
//     testScore: [90, 90, 90, 90, 90],
//   },
// };

// const {
//   student: {
//     name: { firstname },
//   },
// } = school;

// console.log(firstname);

// function createCounter() {
//   let count = 0;
//   return {
//     increment: function () {
//       count++;
//     },
//     decrement: function () {
//       count--;
//     },
//     getCount: function () {
//       return count;
//     },
//   };
// }

// let counter = createCounter();

// counter.increment();
// counter.getCount();

// let counter2 = createCounter();
// counter2.decrement();
// console.log(counter2.getCount());

// let numbers = [1, 2, 3, 4, 5];

// let squaredNumbers = numbers.map(function (num) {
//   return num * num;
// });
// console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]

// function sum(a, b) {
//   return a + b;
// }

// function useFunc(a, b, fn) {
//   return fn(a, b);
// }

// console.log(useFunc(5, 7, sum));
// console.log(sum);

// const arrowFunction = (x, y) => {
//   const z = 5;
//   x + 1;
//   return x + y;
// };
// console.log(add(5, 6));

// function add(a, b) {
//   return a + b;
// }
// console.log(x);
// const x = 5;
// console.log(addAno(5, 6));
// const addAno = function (a, b) {
//   return a + b;
// };

// function outerFunction() {
//   let outerVar = 10;

//   function sum(number) {
//     outerVar = outerVar + number;
//   }

//   function innerFunction() {
//     let innerVar = 5;
//     return outerVar + innerVar;
//   }
//   function getOuterVar() {
//     return outerVar;
//   }

//   return { innerFunction, sum, getOuterVar };
// }

// const useFunc = outerFunction();
// const useFunc2 = outerFunction();

// useFunc.sum(6);
// console.log(useFunc.getOuterVar());

// console.log(useFunc2.getOuterVar());

// let result = outerFunction();
// console.log(result); // Output: 15

// let array = [1, 2, 3, 4, 5];
// const noReturn = array.forEach((el) => {
//   array.push(el);
// });
// console.log(array);

// const power2 = array.map((el) => el * el);
// console.log(power2);
// console.log(array);

// const moreThan3 = array.filter((el) => el > 3);
// console.log(array);
// console.log(moreThan3);

// const findMoreThan3 = array.find((num) => num > 3);
// console.log(array);
// console.log(findMoreThan3);

// const findIndexdMoreThan3 = array.findIndex((num) => num > 3);
// console.log(array);
// console.log(findIndexdMoreThan3);

// const everyPositive = array.every((num) => num > 0);
// console.log(everyPositive);

// const someNagative = array.some((num) => num < 0);
// console.log(someNagative);
// let array = [1, 2, 3, 4, 5];
// let arrayString = ['a', 'b', 'c', 'd', 'e'];

// const sum = array.reduce((total, num) => total + num);
// const sumString = arrayString.reduce((total, char) => total + char);
// // const sumProperty = arrayString.reduce((total, char) => total[char], {});
// console.log(sum);
// console.log(sumString);

// console.log(sumProperty);

let array = [6, 8, 9, 10, -5, 7, 5];
array.sort((a, b) => b - a);
console.log(array);

// let fruits = [
//   'banana',
//   'Apple',
//   'ant',
//   'Ant',
//   'Bambu',
//   'cherry',
//   'apple',
//   'date',
// ];
// const sort = fruits.sort((a, b) =>
//   b.toLowerCase().localeCompare(a.toLowerCase())
// );

// console.log(sort); // Output: ['apple', 'banana', 'cherry', 'date']

// const fullname = function (objs = data) {
//   return objs.sort((a, b) =>
//     a.fullname.toLowerCase().localeCompare(b.fullname.toLowerCase())
//   );
// };

// console.log(fullname(data));

// let fruits = ['apple', 'banana', 'cherry', 'date'];
// let removedItems = fruits.splice(0, fruits.length, 5, 6, 6, 7);

// console.log(removedItems); // Output: ['banana', 'cherry']
// console.log(fruits); // Output: ['apple', 'date']
// console.log();
