'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for main part of the section
const weekdys = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdys[3]]: {
    open: 12,
    close: 22,
  },
  [weekdys[4]]: {
    open: 11,
    close: 23,
  },
  [weekdys[5]]: {
    open: 0,
    close: 24,
  },
};
const testName = ['first', 'sc', 'three'];
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours, //เอาค่าไปใส่ใน obj จากข้างนอก
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]; //RETURN 2 ค่า Array
  },

  Test: {
    [testName[0]]: { open: '1', close: '5' }, // สามารถคำนวณคุณสมบัติได้ ถ้าอยู่ใน []
    [testName[1]]: { open: '2', close: '10' },
    [testName[2]]: { open: '3', close: '25' },
    // test: function () {
    //   //old
    //   console.log('test');
    // },

    // testNew() {
    //   //New ไม่ต้องมี function
    //   console.log('test');
    // },
  },
  //
  oderDelivery: function ({
    starterIndex,
    mainIndex,
    time = 'ไม่ยอมใส่เวลา',
    address,
  }) {
    //สามารถ = เพื่อเป็นค่า เริ่มต้นได้
    //รับค่าเป็น obj ใส่ {}
    console.log(
      `Order receiced! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at  ${time}`
    );
  },
};

restaurant.oderDelivery({
  //Order receiced! Bruschetta and Risotto will be delivered to home at  ไม่ยอมใส่เวลา
  //ใสค่าเป็ฯ obj อย่าลีม {} ไม่จำเป็นต้องกรอกตามลำดับ
  //อันไหนไม่มีจะเป็น undefilde
  starterIndex: 1,
  address: 'home',
  mainIndex: 2,
});
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];
// const [x, y, z] = arr; //สามารถกำหนดตัวแปรตามลำดับได้เลย
// console.log(a, b, c);
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary); //skip

// // const temp = main;
// // main = secondary;
// // secondary = temp;
// // console.log(main, secondary); //inverse

// [main, secondary] = [secondary, main]; //same
// console.log(main, secondary); //inverse

// const [starter, mainCourse] = restaurant.order(2, 0);

// const nested = [2, 4, [5, 6]];
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// const {
//   name: restaurantName, //บอกตำแหน่ง :  ตั้งชื่อ
//   mainMenu: Menu,
//   categories: tags,
// } = restaurant; // obj ที่เราเปรียบเทียบ

// console.log(restaurantName, Menu, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant; //สร้างคุณสมบัติ menu ขึ้นมาโดยต้องกำหนดมันเป็น เซตว่าง
// console.log(menu, starters);
//=======================================================================
// let a = 999;
// let b = 111;

// const obj = { a: 12, b: 23, g: 1 };
// // {a,b} = obj; //ทำไม่ได้เพราะค้านขวามันมองว่าเแ็นแคา block ไม่ได้เป็น obj
// ({ a, b } = obj);
// console.log(a, b);

// const arr = [7, 8, 9];
// const badNewArr = [1, 2, 3, arr[0], arr[1], arr[2]];
// console.log(badNewArr);
// const NewArr = [1, 2, 3, ...arr]; //ใช้ จุดง่ายกว่า
// console.log(NewArr);

// console.log(...NewArr); //จะไม่อยู่ใน รูปแบบ ของ Array แล้ว
// console.log(1, 2, 3, 7, 8, 9); //samr

// const newMenu = [...restaurant.mainMenu, 'ส้มตำ'];
// console.log(...newMenu); //['Pizza', 'Pasta', 'Risotto', 'ส้มตำ']

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu);

// const str = 'fluke';
// const letter = [...str]; //ทำให้แยกตัวอักษร
// console.log(letter);
//The Spread Operator (...)  obj ...=======================================================================
// const restaurantCopy = { ...restaurant };
// console.log(restaurantCopy);
// restaurantCopy.name = 'uo';
// console.log(restaurantCopy.name); //สิ่งนี้จะเป็นการสร้าง obj ใหม่
// console.log(restaurant.name);
106; // Rest Pattern and Parameters

// const gett = restaurant.mainMenu;
// gett.push('hhh'); //เหมือนกัน
// console.log(restaurant.mainMenu);

// const test = true;
// console.log(...'888');

// const arr = [1, 2, ...[3, 4]]; //อยู่ขวาแตกองค์ประกอบ //dissturting
// console.log(arr); //[1, 2, 3, 4]

