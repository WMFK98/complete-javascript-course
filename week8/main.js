// const studentScores = [
//   { name: 'Alice', score: 85 },
//   { name: 'Bob', score: 92 },
//   { name: 'DAVID', score: 79 },
//   { name: 'Charlie', score: 68 },
//   { name: 'David', score: 85 },
//   { name: 'Eve', score: 78 },
//   { name: 'dabiv', score: 85 },
// ];
// const getPassingNames = function (studentScores = []) {
//   return studentScores
//     .filter((studentScore) => studentScore.score >= 70)
//     .map((whopassing) => whopassing.name.toUpperCase());
// };

// // const passingNames = getPassingNames(studentScores);
// // console.log(passingNames);

// const ans = studentScores.filter(
//   (st) => st.name.toLowerCase() === 'david' && st.score >= 80
// );
// console.log(ans);

// const fruits = ['apple', 'mango', 'orange', 'pineapple'];
// const char = ['a', 'e', 'i', 'o', 'u'];
// const ans2 = fruits.every((f) => char.includes(f.charAt(0)));
// console.log(ans2);

// const ans3 = fruits.reduce((s, f) => s + f[0], '');
// console.log(ans3);

// const sellProducts = [
//   { id: 1, price: 100, sell: 5 },
//   { id: 2, price: 50, sell: 2 },
//   { id: 3, price: 25, sell: 10 },
// ];

// const ans4 = sellProducts.reduce(
//   (total, { price, sell }) => total + price * sell
// );
// console.log(ans4);

// const nums = [1, 10, 1000, -2, 3, 5, 50];
// nums.sort((a, b) => a - b);
// console.log(nums);

// const data = [
//   { id: 2, fullname: 'Ann Smith' },
//   { id: 3, fullname: 'John Lee' },
//   { id: 1, fullname: 'ausan Jo' },
//   { id: 1, fullname: 'Busan Jo' },
//   { id: 1, fullname: 'Ausan Jo' },
//   { id: 1, fullname: 'ausan Jo' },
// ];

// const fullname = function (objs = data) {
//   return objs.sort((a, b) =>
//     a.fullname.toLowerCase().localeCompare(b.fullname.toLowerCase())
//   );
// };

// console.log(fullname(data));

const students = [
  {
    name: 'a',
    attendance: [true, false, true, true, true],
    testScore: [90, 90, 90, 90, 90],
  },
  {
    name: 'b',
    attendance: [true, true, false, true, true],
    testScore: [60, 100, 80, 90, 90],
  },
  {
    name: 'c',
    attendance: [true, false, false, true, true],
    testScore: [50, 60, 70, 90, 90],
  },
  {
    name: 'd',
    attendance: [true, false, true, true, true],
    testScore: [50, 60, 70, 90, 90],
  },
];

const getAttendanceRate = function ({ attendance }) {
  const countPresent = attendance.filter((istrue) => istrue).length;
  return (countPresent / attendance.length) * 100;
};

const getAvgScore = ({ testScore }) =>
  testScore.reduce((sum, score) => sum + score, 0) / testScore.length;

const underPerformStudent = (studentsAll) => {
  const result = studentsAll
    .map((student) => {
      return {
        name: student.name,
        attendanceRate: getAttendanceRate(student),
        avgScore: getAvgScore(student),
      };
    })
    .filter((student) => student.avgScore >= 80);
  return result;
};

console.log(underPerformStudent(students));

// function geeting() {
//   return 'hello';
// }

// function isfn(fn) {
//   return fn;
// }
// function isfnResult(fn) {
//   return fn();
// }
// 'hello'();
// console.log(isfn(geeting())); //hello
// console.log(isfn(geeting)); //function geeting()
// console.log(isfnResult(geeting())); //error
// console.log(isfnResult(geeting)); //hello
