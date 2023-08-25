const getLimit = user => spendingLimits?.[user] ?? 0;

const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

const spendingLimits = {
  jonas: 1500,
  matilda: 100,
};

const addExpense = function (value, description, user = 'jonas') {
  user = user.toLowerCase();

  // let lim = spendingLimits[user] ? spendingLimits[user] : 0;

  // if (value <= lim) {
  //   budget.push({ value: -value, description: description, user: user });
  // }

  if (value <= getLimit(user)) {
    budget.push({ value: -value, description, user });ไม่ต้องใส่ : //เพื่มก็ได้ถ้าเป็นตัวเียวกัน
  }
}
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpens = function () {
  budget.forEach(entry =>{
    // let lim = spendingLimits?.[entry?.user] ?? 0;
    if (entry.value < -getLimit(user)) {
      entry.flag = 'limit';
    }
  })
}


//   for (const entry of budget) {
//     let limit;
//     if (spendingLimits[entry.user]) {
//       limit = spendingLimits[entry.user];
//     } else {
//       limit = 0;
//     }

//     if (el.value < -limit) {
//       el.flag = 'limit';
//     }
//   }
// };
check();

console.log(budget);

const bigExpenses = function (limit) {
  let output = '';
  for (const el of budget) {
    if (el.value <= -limit) {
      output += el.description.slice(-2) + ' / '; // Emojis are 2 chars
    }
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};
}