// const [Pizza, , Risotto, ...otherFood] = [
//   //rest
//   // อยุ่ด้านซ้ายรวมองประกอบตัวนอกเหนือ
//   ...restaurant.starterMenu,
//   ...restaurant.mainMenu,
// ];

// console.log(Pizza, Risotto, otherFood); //Focaccia Garlic Bread (4) ['Caprese Salad', 'Pizza', 'Pasta', 'Risotto']

// const add = function (...number) {
//   //รับค่าที่เหลือเป็น Array
//   console.log(number);
// };

// add(1, 3, 44, 5, 3, 2, 5, 7);

// const x = [2, 3, 4];
// add(...x);
// || &&=======================================================================
// console.log(0 || '88'); //ถ้าไม่ใช่ค่าว่างหรือ0 ก็จะแสดงตัวนั้น

// const x = undefined || 78; //จะแสดงค่าที่เป็นจริงออกมา

// console.log(x);

// restaurant.Emety = restaurant.Emety ? restaurant.Emety : 10; //ตรวจว่าเป็นค่าว่างหรือเปล่า
// console.log(restaurant.Emety);

// restaurant.Emety = restaurant.Emety || 10; //same

// const y = undefined && 78; //ตรงกันข้ามจะแสดงค่าที่เป็นเท็จออกมา
// console.log(y);

// const c = 9 && 78; //ถ้าจริงหมดจะแสดงตำตอบสุดท้าย
// console.log(c);

// ??======================================================================

// let x = 0;
// x = x ?? 10; //nullish ไม่นับ 0 กับ "" '' เป็นเท็จ
// console.log(x);

// Logical Assignment Operators======================================================================
// const reult1 = {
//   gus: 'fluke',
//   gusNum: 0,
// };
// const reult2 = {
//   gus: 'mom',
// };
// reult1.gusNum = reult1.gusNum ?? 10;
// reult2.gusNum = reult2.gusNum || 10;
// console.log(reult1.gusNum);
// console.log(reult2.gusNum);

// reult2.gusNum ??= 10; //same
// reult2.gusNum || 10; // ข้อเสียตะวนี้คือ 0 ก็นับว่าเป็น เท็จ

// Coding Challenge #1======================================================================
// const game = {
//   team1: 'Bayern Munich',
//   team2: 'Borrussia Dortmund',
//   players: [
//     [
//       'Neuer',
//       'Pavard',
//       'Martinez',
//       'Alaba',
//       'Davies',
//       'Kimmich',
//       'Goretzka',
//       'Coman',
//       'Muller',
//       'Gnarby',
//       'Lewandowski',
//     ],
//     [
//       'Burki',
//       'Schulz',
//       'Hummels',
//       'Akanji',
//       'Hakimi',
//       'Weigl',
//       'Witsel',
//       'Hazard',
//       'Brandt',
//       'Sancho',
//       'Gotze',
//     ],
//   ],
//   score: '4:0',
//   scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//   date: 'Nov 9th, 2037',
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };

// const [players1, players2] = game.players;
// const [gk, ...fieldPlayers] = [...players1];
// const [...allPlayers] = [...players1, ...players2];
// const [...players1Final] = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
// const {
//   odds: { team1, x: draw, team2 },
// } = game; // ไม่ใช้ตามลำดับ ชื่อต้องตรง และจะidsstucting obj ได้ต้องเป็น {} x:ชื่อตัวแปลที่จะเปลี่ยน
// // const [team1, x, team2] = game.odds; // test
// console.log(draw);
// const printGoals = function (...players) {
//   console.log(`${[...players]}  scored: ${players.length}`);
// };

// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');

// team1 < team2 && console.log('team1 is more likely to win'); //no if/else statement or the ternary operator.
// team2 < team1 && console.log('team2 is more likely to win');

// Looping Arrays: The for-of Loop======================================================================
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item); //item คิอสิ่งของที่อยู่ใน Arrays แตะละรอบจะเป็นเป็นค่าถัดไปตามลำดับ

// for (const item of menu.entries()) console.log(item); //บอกลำดับ EX. [0, 'Focaccia']

// for (const [i, el] of menu.entries()) console.log(`${i + 1} : ${el}`); //แตกองค์ประกอบได้

//Enhanced Object Literals======================================================================

// console.log(Test.first); //เอามาจาก const testName = ['first', 'sc', 'three'];

