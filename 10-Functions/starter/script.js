'use strict';
// First-Class and Higher-Order Functions

// const books = [];
// const storeBook = function (num = 1, price = num * 199) {
//   //ES6 //ค่าเริ่มต้น
//   // ES5
//   // num = num || 1
//   // price = price || num * 199
//   books.push([num, price]);
//   console.log(books);
// };
// storeBook(3);
// storeBook(undefined, 6); //ไม่ไส่ค่าแรก

//Functions Accepting Callback Functions=============================
// const oneWord = function (str) {
//   return str.replaceAll(' ', ''.toLowerCase()); //ปรับให้ทุกตัวเป็นพิมเล็ก
// };
// const upperFirstWord = function (str) {
//   //first-class function
//   //ทำไห้คำแรกเป็นตัวใหญ่
//   const [first, ...others] = str.split(' ');
//   console.log([first, ...others]);
//   return [first.toUpperCase(), ...others].join(' ');
// };
// const transformer = function (str, fn) {
//   //hight-order function
//   console.log(`original string: ${str}`);
//   console.log(`Transformed: ${fn(str)}`);
//   console.log(`Transformed by: ${fn.name}`); //key function
// };

// transformer('JavaScript is the best!', upperFirstWord);
// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('✋');
// };

// document.body.addEventListener('click', high5); //เมื่อคลิก body จะทำให้เรียกใช้ฟังชั่น

// ['fluke', 'spy', 'kim'].forEach(high5); //เรียกใช้ตามจำนวน length

//Functions Returning Functions=============================
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greterHey = greet('Hey'); //greet('Hey') first หลังจากทำส่วนนี้เสร็จก็เรียกอีกฟังชั่นนึงมาให้ใส่ค่า
// greterHey('fluke'); //ส่วนที่ 2

// greet('Hey')('yonug lady'); //same

// console.log(greet('Hey')); //console.log(`${greeting} ${name}`); ตรง ${greeting} ตรงนี้จะได้รับค่ามาจากด้านบน

// const greterHey2 = greeting =>
//   function (name) {
//     console.log(`${greeting} ${name}`);
//   };

// const greterHey3 = greeting => name => {
//   //same
//   console.log(`${greeting} ${name}`);
// };

// greterHey2('Hey')('yonug lady');
// greterHey3('Hey')('yonug lady');

//The call and apply Methods=============================
// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   // book: function() {}
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
//   },
// };

// lufthansa.book(239, 'Jonas Schmedtmann');
// lufthansa.book(635, 'John Smith');

// const eurowings = {
//   airline: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
// };

// const book = lufthansa.book;

// // Does NOT work
// // book(23, 'Sarah Williams');

// // Call method
// book.call(eurowings, 23, 'Sarah Williams'); //ทำให้ฟังชั่น book ชี้ไปหาตัว obj eurowings  เพื่ออ้าง this ถึงได้
// console.log(eurowings);

// book.call(lufthansa, 239, 'Mary Cooper');
// console.log(lufthansa);

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 583, 'Mary Cooper');

// // Apply method เก่าแล้ว เหมือน call แต่ตัวรับค่าในฟังชั่นต้องเป็น array
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// const bookEW = book.bind(eurowings); //bind จะแก็นการบอกว่าให้ฟังชั้นนี้ชี้ this ไปหา obj นั้นๆ
// bookEW(23, 'Steven Williams');
// book.bind(eurowings)(27, 'Steven Williams'); //same

// const sw24 = book.bind(swiss, 24); //ตั้งค่าเริ่มต้นในพารามิเตอรํตัวแรก
// sw24('jo'); //ดังนั้นตอนกรอกเลยกรอกแค่พารามิเตอรํตัวที่สอง
// sw24('so');

// lufthansa.planes = 300;
// lufthansa.buyPlane = function () {
//   console.log(this);
//   this.planes++;
//   console.log(this.planes);
// };

// // document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane); //this ในที่นี้จะหมายถึง buy เพื่อเป็นช่ชื่อของตำแหน่งค่าสูงสุด hight-order function
// //และ this.plane เลยใช้ไม่ได้ output = NaN
// document
//   .querySelector('.buy')
//   .addEventListener('click', lufthansa.buyPlane.bind(lufthansa)); //จึงต้องใช้ bind เพื่อชี้ตำแหน่ง

// // Partial application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.1); //ต้องการข้ามค่าแรกใช้ null ตรงนั้น
// // addVAT = value => value + value * 0.23;

// console.log(addVAT(200));
// console.log(addVAT(23));

// const addTax2 = rate => value => console.log(value + value * rate);
// addTax2(0.1)(200);

// const test = addTax2.bind(null, 200);
// test(0.1);

//Coding Challenge #1==========================================================

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3:C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0), //fill แปลว่าเติม

//   registerNewAnswer: function () {
//     const input = prompt(`${this.question} \n${this.options.join('\n')}`);

//     this.answers[input] + 1 //เพื่อไม่ไห้เป็นค่า 0 ตอนเช็ค
//       ? this.answers[input]++
//       : console.log('Is not options');
//     this.displayResults();
//   },
//   displayResults: function (type = 'array') {
//     if (type.toLowerCase() === 'array') {
//       console.log(this.answers);
//     } else if (type.toLowerCase() === 'string') {
//       console.log(`Poll results are ${this.answers.join(',')}`);
//     } //ต้องมี []
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// const Data1 = [5, 2, 3];
// const Data2 = [1, 5, 3, 9, 6, 1];

// poll.displayResults.call({ answers: Data2 }, 'string'); //เป็นการให้ this อ้างอิงถึงตรงนี้เลย

//Coding Challenge #1==========================================================
// const runOnce = function () {
//   console.log('This will never run again');
// };
// runOnce();

// // IIFE
// (function () {
//   //เป็นบล็อกภายใน ที่จะถูก รันทันที แต่จะไม่สามารถถูกใช้ได้อีก และทึกค่าในนั้นเป็น Private
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// // console.log(isPrivate);

// (() => console.log('This will ALSO never run again'))();

// {
//   //Private
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// // console.log(isPrivate);เรียกใช้ไม่ได้
// console.log(notPrivate);
//////////////////////////////////////
// Closures
// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// const booker = secureBooking(); //สามารถเก็บตัวแปรในฟังชั่นนั้นได้ อย่าเข้าใจผิดว่าเป็นการเอามาจากด้านบน มันหายไปจาก call strak แล้วหลังจากจบแตามันส่งค่าตัวแปรนี้ไปไห้ book

// booker(); //1
// booker(); //2
// booker(); //3

// console.dir(booker);

///////////////////////////////////////
// More Closure Examples
// Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2); //เป็นการเปลี่ยนตัวแปรที่เกมใน closuer
//   };
// };

// g();
// f();
// console.dir(f); //เช็ค closuer มี a

// // Re-assigning f function
// h();
// f();
// console.dir(f); //เช็ค closuer a หายกลายเป็น b

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     //setTimeout (สิ่งที่จะทำงาน,เวลา)
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait); //จะจับเวลา และ ไปทำอันถัดไปทันทีไม่ต้องรอให้ตัวนี้แสดงก่อน

//   console.log(`Will start boarding in ${wait} seconds`); //มาก่อนตัวบน
// };

// const perGroup = 1000;
// boardPassengers(180, 3);

//Coding Challenge #2=========================================
(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  const g = document.body.addEventListener('click', function () {
    header.style.color = 'blue';
    console.dir(g);
  });
})();
