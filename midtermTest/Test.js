// // console.log('kuy9');
// // console.log(1 + false);
// // console.log(undefined + null);
// // console.log(5);

// const person = {
//   name: 'John',
//   age: 30,
// };
// const person2 = {
//   name: 'John',
//   kuy: 30,
// };

// // const j = person.valueOf(person2);

// // const jam = new Person('jam', 99);
// // console.log('V');
// // console.log(john);
// // console.log(jam);

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   console.log(this);
// }
// const john = new Person('John', 30);

// const Human = {
//   greet: function () {
//     console.log('Hello!');
//   },
// };

// const john2 = Object.create(Human);

// class Person3 {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// const lang = new Person3('lang', 9);
// console.log(lang);

// class Student {
//   constructor(name, attendance, testScore) {
//     this.name = name;
//     this.attendance = attendance;
//     this.testScore = testScore;
//   }
// }
// const s1 = new Student();

// const studnet = {
//   name: 'a',
//   attendance: [true, false, true, true, true],
//   testScore: [90, 90, 90, 90, 90],
// };

// console.log(Student);

// function createPerson(name, age) {
//   return {
//     name,
//     age: age,
//   };
// }
// const john = createPerson('John', 30);

// console.log(john.brith);
// john.brith = null;
// console.log(john);

// const studnet = {
//   name: 'fluke',
//   1990: 'register',
//   testScore: [90, 90, 90, 90, 90],
// };
// console.log(studnet['name']);

// const obj = {
//   age: null,
//   name: null,
//   foo() {
//     return 'bar';
//   },
// };
// const obj2 = {
//   age: null,
//   name: null,
//   foo() {
//     return 'bar';
//   },
// };

// const onlykey = Object.keys(obj);
// const onlykey2 = Object.keys(obj2);

// console.log(onlykey.length === onlykey2.length);

// function shallowEquality(object1, object2) {
//   const keys1 = Object.keys(object1);
//   const keys2 = Object.keys(object2);
//   console.log(keys1, keys2);

//   if (keys1.length !== keys2.length) {
//     return false;
//   }

//   for (let key of keys1) {
//     if (object1[key] !== object2[key]) {
//       return false;
//     }
//   }

//   return true;
// }

// const city1 = { address: 'th', name: 'Tokyo' };
// const city2 = { name: 'Tokyo', address: 'th' };
// // shallowEquality(city1, city2);

// const person = {
//   name: 'Blue',
// };
// const cityJson = JSON.stringify(city1);
// const city2Json = JSON.stringify(city2);

// console.log(cityJson);
// console.log(city2Json);

// console.log(cityJson === city2Json);

// const studnet = {
//   name: 'fluke',
//   1990: 'register',
//   testScore: [90, 90, 90, 90, 90],
// };

// const studentCopy = { ...studnet, age: 90 };
// console.log(studentCopy);
// console.log(studnet === studentCopy); //false

// const { name, ...kuy } = studnet;
// console.log(kuy);
// const { name: name2, testScore: testScore2 } = studentCopy;

// studnet.name = 'nong';

// console.log(studnet.name);
// console.log(name);

// console.log(studentCopy);
// console.log('original V');
// console.log(studnet);
// console.log(studnet === studentCopy);

const school = {
  student: {
    name: { firstname: 'wichira', lastname: 'matrakampa' },
    testScore: [90, 90, 90, 90, 90],
  },
};

const {
  student: {
    name: { firstname },
  },
} = school;

console.log(firstname);

function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
}

let counter = createCounter();

counter.increment();
counter.getCount();

let counter2 = createCounter();
counter2.decrement();
console.log(counter2.getCount());