// Optional Chaining (?.)====================================================================== การตรวสอบว่ามีค่านั้นรึเปล่า
//console.log(restaurant.openingHours.mon.open); //ไม่เจอ ที่อยู่ mon ที่จะสร้างตัว open Error

// if (restaurant.openingHours.mon) {
//   //ถ้าค่ารองไม่มี จะเป็น undefined
//   console.log(restaurant.openingHours.mon.open); //เช็คก่อน
// }

// const num = ['first', 'sc', 'three'];

// for (const day of num) restaurant.Test[day]?.open; //ใส่ค่าคุณสมบัติด้วยตัวแปลด้วยตัวแปรให้ใส่ Test[num[0]]  = Test.first

// console.log(restaurant.openingHours.mon?.open); //เช็คก่อน แบบย่อ ไม่มีจะเป็น undefined

// console.log(restaurant.order?.(0, 1) || "don't have"); //เอาลำดับใน order function
// console.log(restaurant.order555?.(0, 1) || "don't have"); //เอาลำดับใน order function

// const user = [{ name: 'fluke', email: 'wichira2013.coth@gmail.com' }];

// console.log(user[0]?.name || 'not have user');
// console.log(user[1]?.name || 'not have user');

// Looping Objects: Object Keys, Values, and Entries ======================================================================

// const properties = Object.keys(restaurant.Test); //เอาkeyคุณสมบัติ obj มาใส่ Array
// console.log(properties);

// const Test2 = {
//   [testName[0]]: { open: '1', close: '5' }, // สามารถคำนวณคุณสมบัติได้ ถ้าอยู่ใน []
//   [testName[1]]: { open: '2', close: '10' },
//   [testName[2]]: { open: '3', close: '25' },
//   // test: function () {
//   //   //old
//   //   console.log('test');
//   // },

//   // testNew() {
//   //   //New ไม่ต้องมี function
//   //   console.log('test');
//   // },
// };

// const value = Object.values(openingHours); //เอาvalueคุณสมบัติ obj  มาใส่ใน Array อีกทีตามจำนวน  key
// console.log(value); //type obj

// const entries = Object.entries(openingHours); //อันนนี้บอกทั้งKeyและ value
// console.log(entries);

// for (const [day, { open, close }] of entries) {
//   console.log(`ในวัน ${day} ร้านค้าเปิดใน ${open} จนถึง ${close} `);
// }

// Coding Challenge #2 ======================================================================
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
for (const [goal, player] of game.scored.entries()) {
  //entries()
  //ถ้าเป็น array จะบอกลำดับด้วย
  console.log(`Goal ${Number(goal) + 1}: ${player}`);
}
const odds = Object.values(game.odds);
let averages = 0;
for (const iterator of odds) {
  averages += iterator;
}
averages /= odds.length;
console.log(averages);
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5

for (const [team, x] of Object.entries(game.odds)) {
  const teamStr = (team === 'x' ? 'draw' : `${game[team]}`);
  console.log(`Odd of victory ${teamStr} : ${x}`); //* */
}

const scored = game.scored;
// scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
const scorers = {};

for (const x of scored) {
  scorers[x] = (scorers[x] || 0) + 1; //scorers[x] ใสค่าตัวเดมให้มันเลยพอเจอตัวซ้ำก็วางทับ // = ถ้ามันไม่มีให้ครั้งแรกเป็น 0 ละ +1
}
console.log(scorers);

// Sets ======================================================================

const thisSet = new Set(['pizza', 'pizza', 'egg', 'pizza', 'becon']);
const gg = [];
console.log(thisSet);
console.log(thisSet.size); // =  Arrary.langht
console.log(thisSet.has('pizza')); //= Arrary.includes
// thisSet.clear(); //ล้าง set
// console.log(thisSet);

for (const i of thisSet) {
  console.log(i);
}

const thisArr = ['pizza', 'pizza', 'egg', 'pizza', 'becon'];
const toSet = [...new Set(thisArr)];
console.log(toSet);

// // Maps ======================================================================
// categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
// const rest1 = new Map(); //สามารถ มี key ได้ทุก type

// rest
//   .set('name', 'Classico Italiano') //set ค้า
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)

//   .set(true, 'yes')
//   .set(false, 'no'); //ต่อกันได้

// console.log(rest);

// console.log(rest.get(true));
// console.log(rest.get(6)); //undefind

// console.log(rest.get(0 > rest.get('open') && 0 < rest.get('close'))); //ซ้อนเงื่อนไข

