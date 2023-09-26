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
// flukeCl.fullName = 'wi';

PersonCl.hey; // เป็น static ซึ่งจะอยู่แค่ในตัวของ prototype เท่านั้นไม่สามารถเรียกใน ตรวจสืบทอดได้เป็นค่าคงที่

// class จะไม่เป็นแบบ hosted ที่เรียกใช้ได้ก่อน ก่อนคำสั่งที่ประกาศ

//create object

const PersonPoto = {
  calAge() {
    console.log(2023 - this.birthYear);
  },
  init(firstName, birthYear) {
    //ทำงานเหมือนคอนตั๊กเตอร์ เอาไว้ใช้กับ object
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};
const steve = Object.create(PersonPoto); // กอล์ฟสำเนาทุกอย่างเป็นค่าว่าง
// จะเป็นการทำงานคล้าย คล้ายคลึง กลับการสืบทอด class แต่จะ ไม่มีคอนสตรัคเตอร์
console.log(steve);
steve.name = 'steve';
steve.birthYear = 2004;
console.log(steve);

const sara = Object.create(PersonPoto);
sara.init('sara', 1004);
console.log(sara);
sara.calAge();
console.log(sara.prototype); //จากไม่มีคำสั่งนี้
console.log(sara.__proto__); //จากไม่มีคำสั่งนี้

//Coding Challenge #2
class CarClass {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
  }
  brake() {
    this.speed -= 5;
  }
  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new CarClass('Ford', 120);
console.log(ford.speedUS);
ford.speedUS = 150;
// ford.accelerate();
console.log(ford.speedUS);
console.log(ford);

//inheritance=====================

const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear); // ที่ต้องใช้ call เพราะว่า person ถูกมองเป็นฟังก์ชันซึ่ง this ในนั้นจะถูกมองเป็นตัวของ person ที่หาไม่เจอและจะ Error
  this.course = course;
};

Student.prototype = Object.create(Person.prototype); // ที่ต้องใส่ก่อนออกแบบนี้ถือเป็นการวางทับ โครงพี่ว่างของ student
// Student.prototype = Person.prototype; //แบบนี้ถือว่าผิดเพราะเป็นการบอกว่าให้ Student เหมือนกับ Person ทุกประการซึ่งจริงๆแล้วเราแค่ต้องการสืบทอดมาเฉยๆ

Student.prototype.interduce = function () {
  console.log(`My name is ${this.firstName} and study ${this.course}`);
};

const non = new Student('non', 2003, 'CS');
non.calAge();

Student.prototype.constructor = Student; // ไว้แก้ไขอันข้างล่าง
console.dir(Student.prototype.constructor); // ถ้าเราไปตั้งค่าเหมือนจะ ชี้ไปหาตัว Person ถ้าเราใช้อ้างอิง constructor

console.log(non instanceof Person);
console.log(non instanceof Student);

//Coding Challenge #3

const Car = function (make, speed) {
  //constructor function
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
  console.log(this.charge);
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `Tesla going at ${this.speed} km/h,with a charge of ${this.charge}%`
  );
};
const tesla = new EV('Tesla', 120, 23);

tesla.accelerate();
tesla.brake();
tesla.chargeBattery(90);
tesla.accelerate();

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    super(fullName, birthYear); // ต้องกล่าวถึงตัวนี้ก่อนเสมอเมื่อมีการสืบทอด contructor
    this.course = course;
  }
  intorduce() {
    console.log(`My name is ${this.fullName} and study ${this.course}`);
  }
}

const martha = new StudentCl('martha wi', 2004, 'cs');

martha.intorduce();
martha.calAge();

const StudentProto = Object.create(PersonPoto); // การสร้าง consturctor ในรูปแบบของ obj
StudentProto.init = function (firstName, birthYear, course) {
  PersonPoto.init.call(this, firstName, birthYear);
  this.course = course;
};

const som = Object.create(StudentProto); // แบบนี้จะเป็นการสร้าง object ซึ่งใช้แม่ ของ student
som.init('som', 2005, 'CS');

som.intorduce = function () {
  console.log(`My name is ${this.fullName} and study ${this.course}`);
};
console.log(som);
som.intorduce();
som.calAge();

//Anathor class ==================

class Account {
  //instance // หมายถึงอยู่ในตัวของ object
  #movements = []; // สิ่งนี้จะเป็น private อย่างแท้จริง มีสถานะเป็น filde
  #pin;
  local = navigator.language;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // this._vemoments = []; // _ เป็นการบอกว่าสิ่งนี้ไม่ควรจะเกิดการเข้าถึงโดยตรง จากนอ class แต่ในความจริงมันไม่สามารถป้องกันการเข้าถึงได้จริง แค่เป็นที่รู้กันของโปรแกรมเมอร์ก็พอ

    console.log(`Thank for opening an Account, ${owner}`);
  }

  getMovements() {
    return this.#movements;
  }
  deposite(val) {
    this.#movements.push(val);
    return this;
  }
  withdraw(val) {
    this.deposite(-val);
    return this;
  }
  _approveLoan(val) {
    return true;
  }

  requestLone(val) {
    if (this._approveLoan) {
      this.deposite(val);
      console.log('loan approve');
    }
  }

  static help() {
    // สิ่งนี้จะใช้ได้แค่ใน class เท่านั้นไม่สามารถใช้กับ instance ตัวลูกลูกได้
    console.log('help');
  }
  // #approveLoan(val) { // ไม่ดีไม่ได้ถูกเก็บไว้ใน prototype แต่อยู่ใน instance เพราะส่วนใหญ่ยังมองว่าเป็นเหมือน filde
  //   return true;
  // }
}

const acc1 = new Account('fluke', 'THB', 1234);
console.log(acc1);
acc1.withdraw(300).deposite(200).withdraw(150).withdraw(500); // การ chaning  function ต้องมี return ทุกครั้ง ถึงทำได้
console.log(acc1.getMovements());

// const Car = function (make, speed) {
//   //constructor function
//   this.make = make;
//   this.speed = speed;
// };
// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(this.speed);
// };
// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(this.speed);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
//   console.log(this.charge);
// };
// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `Tesla going at ${this.speed} km/h,with a charge of ${this.charge}%`
//   );
// };

//
// Coding Challenge #4==============
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    return this;
  }
  bake() {
    this.speed -= 5;
    return this;
  }
  get speedUS() {
    return `${this.speed / 1.6} mi/h`;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }
  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `Tesla going at ${this.speed} km/h,with a charge of ${this.#charge}%`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
rivian.accelerate().bake().chargeBattery(90);
console.log(rivian.speedUS);
