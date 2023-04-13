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

//from======================
Person.hey = function () {
  //ทำแบบนี้ตัวลูกจะไม่ได้รับการสืบทอด
  console.log('Hey');
};

Person.hey();
// fluke.hey; //หาไม่เจอ

////////////////////////////

console.log(Person.prototype === fluke.__proto__); // สองตัวนี้ไม่ควรเท่ากันเนื่องจากด้านซ้ายเป็นการอ้างถึงตัวแม่แต่ด้านขวาจะเป็นการพูดถึงตัวลูกว่าเอามาจากตัวไหน
Person.prototype.isPrototypeOf(fluke); // เป็นการบอกว่าตัว person เป็นต้นแบบให้กับตัว fluke

Person.prototype.spicies = 'Homo Sapiene'; // ได้รับการสืบทอดมาและใส่ในตัวลูกทุกตัว // สิ่งนี้จะมาได้อยู่ในตัววัตถุจริงๆเพราะเนื่องจากมีการสืบทอดมาจาก prototype
console.log(fluke.spicies);
console.log(fluke.hasOwnProperty('firstName')); // ดูว่าสิ่งนี้ใช่คุณสมบัติของตัววัตถุโดยตรงหรือไม่ true
console.log(fluke.hasOwnProperty('spicies')); // false

//class สามารถทำได้สองแบบ คล้ายกับ function

//class expasstion
const PersonClNotUse = class {};

//class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  // ไม่ต้องใช้ counst ในการสร้าง function ของ class
  calAge() {
    console.log(2023 - this.birthYear);
  }
  // เขียนแบบนี้จะทำให้ฟังชั่นไปอยู่ตรวจส่วนกลางเท่านั้น
  get age() {
    //สิ่งนี้จะถูกเก็บกันค่าไม่ใช่ฟังชั่น
    return 2037 - this.birthYear;
  }
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    // _ ที่ต้องพิมพ์แบบนี้เพราะตามข้อผิดพลาดของชื่อที่ซ้ำกันในคอนดักเตอร์
    else alert(`${name} is not fullname`);
  }

  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('hey there');
    console.log(this);
  }
}
const flukeCl = new PersonCl('Wichira Matrakampa', 2004);
console.log(flukeCl);
console.log(PersonCl.prototype); // จะเป็นการบอกถึง constructor
console.log(fluke.__proto__ === PersonCl.prototype);

PersonCl.prototype.hi = function () {
  console.log(`Hi ${this.firstName}`);
};
// อย่าลืมใส่ () ให้ตอนเรียกถึงฟังชั่น
flukeCl.hi();

const account = {
  owner: 'fluke',
  moments: [10, 200, 30],

  get latest() {
    return this.moments.slice(-1).pop();
  },
  set latest(mov) {
    return this.moments.push(mov);
  },
};

console.log(account);
console.log(account.latest); //มองว่าเป็นคุณสมบัติไม่ใช่ฟังก์ชัน
account.latest = 400; //setter ก็ทำได้เช่นกัน
console.log(account);

console.log(flukeCl);
console.log(flukeCl.age);
flukeCl.fullName = 'wi';

PersonCl.hey; // เป็น static ซึ่งจะอยู่แค่ในตัวของ prototype เท่านั้นไม่สามารถเรียกใน ตรวจสืบทอดได้เป็นค่าคงที่

// class จะไม่เป็นแบบ hosted ที่เรียกใช้ได้ก่อน ก่อนคำสั่งที่ประกาศ
