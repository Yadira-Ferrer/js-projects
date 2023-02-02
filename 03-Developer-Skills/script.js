// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// * Command: live-server

// ? Coding Challenge 1

const temperatures1 = [17, 21, 23];
const temperatures2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let str = '... ';
  for (let i in arr) {
    str += `${arr[i]}°C in ${Number(i) + 1} days ... `;
  }
  console.log(str);
};

printForecast(temperatures1);
printForecast(temperatures2);
