'use strict';
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   this.calAge = function () {
  //     // ไม่ดีพอจะเป็นการใช้ทรัพยากรที่มากเนื่องจากลูกค้างที่สร้างต้องมาสร้างฟังก์ชั่นใหม่แบบนี้ตลอด
  //     console.log(2022 - this.birthYear);
  //   };
};

const fluke = new Person('wichira', 2004);
console.log(fluke);
const jay = 9;
console.log(fluke instanceof Person); //เช็คว่ามาจากแปรนหรือเปล่า
console.log(jay instanceof Person);

Person.prototype.calAge = function () {
  console.log(2022 - this.birthYear); // นี่คือการสร้างมาแค่ตัวเดียวและให้ตัวลูกลูกสืบทอดรูปแบบการคำนวนนี้ไปโดยจะเป็นการประหยัดทรัพยากรมากกว่า
};

fluke.calAge(); //
console.log(Person.prototype); // ชี้ไปหาออนสตรัคเจอร์
console.log(fluke.__proto__);

console.log(Person.prototype === fluke.__proto__); // สองตัวนี้ไม่ควรเท่ากันเนื่องจากด้านซ้ายเป็นการอ้างถึงตัวแม่แต่ด้านขวาจะเป็นการพูดถึงตัวลูกว่าเอามาจากตัวไหน
Person.prototype.isPrototypeOf(fluke); // เป็นการบอกว่าตัว person เป็นต้นแบบให้กับตัว fluke

Person.prototype.spicies = 'Homo Sapiene'; // ได้รับการสืบทอดมาและใส่ในตัวลูกทุกตัว // สิ่งนี้จะมาได้อยู่ในตัววัตถุจริงๆเพราะเนื่องจากมีการสืบทอดมาจาก prototype
console.log(fluke.spicies);
console.log(fluke.hasOwnProperty('firstName')); // ดูว่าสิ่งนี้ใช่คุณสมบัติของตัววัตถุโดยตรงหรือไม่ true
console.log(fluke.hasOwnProperty('spicies')); // false
