'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Wichira Matrakampa',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  //ตั้งsortเป็นแบบเปิดปิด

  containerMovements.innerHTML = ''; //ลบทุดอย่างใน container นั้น เหมือนเป็นการเขียนทับเช่น old x= 5 /new x='hi'
  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements; //slice() เพื่อกันไม่ให้soryทำการกลายพันธุ์movementsของเรา
  //ส่วนประวัติการเงิน
  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal'; //เช็ค ว่าฝากหรือถอน
    const html = `<div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}฿</div>
  </div>`;

    containerMovements.insertAdjacentHTML('afterbegin', html); //insertAdjacentHTML คำสั่งไว้ยัด string ลงไปใน html
    //afterbegin เพิ่มไว้่หลังcontannerตัวนั้น
  });
};

//Computing Usernames =======================================
const createUsername = function (accs) {
  //จัดการชื่่อด้วยตัวย่อ
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

const calcDisplayBalance = function (acc) {
  //ทำยอดรวม
  const balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${balance}฿`;
  acc.balance = balance;
};

const calDisplaySummary = function (acc) {
  //เนื่องจากดอกเบี้ยแต่ละคนไม่เหมือนกันเลยเรียกใช้เป็น obj เลย
  //เขียนยอดรวมรายรับรายจ่าย และดอกเบี้ย
  const income = acc.movements //รายรับ
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${income}฿`;
  const outcome = acc.movements //รายจ่าย
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(outcome)}฿`;
  const interest = acc.movements //ดอกเบี้ย
    .filter(mov => mov > 0)
    .map(mov => (mov * acc.interestRate) / 100)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest}฿`;
};
const updateUI = function (acc) {
  //รวม
  //ระบบโชว์ประวัติ
  displayMovements(acc.movements);
  //ระบบนับยอดรวม
  calcDisplayBalance(acc);
  //ระบบสรุปรายรับรายจ่ายดอกเบี้ย
  calDisplaySummary(acc);
};
createUsername(accounts);

//โอนเงิน
btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    currentAccount.balance > amount &&
    currentAccount?.username !== receiverAcc.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});
