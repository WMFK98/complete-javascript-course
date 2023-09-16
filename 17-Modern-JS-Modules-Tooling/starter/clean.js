
const budget = Object.freeze([
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
]);

const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
}); //freeze คือการทำให้วัตถุตัวนั้นไม่สามารถเปลี่ยนแปลงได้คงที่ตลอดเวลา
//แต่สิ่งนี้ยังสามารถเปลี่ยนในระดับ deep ได้อยู่
getLimit = (limit, user) => limit?.[user] ?? 0;

//pure function
const addExpense = function (state, limits, value, description, user = 'jonas') { // ทางเทคนิคพารามิเตอร์ไม่ควรเกินสาม แต่อันนี้กรณีพิเศษ 
  // โดยที่เอาเพิ่มตรงแปi state , limits เข้ามาเพราะว่าเพื่อที่จะได้แปลงค่าพวกนี้ เป็นตัวก๊อปปี้และหลังทำเสร็จค่อยเอาไปวางทับแทน เพื่อจะได้ฟังก์ชันบริสุทธิ์ที่ไม่มี sideEffect 
  const cleanUser = user.toLowerCase(); // หลีกเลี่ยงการmuittand น่ะงานจริงของฉันตัวแปรใหม่

  // let lim = getLimit(user)


  return value <= getLimit(limits, user) ? [...state, { value: -value, description, user: cleanUser }] : state // ถ้าเงินพออัพเดตค่ะแต่ถ้าไม่ส่งค่าเดิมไป
  // budget.push({ value: -value, description, user:cleanUser });
}

const b1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
addExpense(budget, spendingLimits, 100, 'Going to movies 🍿', 'Matilda');
addExpense(budget, spendingLimits, 200, 'Stuff', 'Jay');
console.log(budget);


const checkBudget2 = function (state, limits) {
  return state.map(entry => entry.value < -getLimit(limits) ? { ...entry, flag: 'limit' } : entry);
}
addExpense(10, 'Pizza 🍕');
addExpense(100, 'Going to movies 🍿', 'Matilda');
addExpense(200, 'Stuff', 'Jay');
console.log(budget);

const checkExpens = function () {
  budget.forEach(entry => {
    // let lim = spendingLimits?.[entry?.user] ?? 0;
    if (entry.value < -getLimit(user)) {
      entry.flag = 'limit';
    }
  })
}


// let output = '';
// for (const entry of budget) {
//   if (entry.value <= -limit) {
//     output += `${entry.description.slice(-2)} / `; // Emojis are 2 chars
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