// rest.delete('categories'); //ลบ;
// console.log(rest);

// rest.set([1, 2], 'notSame');

// console.log(rest.get([1, 2])); //undefined เพราะตัวของ obj ที่สร้างขึ้นอยู่ใน heep เป็นคนละตัวกัน
// // Maps: Iteration  ======================================================================
// const question = new Map([
//   ['question', 'what is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'java'],
//   [3, 'javaScript'],
//   ['conrrect', 3],
//   [true, 'Correct'],
//   [false, 'Try again'],
// ]); //สร้างได้อีกรูปแบบนึง ซึ้งคล้ายกลับ entries
// console.log(question);
// console.log(Object.entries(openingHours)); //รูปแบบคล้ายกับตอนกรอกอันบน

// const openingHoursMap = new Map(Object.entries(openingHours)); //ดังนั้นจึงแปลงได้เลย
// console.log(openingHoursMap);

// console.log(question.get('question'));
// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const input = Number(prompt('You answer'));

// console.log(question.get(input === question.get('conrrect')));

// console.log(...question); //map to Arrays
//Coding Challenge #3======================================================================
// Let's continue with our football betting app! This time, we have a map called
// 'gameEvents' (see below) with a log of the events that happened during the
// game. The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).
// Your tasks:
// 1. Create an array 'events' of the different game events that happened (no
// duplicates)
// 2. After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
// 3. Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)
// 4. Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '� Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '� Substitution'],
//   [64, '� Yellow card'],
//   [69, '� Red card'],
//   [70, '� Substitution'],
//   [72, '� Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '� Yellow card'],
// ]);

// const events = [...new Set([...gameEvents.values()])]; //ต้องมีกรอบ 4 เหลี่ยมครอบด้วย ตัวสีเหลืองคือต้องมี () มึงอย่าลืม
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// // for (const [min, event] of gameEvents) {
// //   if (min % 9 === 0) console.log(`An event happened ${event}`);
// // }
// const time = [...gameEvents.keys()].pop(); // ทำเป็น Arrays และ ลบท้ายสุด
// console.log(
//   `An event happened, on average, every ${
//     time / gameEvents.size
//   } minutesgameEvents`
// );

// // for (const [min, event] of gameEvents) {
// //   const eventStr = min < 45 ? '[FIRST HALF]' : '[SECOND HALF]';
// //   console.log(`${eventStr}  ${min} : ${event}`);
// // }
//Working With Strings - Part 1======================================================================
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]); //ถอดตัวอักษรออกมา
// console.log(plane.length); //ถอดตัวอักษรออกมา

// console.log(airline.indexOf('r')); // หาตัวอีกษรว่าอยู่ตำแหนงไหน
// console.log(airline.lastIndexOf('r')); // หาตัวท้าย
// console.log(airline.lastIndexOf('Portugal')); //หาเป็นคำได้ ต้องตัวพิมเดียวกัน

// console.log(airline.slice(4)); //เลือกตำแหน่งเริ่มต้น ไม่แปลียนค่า
// console.log(airline.slice(4, 7)); //เลือกตำแหน่งเริ่มต้น  ท้ายสุด

// console.log(airline.slice(0, airline.indexOf('Portugal'))); //ลบคำว่า tap ออก

// console.log(airline.slice(-2)); //นับเรื่มจากท้ายสุด
// console.log(airline.slice(1, -1)); //ลบหัวกับท้าย

// const checkMiddleSeat = function (seat) {
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') console.log('You got the middle seat');
//   else console.log('You got lucky');
// };

// checkMiddleSeat('34B');

// checkMiddleSeat('34A');

//Working With Strings - Part 2======================================================================
// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(airline.toUpperCase()); // ตามชื่อ
// console.log(airline.toLocaleLowerCase());

// const passenger = 'fLUkE';
// const passengerLower = passenger.toLocaleLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);
// console.log(passengerCorrect); //Fluke

// const email = 'hello@fluke.io'; //ตรวจสอบความถูกต้อง

// const loginEmail = '  Hello@Fluke.io \n';
// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim(); // ตัดช่องว่างรวบถึง \n
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim(); //same
// console.log(normalizedEmail);

// const priceTH = '288,97฿';
// const priceUS = priceTH.replace('฿', '$').replace(',', '.'); //แทนที่เครื่องหมาย
// console.log(priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Bording door 23!';

