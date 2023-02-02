'use strict';

/* FUNCTIONS */
/* function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}.`;
}

const guatemala = describeCountry('Guatemala', 13, 'Guatemala');
const france = describeCountry('France', 26, 'Paris');
const germany = describeCountry('Germany', 18, 'Berlin');

console.log(`${guatemala}\n${france}\n${germany}`); */

/* FUNCTION DECLARATIONS VS EXPRESSIONS */
function percentageWorld1(population) {
  return (population * 100) / 7900;
}

/* console.log(
  `${percentageWorld1(1500)}\n${percentageWorld1(2520)}\n${percentageWorld1(
    80
  )}`
);

const percentageWorld2 = function (population) {
  return (population * 100) / 7900;
};

console.log(
  `${percentageWorld2(1500)}\n${percentageWorld2(2520)}\n${percentageWorld2(
    80
  )}`
); */

/* ARROW FUNCTIONS */
/* const percentageWorld3 = (population) => (population * 100) / 7900;
console.log(
  `${percentageWorld3(1500)}\n${percentageWorld3(2520)}\n${percentageWorld3(
    80
  )}`
); */

/* FUNCTIONS CALLING OTHER FUNCTIONS */
/* function describePopulation(country, population) {
  return `${country} has ${population} million people, which is about ${percentageWorld1(
    population
  )}% of the world.`;
}

console.log(describePopulation('Guatemala', 1500)); */

/* CODING CHALLENGE 1 */
/* const calcAverage = (scr1, scr2, scr3) => (scr1 + scr2 + scr3) / 3;
let dolphinScore = calcAverage(44, 23, 71);
let koalaScore = calcAverage(65, 54, 49);

const checkWinner = (avgDolphins, avgKoalas) => {
  if (avgDolphins >= avgKoalas * 2) {
    return `🐬s wins the trophy 🏆!!! (${avgDolphins} vs ${avgKoalas}) `;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `🐨s wins the trophy 🏆!!! (${avgKoalas} vs ${avgDolphins})`;
  } else {
    return `No winners today 😒...`;
  }
};

console.log(checkWinner(dolphinScore, koalaScore));

dolphinScore = calcAverage(85, 54, 41);
koalaScore = calcAverage(23, 34, 27);

console.log(checkWinner(dolphinScore, koalaScore)); */

/* INTRO TO ARRAYS */
/* const populations = [1300, 280, 150, 3320];
console.log(populations.length === 4);

const percentage = [
  percentageWorld1(populations[0]),
  percentageWorld1(populations[1]),
  percentageWorld1(populations[2]),
  percentageWorld1(populations[3]),
];
console.log(percentage); */

/* BASIC ARRAY OPERATIONS (Methods) */
/* const neighbours = ['Mexico', 'El Salvador', 'Costa Rica'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany'))
  console.log('Probably not a central European country :D');

neighbours[1] = 'Rep. del Salvador';
console.log(neighbours); */

/* CODING CHALLENGE 2 */
/* const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

let bills = [125, 555, 44];
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(total); */

/* INTRODUCTION TO OBJECTS */
/* const myCountry = {
  country: 'Guatemala',
  capital: 'Guatemala City',
  language: 'Spanish',
  population: 13,
  neighbours: ['Mexico', 'El Salvador', 'Costa Rica'],
}; */

/* DOT VS. BRACKET NOTATION */
/* console.log(
  `${myCountry.country} has ${myCountry.population} million finnish-${myCountry.language} people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;

console.log(myCountry);
 */

/* OBJETC METHODS */
/* const myCountry = {
  country: 'Guatemala',
  capital: 'Guatemala City',
  language: 'Spanish',
  population: 13,
  neighbours: ['Mexico', 'El Salvador', 'Costa Rica'],
  describe: function () {
    return `${this.country} has ${this.population} million finnish-${this.language} people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`;
  },
  isIsland: function () {
    return this.neighbours.length === 0 ? true : false;
  },
};

console.log(myCountry.describe());
console.log(myCountry.isIsland()); */

/* CODE CHALLENGE 3 */
/* const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

if (mark.bmi < john.bmi) {
  console.log(
    `${john.fullName}'s BMI (${john.calcBMI()} is higher than ${
      mark.fullName
    }'s (${mark.calcBMI()})`
  );
} else {
  console.log(
    `${mark.fullName}'s (${mark.calcBMI()}) is higher than ${
      john.fullName
    }'s BMI (${john.calcBMI()})`
  );
} */

/* ITERATION: THE FOR LOOP */
/* for (let i = 1; i <= 50; i++) {
  console.log(`Vote number ${i} is currently voting.`);
} */

/* LOOPING ARRAYS, BREAKING AND CONTINUING*/
/* const populations = [10, 1441, 332, 83];
const percentages2 = [];

for (let population in populations) {
  percentages2.push(percentageWorld1(population));
}

console.log(percentages2); */

/* LOOPING BACKWARDS AND LOOPS IN LOOPS */
/* const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let listOf of listOfNeighbours) {
  for (let neighbour of listOf) {
    console.log(neighbour);
  }
} */

/* THE WHILE LOOP */
/* const populations = [10, 1441, 332, 83];
const percentages3 = [];

let index = 0;
while (index < populations.length) {
  percentages3.push(percentageWorld1(populations[index]));
  index++;
}

console.log(percentages3);
 */

/* CODING CHALLENGUE 4 */
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = (bill) => {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};

const calcAverage = (arr) => {
  let sum = 0;
  for (let val of arr) {
    sum += val;
  }
  return sum / arr.length;
};

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(totals);
console.log(calcAverage(totals));
console.log(calcAverage(tips));
