'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2023-01-24T17:01:17.194Z',
    '2023-01-27T23:36:17.929Z',
    '2023-01-28T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
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

/////////////////////////////////////////////////
// Functions
// ฟังชั่นเกี่ยวกับการแสดงเวลา และการผ่านช่วงเวลาเทียบกับปัจจุบัน
const formatMovementDate = function (date, local) {
  const calDayPassed = (
    date1,
    date2 // หาเวลาที่ผ่านไป
  ) => Math.round(Math.abs((date2 - date1) / (1000 * 60 * 60 * 24)));

  const datePassed = calDayPassed(new Date(), date);
  console.log(datePassed);
  if (datePassed === 0) return 'TODAY';
  if (datePassed === 2) return 'YEATSERDAY';
  if (datePassed <= 7) return `${datePassed} DAY AGO`;
  //หากรีเทิร์นไปแล้วบรรทัดด้านล่างจะ ไม่ถูกใช้งานทำงานจึงไม่จำเป็นต้องใช้ else
  // เอาเวลาในตารางประวัติไปใส่
  // const day = `${date.getDate()}`.padStart(2, 0); //ทำเลขเริ่มต้น 00
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();

  return new Intl.DateTimeFormat(local).format(date); // กำหนดรูปแบบให้มัน เมื่อแสดง
};

const formatcur = function (value, local, currency) {
  // ไว้สำหรับเปลี่ยนรูปแบบและจัดการนามสกุลเงิน
  return new Intl.NumberFormat(local, {
    style: 'currency',
    currency: currency,
  }).format(value.toFixed(2));
};

const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);
    const formattedMov = formatcur(mov, acc.local, acc.currency);

    console.log(formattedMov);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};
let currentAccount, timer;
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatcur(acc.balance, acc.local, acc.currency);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatcur(incomes, acc.local, acc.currency);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatcur(Math.abs(out), acc.local, acc.currency);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatcur(interest, acc.local, acc.currency);
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  let time = 600; //เวลาทั้งหมดหน่วยเป็นวิ
  const tick = function () {
    //เอาตัวนับเวลาไปเป็นฟังก์ชัน
    const min = String(Math.trunc(time / 60)).padStart(2, 0); // คำนวณนาที
    const sec = String(time % 60).padStart(2, 0); // คำนวณวินาที
    labelTimer.textContent = `${min}:${sec}`;

    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'login to get started';
      containerApp.style.opacity = 0;
    }
    time--; // อย่าลืมเอาไว้ข้างล่างเพื่อที่จะให้เห็นเลขศูนย์ด้วย
  };
  tick(); //สั่งให้มีการทำงานก่อนเพื่อปิดคาเริ่มต้น

  const timer = setInterval(tick, 1000); // โอนซ้ำฟังชั่นนี้ไปเรื่อยเรื่อย
  return timer; // ตรงนี้ติดเป็นชั่วโมง ใส่ผิดตำแหน่ง T_T
};

