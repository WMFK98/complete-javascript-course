// 'use strict'; // ทำให้ตัว js มีการเข้มงวดมากขึ้น ้เช้นหากมีตัวแปรใหม่ต้องใช้ตัวประกาศด้วย

// let hasDrinersLicrnse = false;
// const passTast = true;

// if (passTast)  hasDrinersLicrnse = true;
// if(hasDrinersLicrnse) console.log('I can drive ')

// function logger(){
//     console.log("hello");
//     return 5;
// }

// function fruitProcessor(apples,oranges) {
//     console.log(apples,oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`
//     return juice;
// }

// const apples =  fruitProcessor(2,5);
// console.log(apples);

// // Declarations
// function age(brithDay) {
//     return 2022-brithDay;
// }

// //Expressions
// const age2 = function (brithDay) { //ถ้าทำแบบนี้จะทำให้เป็นแบบประกาศค่า value  ออกมาแปลว่า
//     return 2022-brithDay;   // สิ่งใดก็ตามที่จะเอาตัวนี้ไปใช้จำเป็นต้องอยู่ข้างล่างตัวที่ประกาศ
// }

// const youAge1=age(2004);
// const youAge2 = age2(2004)
// console.log(youAge1,youAge2)

// //Arrow
// //const อันแรกประกาศค่า = กำหนดพารามิดเตอร์ => ค่า return การคำนวณ
// const Age3 = brithDay => 2022-brithDay;//ไม่ซับซ้อน

// const youAge3 = Age3(2005);
// console.log(youAge3);

// const yearUntilRetirement = (brithDay,firstName) => { //แบบยาว
//     const age =  2022-brithDay;
//     const retirement = 60-age;
//     // return retirement;
//     return `${firstName} is have retirement ${retirement} year.`

// }

// console.log(yearUntilRetirement(2004,'สมชาย'));

//=========================================================================

// JavaScript Fundamentals – Part 2
// Coding Challenge #1
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

// const calcAverage = (oneScore,twoScore,threeScore) =>(oneScore+twoScore+threeScore)/3;
// const avgDolhins = calcAverage(44,23,71);
// const avgKoalas = calcAverage(65,54,49);
// checkWinner(avgDolhins,avgKoalas);

// function checkWinner(avgDolhins,avgKoalas) {
//     if(!(avgDolhins>avgKoalas*2||avgKoalas>avgDolhins*2)){
//         console.log('no team wins!')
//     }
//     if(avgDolhins>avgKoalas){
//         console.log(`Dolhins win (${avgDolhins} vs ${avgKoalas})`)
//     }else{
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`)
//     }
// }

// const avgDolhins2 = calcAverage(85,54,41);
// const avgKoalas2 = calcAverage(23,34,27);
// checkWinner(avgDolhins2,avgKoalas2);

//=========================================================================

// const friends = ['สมศรี','สมชาย','สมหมาย']

// const jonas = ['hi','hello',1000-900,true,friends,checkWinner]; //สามารถเก็บประเภทที่แตกต่างกันได้ โครตสุดยอด++
// jonas[5](500,500); //เก็บได้แม้กะทั้งฟังชั่น WTF!!

// function checkWinner(avgDolhins,avgKoalas) {
//     if(!(avgDolhins>avgKoalas*2||avgKoalas>avgDolhins*2)){
//         console.log('no team wins!')
//     }else{
//     if(avgDolhins>avgKoalas){
//         console.log(`Dolhins win (${avgDolhins} vs ${avgKoalas})`)
//     }else{
//         console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`)
//     }
// }
// }

//ADD====================================================================

// const friends = ['สมศรี','สมชาย','สมหมาย'];
// friends.push('สมโพด1');//คือการนำ value มาใส่ในลำดับท้ายสุด อีกทั้งยังเพิ่ม Langht ให้อีกด้วยสุดจัด
// const newLanght = friends.push('สมโพด2'); //ทำเหมือนอันบนแต่การเอาคำสั่งนี้มาใช้ในตัวแปรและ log ออกมันจะ return Langht ที่เมื่อเพื่มลงไปใน Array ว่ามีเท่าไหร่
// friends.unshift('สมONE'); //คือการนำ value มาใส่ในลำดับหน้าสุด
// const newunshift = friends.unshift('สมTWO'); //ทำได้เหมือน push
// console.log(newunshift);
// console.log(friends);
//REMOVE=====================================================================

// friends.pop();//ลบตัวล่าสุด
// const poped = friends.pop();
// console.log(poped); // จะ return ตัวที่ลบไป
// const shifted = friends.shift(); //ลบตัวแรกสุด returnตัวที่ลบไป
// console.log(shifted);

