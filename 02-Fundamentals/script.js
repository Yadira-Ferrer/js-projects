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

/* CODING CHALLENGE */
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
const neighbours = ['Mexico', 'El Salvador', 'Costa Rica'];
console.log(neighbours);

neighbours.push('Utopia');
console.log(neighbours);

neighbours.pop();
console.log(neighbours);

if (!neighbours.includes('Germany'))
  console.log('Probably not a central European country :D');

neighbours[1] = 'Rep. del Salvador';
console.log(neighbours);
