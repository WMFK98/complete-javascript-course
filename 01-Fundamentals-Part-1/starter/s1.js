//CH1,2==============================================================================================================
// let marksWeights = 78;
// let marksHeight =1.69;
// let johnWeights  = 92;
// let johnHeight =1.95;


// marksBMIs = marksWeights/(marksHeight **2);
// johnBMIs =  johnWeights/(johnHeight **2);

// let markHigherBMI = marksBMIs > johnBMIs;

// // console.log(marksBMIs,johnBMIs,markHigherBMI); c1

// if(markHigherBMI){
//     console.log(`Mark's BMI (${marksBMIs}) is higher than John's (${johnBMIs})`);
// }else{
//     console.log(`John's BMI (${johnBMIs}) is higher than Mark's (${marksBMIs}) !`);
// }

// marksWeights = 95;
// marksHeight =1.88;
// johnWeights  = 85;
// johnHeight =1.76;


// marksBMIs = marksWeights/(marksHeight **2);
// johnBMIs =  johnWeights/(johnHeight **2);
// markHigherBMI  = marksBMIs > johnBMIs;
// // console.log(marksBMIs,johnBMIs,markHigherBMI);
//TEST1============================================================================================================
// if(markHigherBMI){
//     console.log(`Mark's BMI (${marksBMIs}) is higher than John's (${johnBMIs})`);
// }else{
//     console.log(`John's BMI (${johnBMIs}) is higher than Mark's (${marksBMIs}) !`);
// }


// const fav = prompt('?')//ค่าที่ระบเข้ามาจะเป็น string
// if(fav==23) //การใช้ตัวนี่จะตรวจสอบแบบแหลวม
// //ถ้าเป็น === จะไม่ติดเพราะ type ไม่ตรงกัน
// console.log('cool 23');


//CH3==============================================================================================================
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110

let Dolphins = 96 +108+89;
let Koalas = 88 +91+110;
let dolphinsAverage = Dolphins/3;
let KoalasAverage = Koalas/3;
console.log(dolphinsAverage,KoalasAverage);
if(dolphinsAverage < 100 && KoalasAverage <100)
console.log("No one WN because point so low!!");
else if(dolphinsAverage===KoalasAverage)
console.log("Draw");
else if(dolphinsAverage>KoalasAverage)
console.log('Dolphins is WN ');
else
console.log('Koalas is WN');


// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123


Dolphins = 97 +112+101;
Koalas = 109 +95+123;
dolphinsAverage = Dolphins/3;
KoalasAverage = Koalas/3;

console.log(dolphinsAverage,KoalasAverage);
if(dolphinsAverage < 100 && KoalasAverage <100)
console.log("No one WN because point so low!!");
else if(dolphinsAverage===KoalasAverage)
console.log("Draw");
else if(dolphinsAverage>KoalasAverage)
console.log('Dolphins is WN ');
else
console.log('Koalas is WN');

// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

Dolphins = 97 +112+101;
Koalas = 109 +95+106;
dolphinsAverage = Dolphins/3;
KoalasAverage = Koalas/3;

console.log(dolphinsAverage,KoalasAverage);
if(dolphinsAverage < 100 && KoalasAverage <100)
console.log("No one WN because point so low!!");
else if(dolphinsAverage===KoalasAverage)
console.log("Draw");
else if(dolphinsAverage>KoalasAverage)
console.log('Dolphins is WN ');
else
console.log('Koalas is WN');