//serech=====================================================================
// const friends2 = ['สมศรี','สมชาย','สมหมาย'];
// console.log(friends2.indexOf('สมชาย')); //บอกตำแหน่งตัวนั้น
// console.log(friends2.indexOf('สมหาย')); //บอกตำแหน่งตัวนั้น ไม่มี =-1;
// console.log(friends2.includes('สมชาย')); //บอกว่าเจอตัวนั้นใหม return boolean
// console.log(friends2.includes('สมหาย')); //same type only!

//Coding Challenge #2=====================================================================

// function calcTip(money) {
//         return money>=50&&money<=300 ? money*0.15 :money*0.2;;
// }

// const bill = [125,555,44];
// const tip = [calcTip(bill[0]),calcTip(bill[1]),calcTip(bill[2])];

// console.log(tip);

// const total = [];
// total.push(bill[0]+tip[0])
// total.push(bill[1]+tip[1])
// total.push(bill[2]+tip[2])
// console.log(total);

//Obj Array=====================================================================
// const g1 = [ //arrays เรียกผ่านลำดับได้เท่านั้น
//         'fluke',
//         2022-2004,
//         true,
//         ['ikkew','non','spy',]
// ];
// const fluke = { //abj
//         Nickname : 'fluke', // : == = in obj ไม่มีลำดับเรียกผ่าน key
//         age :2022-2004,
//         man : true,
//         friend : ['ikkew','non','spy','สมยศ']
// }

//cell Obj =====================================================================
// const nickKey = 'Nick'
// console.log(fluke.age);
// console.log(fluke['age']);//same
// console.log(fluke[nickKey+'name']);// wow

// const  input = prompt('fluke = {Nickname,age,man,friend}')

// if (fluke[input]) {//undefined = not found = false.
//         console.log(fluke[input]);
// } else{
//         console.log('worng');
// }

//add Obj=====================================================================
// fluke.job = 'คนรวย';
// fluke['like'] = 'somtum';
// console.log(fluke);

// const bestfriend = fluke.friend[3]
// console.log(fluke.friend);
// console.log(bestfriend);
//function  Obj=====================================================================

// const jonas = {
//         firstName: 'Jonas',
//         lastName: 'Schmedtmann',
//         birthYeah: 1991,
//         job: 'teacher',
//         friends: ['Michael', 'Peter', 'Steven'],
//         hasDriversLicense: true,
//         calAge : function (birthYeah) {
//                 console.log(this); //ตัว obj ที่ครอบมันอยู่
//                 this.age = 2022-birthYeah; //สร้าง popaties  ไห้ this
//                 return this.age
//         },
//         summary : function () {
//                 return `jonas is a ${this.calAge(this.birthYeah)}-year old ${this.job}, and has ${this.hasDriversLicense ? 'a' : 'not'} driver\'s license` // condition
//         }
// }

// console.log(jonas.summary());

//Coding Challenge #3=====================================================================
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.

// const mark ={
//        name:'Mark Miller',
//        mass:78,
//        height:1.69,
// //        calcBMI:   () =>  this.BMI = this.mass/(this.height**2) มี 2 ตัวไม่ได้
// calcBMI:  function () {
//         return this.BMI = this.mass/(this.height**2)
//        }
// }

// const john ={
//         name:'John Smith',
//         mass :92,
//         height:1.95,
//         calcBMI:  function () {
//                 return this.BMI = this.mass/(this.height**2)
//                }
//  }

// console.log(`${mark.calcBMI()> john.calcBMI() ? mark.name : john.name}\'s BMI (${mark.BMI> john.BMI ? mark.BMI : john.BMI})
// is higher than ${mark.calcBMI()< john.calcBMI() ? mark.name : john.name}\'s (${mark.BMI< john.BMI ? mark.BMI : john.BMI})!`);
// console.log(mark.BMI);

//random=====================================================================

//  let  dice ;     //Math.trunc ไม่เอาทศนิยม
//  let time = 0;
// while ( dice != 999999) {
//          dice = Math.trunc((Math.random() * 1000000 )+1); ;
//          time++;
//         console.log(dice,time) ;

// }

//Coding Challenge #4=====================================================================

// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array
// GOOD LUCK �
debugger;
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

console.log(bills);

console.log(calcTip(bills));
console.log(totals);
console.log(calcAverage(totals));

function calcTip(bills) {
  for (let i = 0; i < bills.length; i++) {
    tips.push(
      bills[i] >= 50 && bills[i] <= 300 ? bills[i] * 0.15 : bills[i] * 0.2
    );
    totals.push(bills[i] + tips[i]);
  }
  return tips;
}

function calcAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
