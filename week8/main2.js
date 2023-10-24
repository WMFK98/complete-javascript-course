const students = [
  //
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
    testScore: [50, 6, 70, 90, 90],
  },
  {
    name: 'd',
    attendance: [true, false, true, true, true],
    testScore: [50, 60, 70, 90, 90],
  },
];

// for (let i = 0; i < 20; i++) {
//   console.log(i);
// }

function getAttendanceRate(student = students[0]) {
  //   student.attendance.forEach((el) => console.log(el));

  const pass = student.attendance.filter((el) => el === true).length;

  //   const pass = student.attendance.filter(function (el) {
  //     return el === true;
  //   }).length;

  const percentage = (pass / student.attendance.length) * 100;
  return percentage;
}

// getAttendanceRate();

function getAttendanceRate(student) {
  //   student.attendance.forEach((el) => console.log(el));
  const pass = student.attendance.filter((el) => el === true).length;
  const percentage = (pass / student.attendance.length) * 100;
  return percentage;
}

function avgScore(student) {
  const totalScore = student.testScore.reduce((total, el) => total + el, 0);
  const avgScore = totalScore / student.testScore.length;
  return avgScore;
}

// avgScore();

function underPerformStudent(allStudent) {
  const tranfrom = allStudent.map((el) => {
    return {
      name: el.name,
      attendanceRate: getAttendanceRate(el),
      avgScore: avgScore(el),
    };
  });

  const FFF = tranfrom.filter(
    (el) => el.attendanceRate < 80 && el.avgScore < 70
  );

  return FFF;
}

underPerformStudent(students);