// console.log(announcement.replace('door', 'gate')); //เปลี่ยนแค่ตัวแรกอันเดียว
// console.log(announcement.replace(/door/g, 'gate')); // /door/g  gobal
// console.log(announcement.replaceAll(/door/g, 'gate')); // same

// const plane2 = 'Airbus A320neo  '; // เช็คว่ามีมัย
// console.log(plane2.includes('A320'));
// console.log(plane2.includes('or'));
// console.log(plane2.startsWith('Airbus')); //เรื่มตั้นด้วยคำนี้มั้ย
// console.log(plane2.endsWith('neo')); //ลงท้ายด้วยคำนี้มั้ย เว้นวรรคก็นับ

//Working With Strings - Part 3 ======================================================================

// console.log('a+very+nice+string'.split('+')); //ใช้อะนนี้เป็นตัวแบ่งว่าจะมีกี่ตัวใน array
// console.log('Jonas Schmedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schmedtmann'.split(' '); //แบ่งเป็นองประกอบได้
// const newName = ['Mr.', firstName, lastName.toUpperCase(), 2].join(' '); //รวมทุกตัวเป็น string  join('แต่ละตัวขั้นด้วย')
// console.log(newName);

// const capitalizeName = function (name) {
//   //ทำให้ตัวแรกเป็นตัวพิมใหญ่
//   const splitString = name.split(' ');
//   const nameUpper = [];
//   for (const x of splitString) {
//     // nameUpper.push(x[0].toUpperCase() + x.slice(1));
//     nameUpper.push(x.replace(x[0], x[0].toUpperCase())); //same
//   }
//   console.log(nameUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('fluke wishira');

// const messageName = 'fluke';
// console.log(messageName.padStart(20, '+').padEnd(35, '+')); //เพิ่ม +ไปจนกว่า จะมี langht = 20
// console.log(messageName.padStart(20, '+').padEnd(35, '+'));

// const maskCreditCard = function (number) {
//   //ซ่อนเลขบัตร
//   const str = number + ''; //ทำแบบนี้เพื่อให้ค่าทีเป็นตัวเลขกลายเป็น string
//   const mask = str.slice(-4);
//   return mask.padStart(str.length, '*');
// };

// console.log(maskCreditCard('8888787888'));

// const planesInLine = function (n) {
//   //ทำซ้ำ
//   console.log(`${n} Plane ${'🛫'.repeat(n)}`);
// };
// planesInLine(8);

//Coding Challenge #4 ======================================================================
// Write a program that receives a list of variable names written in underscore_case
// and convert them to camelCase.
// The input will come from a textarea inserted into the DOM (see code below to
// insert the elements), and conversion will happen when the button is pressed.

// Test data (pasted to textarea, including spaces):
// underscore_case
// first_name
// Some_Variable
//  calculate_AGE
// delayed_departure
// Should produce this output (5 separate console.log outputs):
// underscoreCase       ✅
// firstName            ✅✅
// someVariable         ✅✅✅
// calculateAge         ✅✅✅✅
// delayedDeparture     ✅✅✅✅✅
// Hints:
// § Remember which character defines a new line in the textarea �
// § The solution only needs to work for a variable made out of 2 words, like a_b
// § Start without worrying about the ✅. Tackle that only after you have the variable
// name conversion working �
// § This challenge is difficult on purpose, so start watching the solution in case
// you're stuck. Then pause and continue!
// Afterwards, test with your own test data!

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const btr = document.querySelector('button');

const text = document.querySelector('textarea');

btr.addEventListener('click', function () {
  const spitValue = text.value.toLowerCase().split('\n'); //ตัดช่วงบรรทัดแบ่งเป็น Array
  const reult = [];
  for (const [i, x] of spitValue.entries()) {
    //รับจำนสวนรอบกับค่า
    const findUnder = x.indexOf('_'); //หาตำแหน่ง _
    const motivation = x //ปรับแต้ง `_${x[findUnder + 1]}` ตัวที่อยู่หลัง _(x) ให้เปลี่ยนเป็นตัวพิมพ์ไหญ่
      .replace(`_${x[findUnder + 1]}`, x[findUnder + 1].toUpperCase())
      .trim()
      .replace(x[findUnder], '');
    const addEmote = `${motivation.padEnd(15, ' ')}${'✅'.repeat(i + 1)}`; //ทำไห้เว้นวรรคเท่ากันและใส่ emote ตามลำดับ
    reult.push(addEmote);
  }
  text.value = reult.join('\n');
});
