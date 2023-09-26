// const isImageFileExtension = function (fileName) {
//   const check = ['png', 'jpg', 'jpeg', 'gif', 'svg'];
//   const type = fileName.split('.');
//   const answer = check.includes(type[type.length - 1]);
//   return answer;
// };
// //1. create object with object literals

// const st1 = { studentId: 651000101, firstname: 'Somchai', lastname: 'Sookjai' };
// console.log(typeof st1);
// console.log(st1);
// const st2 = {}; //empty object
// console.log(typeof st2);
// console.log(Object.keys(st1)); //array of property key
// console.log(Object.values(st1)); //array of property value
// const st3 = { firstname: 'Suda', lastname: 'Jaidee', studentId: 651000102 };
// console.log(st3);
// //composite object : address object is nested in st4 object

// const st4 = {
//   firstname: 'Pornchai',
//   lastname: 'Jaidee',
//   studentId: 651000103,
//   address: { province: 'Bangkok', country: 'Thailand' },
//   getFullname: function () {
//     return `${this.firstname} ${this.lastname}`;
//   },
// };

// console.log(st4.getFullname()); //Pornchai Jaidee
// //property value can store function
// const st5 = {
//   firstname: 'Porntip',
//   lastname: 'Dee',
//   studentId: 651000105,
//   getFullname: function () {
//     return `${this.firstname} ${this.lastname}`;
//   },
// };
// console.log(st5.getFullname()); //Porntip Dee

// function rangeOfNumbers(startNum, endNum, curArray = []) {
//   if (startNum == endNum) {
//     curArray.push(startNum);
//     return curArray;
//   } else {
//     curArray.push(startNum);
//     return rangeOfNumbers(++startNum, endNum, curArray);
//   }
// }
// console.log(rangeOfNumbers(1, 5));

// function countdown(n, curArray = []) {
//   if (n < 1) return [];
//   curArray.push(n);
//   if (n == 1) return curArray;
//   else return countdown(--n, curArray);
// }
// parseInt('11001',2) //แปลงเลขฐาน