//login
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //เนื่องจากปุ่ม form เริ่มต้นเมื่อกดปุ่มจะโหลดห้าใหม่ให้
  e.preventDefault(); //จึงแก้ไขจุดนี้ด้วยคำสั้งนี้
  //เมื่อ enter ก็จะเป็นการ click ปุ่มส่งเหมื่อนกัน
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //ถ้าสมมุติถ้าหา username ไม่เจอค่านี้ก็จะไม่มีเลยต้องเติม ? เพื่อตรวจหากไม่มีจะเป็น undifind
    console.log('login');
    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`;
    updateUI(currentAccount);
    containerApp.style.opacity = 100;

    //เวลาส่งอยากให้ ฟิลมันทิ้งอันที่กรอกไว้
    inputLoginUsername.value = inputLoginPin.value = '';
    //และเอา focus ออก
    inputLoginPin.blur();
  }
});
//ลบบัชชี
btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('del');
  if (
    inputCloseUsername.value === currentAccount?.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => currentAccount.username === acc.username //เช็คทีกอัยถ้าอันไหนถูกก็บอกลำดับของตัวนั้น
    );
    accounts.splice(index, 1); //สั่งลบ
    //hide ui
    containerApp.style.opacity = 0;
    console.log(accounts);
  }
});

//loan
btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //กู้ได้สูงสุดของเงิน 10% ที่ฝาก
    currentAccount.movements.push(amount); //เพิ่มตัง
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});
let sorted = false; //ต้องมีตัวเก็บสถานะว่าตอนนั้นกำลังปิดหรือเปิดอยู่
btnSort.addEventListener('click', function (e) {
  e.preventDefault;
  sorted = !sorted; // ทำแบบนี้เพื่อที่เวลาเรียกใช้จะได้สลับได้ ทุกครั้งที่กด
  displayMovements(currentAccount.movements, sorted);
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// Simple Array Methods
// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE ไม่กลายเปลี่ยนตัวเดิม
// console.log(arr.slice(2)); //คัดเอา 2 ตัวแรก
// console.log(arr.slice(2, 4)); //คัดเอา 2-4 ตัว
// console.log(arr.slice(-2));
// console.log(arr.slice(-1)); //คัดเอา 1 ตัวนับจสกท้าย
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE เปลี่ยนตัวเดิม เลือกตัวที่ลบ
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE เปลี่ยนตัวเดิม
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT รวม ไม่เปลี่ยนตัวเดิม
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN ไม่เปลี่ยนตัวเดิม
// console.log(letters.join(' - '));

///////////////////////////////////////
// // The new at Method
// const arr = [23, 11, 64];
// console.log(arr[0]); //ถ้าเอาแป็นแบบกปกติอันนี้ก็ดี
// console.log(arr.at(0)); //ไว้เลือกตำแหน่ง ทำได้เยอะกว่า

// // getting last array element
// console.log(arr[arr.length - 1]); //old
// console.log(arr.slice(-1)[0]); //old
// console.log(arr.at(-1)); //new

// console.log('jonas'.at(0)); //striing ก็ได้
// console.log('jonas'.at(-1));

// // Looping Arrays: forEach
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('---- FOREACH ----'); //same ดู clen กว่า
// movements.forEach(function (mov, i, arr) {
//   //ต้องจำ (ค่าในรอบ arry นั้น, ลำดับในรอบนั้น, ...ค่าarryทั้งหมด )
//   //ใช้ break continew ไม่ได้
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`${arr} Movement ${i + 1}: You withdrew ${Math.abs(mov)}`); //Math.abs เอา ลบ ออก
//   }
// });
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...
///////////////////////////////////////
// forEach With Maps and Sets
// Map
// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   //เนื่องจาก set ไม่มีค่าที่ 2 ซึ้งเป็น key เลยทำให้ตำแหน่งนั้นกลายเป็น value
//   console.log(`${value}: ${value}`);
// });

///////////////////////////////////////
// Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
// about their dog's age, and stored the data into an array (one array for each). For
// now, they are just interested in knowing whether a dog is an adult or a puppy.
// A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
// old.
// Your tasks:
// Create a function 'checkDogs', which accepts 2 arrays of dog's ages
// ('dogsJulia' and 'dogsKate'), and does the following things:
// 1. Julia found out that the owners of the first and the last two dogs actually have
// cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
// ages from that copied array (because it's a bad practice to mutate function
// parameters)
// 2. Create an array with both Julia's (corrected) and Kate's data
// 3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
// is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
// �
// ")
// 4. Run the function for both test datasets
// Test data:
// § Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
// § Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
// Hints: Use tools from all lectures in this section so far �
// GOOD LUCK �
// Data Transformations: map, filter, reduce=========================================================
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];
// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia = [], dogsKate = []) {
//   const them = [dogsJulia, dogsKate];
//   const check = [];
//   them.forEach(function (dogs) {
//     check.push(dogs.slice(1, -2)); //เอาแมวออก
//   });
//   check.forEach(function (ower) {
//     ower.forEach(function (dogAge, i) {
//       console.log(
//         `Dog number ${i + 1} is ${
//           dogAge >= 3 ? 'an adult' : 'still a puppy'
//         }, and is ${dogAge} years old`
//       );
//     });
//   });
// };

// checkDogs(dogsJulia, dogsKate);
// The map Method =======================================
// const eurToUsd = 1.1;
// const movementsUSD = movements.map(function (mov) {
//   //เหมือนเอาค่าในแต่ละตัวไปคำนวน
//   return mov * eurToUsd; //สิ่งที่จะออกมาเป็น array ผลลัพของแต่ละตัว
// });

// console.log(movementsUSD);

// const movementsUSDv2 = movements.map(mov => mov * eurToUsd);
// console.log(movementsUSDv2);

// const movementDescriptions = movements.map(
//   //ทำแบบนีจะได้ชุดข้ามูลที่เป็น Array
//   (mov, i) =>
//     `${arr} Movement ${i + 1}: ${
//       mov > 0 ? 'deposited' : 'You withdrew'
//     } ${Math.abs(mov)}` //Math.abs เอา ลบ ออก
// );

// console.log(movementDescriptions);

//The filter Method =======================================
// const deposits = movements.filter(function (mov) {
//   //คือเช็คทุกค่าถ้าตรงแงื่อนำไขห็เอาไปเก็บใน Array ใหม่
//   return mov > 0;
// });
// console.log(deposits);

// const withdrawals = movements.filter(mov => mov < 0);
// console.log(withdrawals);

//The reduce Method ==========================
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   //ตัวนี้จะแตกต่างคือตัวแรกจะเป็นค่าสะสมโดยเรื่อมที่ 0
//   return acc + cur;
// }, 0); //0 คือตั้งต่าเรื่มต้นให้มัน
// console.log(balance); //จะได้ตัวมาตัวเดียวไม่ไช่ array
// const balance2 = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance2);
// //นอกจากนี้ยังหาค่าสูงสุดได้ด้วย
// const max = movements.reduce(
//   (acc, mov) => (acc > mov ? acc : mov),
//   movements[0]
// ); //ควรกำหนดเป็นค่าแรกของ arrays
// console.log(max);
//Coding Challenge #2 ==========================
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// const dogs1 = [5, 2, 4, 1, 15, 8, 3];
// const dogs2 = [16, 6, 10, 5, 6, 1, 4];
// const calcAverageHumanAge = function (dogsAge = []) {
//   const dogsAgeCul = dogsAge.map(age => (age > 2 ? age * 4 + 16 : age * 2));
//   const dogsAgeEx = dogsAgeCul.filter(age => age >= 18);
//   const dogsAgeRe = dogsAgeEx.reduce(
//     (acc, age, _, arr) => acc + age / arr.length, //กระจายหารได้
//     0
//   );
//   console.log('llll= ' + dogsAgeRe);
// };

// calcAverageHumanAge(dogs2);

//The Magic of Chaining Methods================
// const eurToUsd = 1.1;
// const total = movements
//   .filter(mov => mov < 0)
//   .map((movf, i, arr) => {
//     console.log(arr); //สามารถตรวจสอบ array ที่ตรวจอยู่ได้
//     return movf * eurToUsd;
//   })
//   .reduce((acc, movm) => acc + movm); //สามมารถทำต่อๆกันได้
// console.log(total);

// Coding Challenge #3 ================================================================
// Rewrite the 'calcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK �

// const calcAverageHumanAge2 = function (dogsAge) {
//   const result = dogsAge
//     .map(age => (age > 2 ? age * 4 + 16 : age * 2))
//     .filter(humanAge => humanAge >= 18)
//     .reduce((sum, age, i, arr) => sum + age / arr.length, 0);
//   console.log(result);
// };
// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge2([5, 2, 4, 1, 15, 8, 3]);
// Test ================================================================
// const text = 'kko'.split(''); //หาตัวเหมื่อน
// const find = text.reduce((acc, mov) => (mov === 'k' ? acc + 1 : acc), 0); //
// console.log(find);

// find Method================================================================
// const firistWithDrawal = movements.find(mov => mov < 0); //find คือตัวที่จะคนหาและถ้าตัวไหนตรงเงื่อนำใขก็จะประกาศค่านั้น
// console.log(movements);
// console.log(firistWithDrawal); //ใช้กับการหาคุณสมบัติได้
// const account = accounts.find(acc => acc.owner === 'Jessica Davis'); //ถ้าเจอที่รอบใหนจะเป็น ตัวนั้นของ accounts
// console.log(account);

// some and every ================================================
// console.log(movements.some(mov => mov === -130)); //วนรอบ array เพื่อตรวจหาว่าตรงเงื่องไขรึเปล่าอย่างน้อย 1 ถ้าใช่ ก็ true
// const anyDeposits = movements.some(mov => mov > 0); //มีค่าไหนมากกว่าศูนใหม

// console.log(movements.every(mov => mov > 0)); //ต้องถูกหมด
// console.log(account4.movements.every(mov => mov > 0));

// flat and flatMap ================================================
const arr = [1, [2, 3], 4, [5, 6], 7, 8];
const arrDeep = [1, [2, [3]], 4, [5, 6], 7, 8];

const y = arr.flat();
const x = arrDeep.flat(2); //ทำให้ array ทุกชั้นเท่ากัน
console.log(x);
//test ยอดทั้งหมดรวมกัน
const all = accounts
  .flatMap(acc => acc.movements) // map and flat //แต่ทำให้แค่ 1 ชั้น
  .reduce((acc, mov) => acc + mov);
console.log(all);

//Sorting Arrays ================================================
const owners = ['jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort()); //เรียงแค่ตัวหนังสือ
console.log(owners); //กลายพันได้

console.log(movements); //defalut ของสิ่งนี้คือแปลงทุกตั้วเเป็น String แล้วค่อยเรียง
movements.sort();
console.log(movements);

// movements.sort((a, b) => {
//   //เรียงค่ามากไปน้อย
//   //2 ค่าต่อเนื่อง
//   //น้อยกว่าศูนย์คือจะสลับตำแหน่ง B A
//   // > จะไม่สลับ A B
//   if (a > b) return 1;
//   if (b > a) return -1;
// });
// console.log(movements);

movements.sort((a, b) => a - b); // น้อยไปมาก
movements.sort((a, b) => b - a); // มากไปน้อย
console.log(movements);

//More Ways of Creating and Filling Arrays
const x1 = new Array(4); //ใส่แค่ตัวเดียวจะเป็นการสร้างอาร์เรเปล่ามาตามจำนวนที่เอาใส่
console.log(x1);

x.fill(1, 4, 5); // ตำแหน่งที่สองและสามสามารถกำหนดจุดเริ่มต้นและสิ้นสุดได้
//เติมให้เต็ม;
console.log(x1);

const y2 = Array.from({ length: 5 }, () => 1); //เป็นการสร้างอาร์หรือเปล่าคล้ายกับ map
console.log(y2);

const count = Array.from({ length: 19 }, (_, i) => i + 1); //ทำอาเลนับหนึ่งถึง 19
console.log(count);

const dies100 = Array.from({ length: 100 }, () =>
  Math.trunc(Math.random() * 6 + 1)
);

console.log(dies100);

labelBalance.addEventListener('click', function () {
  //ไม่ต้องเป็น ปุ่มก็ทำได้
  const movementUI = Array.from(
    document.querySelectorAll('.movements__value')
  ).map(el => el.textContent.replace('฿', '')); //สแกนหาตัวที่มีคาสต์ชื่อนี้ทั้งหมดใส่ใน array

  console.log(movementUI); //ทีนี้เราก็สามารถปรับแก้ทีละหลายหลายตัวได้หมดเลย
});

// หาผลรวมเงินฝากทั้งหมดในธนาคารทุกบัญชี
const bankDepositSum = accounts
  .flatMap(ac => ac.movements)
  .filter(mon => mon > 0)
  .reduce((acc, mon) => acc + mon);

console.log(bankDepositSum);

// ต้องการผลรวมของเงินฝากที่เงินมากกว่า 1000
const numDesposits1000 = accounts
  .flatMap(acc => acc.movements)
  .reduce((count, mov) => (mov >= 1000 ? ++count : count), 0);
//ทำเงื่อนไขกรองในนี้เลยก็ได้
console.log(numDesposits1000);

// ให้ทำเจ็ดขึ้นมาโดยใช้ reduce ในการสร้าง
const sums = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (acc, mov) => {
      // mov > 0 ? (acc.numDesposits += mov) : (acc.witgdrawals += mov);
      acc[mov > 0 ? 'numDesposits' : 'witgdrawals'] += mov; // sameเมื่อจะแทนค่าด้วยคอนดิชั่นใช ้ [] แทน . ใน object ใด้
      return acc;
    },
    { numDesposits: 0, witgdrawals: 0 } //สามารถกำหนดค่าเริ่มต้นให้เป็นอ๊อฟเจ็กได้
  );

console.log(sums);
// ทำให้ทุกตัวเป็นพิมพ์ใหญ่ยกเว้น a
const text = 'this is a nice title';
const trText = text
  .split(' ')
  .map(te => (te !== 'a' ? te[0].toUpperCase() + te.slice(1) : te))
  .join(' ');

console.log(trText);

const converTitleCase = function (title) {
  const expections = [
    'a',
    'an',
    'the',
    'but',
    'or',
    'on',
    'in',
    'with',
    'and ',
  ];

  const capotzalize = str => str[0].toUpperCase() + str.slice(1);
  const result = title
    .toLowerCase()
    .split(' ')
    .map(te =>
      expections.includes(te) ? te : te[0].toUpperCase() + te.slice(1)
    )
    .join(' ');
  return capotzalize(result);
};

console.log(converTitleCase('this is a nice title'));
console.log(converTitleCase('this is a LONG title but not too long'));
console.log(converTitleCase('and here is another title with an EXAMPLE'));
console.log(converTitleCase('this is a nice title'));

//Coding Challenge #4=======================================
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:
// 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)
// 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) �
// 3. Create an array containing all owners of dogs who eat too much
// ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
// ('ownersEatTooLittle').
// 4. Log a string to the console for each array created in 3., like this: "Matilda and
// Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
// too little!"
// 5. Log to the console whether there is any dog eating exactly the amount of food
// that is recommended (just true or false)
// 6. Log to the console whether there is any dog eating an okay amount of food
// (just true or false)
// 7. Create an array containing the dogs that are eating an okay amount of food (try
// to reuse the condition used in 6.)
// 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �)

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
//1
dogs.forEach(dog => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});

//2
const calculateEat = function (dog) {
  const result =
    dog.curFood < dog.recommendedFood * 0.9
      ? 'EatTooLittle'
      : dog.curFood > dog.recommendedFood * 1.1
      ? 'EatTooMuch'
      : 'amount of food';
  console.log(result);
};

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));

calculateEat(dogSarah);
//3
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood * 1.1)
  .flatMap(dogCheck => dogCheck.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood * 0.9)
  .flatMap(dogCheck => dogCheck.owners);

console.log(ownersEatTooMuch);
console.log(ownersEatTooLittle);

//4
console.log(`${ownersEatTooMuch.join(' and ')}\'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat
too little!`);

//5
const amounFood = dogs
  .filter(
    dog =>
      dog.curFood <= dog.recommendedFood * 1.1 &&
      dog.curFood >= dog.recommendedFood * 0.9
  )
  .flatMap(chackdog => chackdog.owners);

console.log(
  `${amounFood.join(' and ')}'s is dog owner eating exactly the amount of food`
);

//6
console.log(amounFood);

//7
const sortRecommendedFood = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogs);
console.log(sortRecommendedFood);