///////////////////////////////////////
// Event handlers

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;

    // เวลา ที่ต้องเป็นแบบ นี้เพราะว่าถ้ามึง มึงเปลี่ยนบัญชีตอนเวลายังไม่หมดเวลาจะชนกัน

    // ส่วนบอกเวลา
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0); //ทำเลขเริ่มต้น 00
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year},${hour}:${min}`;

    // ตัวบอกเวลาทันสมัย
    const now = new Date();
    const options = {
      //กำหนดตัวที่จะแสดงในฟังชั่น intl
      hour: 'numeric',
      minute: 'numeric',
      day: '2-digit',
      month: '2-digit', //อาตัวเลขแค่สองตัวเช่น 02
      year: 'numeric',
      weekday: 'long', // ใช้ชื่อเต็ม
    };

    const locale = navigator.language; //เรียกตามประเทศของเบาเซอร์ผู้ชาย
    console.log(locale);
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now); //ฟอร์มแบบนี้ใช้กันทั่วโลก iso language codes table เปลี่ยนเวลาของประเทศนั้นนั้น

    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (timer) clearInterval(timer);
    // ในการล็อกอินครั้งแรกแต่ยังไม่เห็นตัวนี้
    timer = startLogOutTimer(); //เซ็ต รีเซ็ททำเมอร์ให้หลังจากล็อกอินแล้ว

    // Update UI
    updateUI(currentAccount);
  }
});

// //test
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //add time date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    setTimeout(function () {
      /// ตั้งเวลาไว้เหมือนรออนุมัติ
      currentAccount.movements.push(amount);

      //add loan date
      currentAccount.movementsDates.push(new Date().toISOString()); // เพื่อทำให้เป็นเวลาสากลจะได้เหมือนกัน

      // Update UI
      updateUI(currentAccount);
    }, 2500);
  }

  //reset timer
  clearInterval(timer);
  timer = startLogOutTimer();

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

//string to number
console.log(0.1 + 0.2); // เป็นไปได้ยากเนื่องจาก 0.3 = 3/10 = 3.33333 มันเลยปัดขึ้นให้

console.log(Number('23'));
console.log(+'23'); //same
// สามารถใช้รับค่าที่มีหน่วยต่อหลังให้เอาเฉพาะตัวเลขได้ในตัว css
console.log(Number.parseInt('30px', 10)); //จะตัดตัวหนังสือออกไปให้
console.log(Number.parseInt('w30px', 10)); // ได้แต่ต้องเป็นตัวเลขที่อยู่ข้างหน้าเท่านั้น
// ค่าที่สองที่ใส่ไปคือบอกว่าเป็นเลขฐานอะไร

console.log(Number.parseFloat('2.5rem')); // เอาทศนิยม

console.log(Number.isNaN(+'kk')); //เช็คค่านี้ไม่ใช่ตัวเลข

console.log(Number.isFinite(20)); // ถ้าเป็นตัวเลขจะเป็นจริง
console.log(Number.isFinite('20'));
console.log(Number.isFinite(+'20'));
console.log(Number.isFinite(+'20l'));

// สุ่มตัวเลขแบบกำหนดช่วง
const randomInt = (min, max) =>
  Math.trunc(Math.random() * (max - min) + 1) + min;

console.log(randomInt(0, 5));

console.log(Math.round(23.9)); //  ปัดเศษส่วนตามปกติ
console.log(Math.round(23.3));

console.log(Math.ceil(23.9)); // ปัดขึ้นไม่ว่ากรณีใด
console.log(Math.ceil(23.3));

console.log(Math.floor(23.9)); // ปัดลงไม่ว่ากรณีใด
console.log(Math.floor(23.3));

console.log(Math.floor(-23.3)); // ติดลบจะตรงข้าม

console.log((2.7).toFixed(5)); //กำหนดว่าจะเอาทศนิยม กี่ตำแหน่ง พร้อมปัดขึ้นปัดลงให้ด้วย
console.log(+(2.7).toFixed(5)); // ปกติจะออกมาเป็นสตริง

labelBalance.addEventListener('click', function () {
  console.log(777);
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'red';
  });
});

// console.log(Number.MAX_VALUE); //หาค่ามากสุด

// const now = new Date(); //บอกเวลา

// console.log(now);

// console.log(new Date('aug 02 2020 18:05:41'));
// console.log(new Date(2037, 10, 19, 15, 23, 5)); //เริ่มต้นที่ 0

// console.log(new Date(3 * 24 * 60 * 60 * 1000)); //คำนวณเวลา 3 วันถัดไป

// const future = new Date(2037, 10, 19, 15, 23, 5);

// console.log(future);
// console.log(future.getFullYear()); //ปี
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString()); //เวลาสากล
// console.log(future.getTime()); //ให้ข้อมูลเวลาเป็น เสี้้ยววิ

// console.log(Date.now); //ค่าเวลาเป็นวิ

// future.setFullYear(1029); //ตั้งค่าใหม่
// console.log(future);

// //Operations With Dates
// const future = new Date(2037, 3, 24); // จะแปลงเป็นหน่วย มิลลิวินาที 1000 = 1 วิ
// console.log(+future);
// // หา ช่วงวันที่ผ่านไป
// const calDayPassed = (date1, date2) => (date2 - date1) / (1000 * 60 * 60 * 24);

// console.log(calDayPassed(new Date(2037, 10, 4), new Date(2039, 10, 4)));

// //internationalizing Numbers (Intl)===============================
// const num = 3884764.23;
// const options = {
//   style: 'currency', // รูปแบบ
//   unit: 'celsius', // หน่วยที่ใช้ในการต่อท้าย เปอร์เซ็นต์ได้องศาได้
//   currency: 'EUR', //กำหนดหน่วยเงิน
// };
// //NumberFormat เอาไว้จัดการหน่วยตัวเลข
// console.log('US:   ', new Intl.NumberFormat('en-US', options).format(num)); //; ลักษณะการเขียนจะไม่เหมือนกันในแต่ละภูมิภาค
// console.log('Germany:   ', new Intl.NumberFormat('de-DE', options).format(num));
// console.log('Syria :   ', new Intl.NumberFormat('ar-SY', options).format(num));

// console.log(
//   navigator.language, // เลือกประเทศอัตโนมัติตามเบาเซอร์ของเรา
//   new Intl.NumberFormat(navigator.language).format(num)
// );

// const ingredients = ['olives', 'spinach'];
// //Timers: setTimeout and setInterval =======================
// const pizza = setTimeout(
//   (ing1, ing2) => console.log(`Here is you pizza ${ing1} and ${ing2}`),
//   3000,
//   ...ingredients
// );
// //ค่าต่อจาก อันแรกจะเป็นการกำหนดตัวแปร Agreement ที่ใส่ลงไป
// //ตัวตั้งเวลาที่runในอนาคต

// console.log('Waiting...');

// if (ingredients.includes('spinach')) clearTimeout(pizza); //ำสั่งยกเลิกตัวจับเวลา

// //setinterval เป็นการทำงานซ้ำไปทุกทุกหนึ่งวิ
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);
