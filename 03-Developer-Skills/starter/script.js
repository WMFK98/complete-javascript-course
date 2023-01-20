// Remember, we're gonna use strict mode in all scripts now!
'use strict';
const Data1 = [17, 21, 23];
const Data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let bluepint = '';
  for (let i = 0; i < arr.length; i++) {
    bluepint += `...  ${arr[i]}ºC in ${i + 1} days `;
  }
  console.log(bluepint);
};

printForecast(Data1);
printForecast(Data2);
