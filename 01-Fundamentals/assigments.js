/* bills and variables */
const country = 'Guatemala';
const continent = 'America';
let population = 13;

/* console.log(country);
console.log(continent);
console.log(population); */

/* Data Types */
let isIsland = false;
let language;

/* let, const and var */
language = 'spanish';

/* Basic Operators */
//console.log(population / 2);
population += 1;
/* console.log(population);
console.log(
  6 > population
    ? 'Finland has more people than my country.'
    : 'Finland has less people than my country.'
);
console.log(
  33 > population
    ? 'My country has less people.'
    : 'My country has more people.'
); */

/* Strings and Template Literals */
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
//console.log(description);

/* Taking Decisions: if/else Statements */
// Delete the code accidentally..

/* Equality Operators */
/* const numNeighbours = prompt(
  'How many neighbour countries does your countr have?'
);

if (Number(numNeighbours) === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border...');
} else {
  console.log('No borders :(');
} */

/* Logial Operators */
/* if (language === 'english' && population < 50 && !isIsland) {
  console.log('You should live in Portugal :)');
} else {
  console.log('Portugal does not meet your criteria.');
} */

/* Switch Statement */
/* switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers.');
    break;
  case 'spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
    break;
} */

/* The Conditional (Ternary) Operator */
/* let countryPopulation = population > 33 ? 'above' : 'below';
console.log(`Portugal's population is ${countryPopulation} average.`); */

/* Coding Challenge 1 */
/* const markWeight = 78;
const markHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95; */
const markWeight = 95;
const markHeight = 1.88;

const johnWeight = 85;
const johnHeight = 1.76;

let markBmi = markWeight / markHeight ** 2;
let johnBmi = johnWeight / johnHeight ** 2;

let markHigherBMI = markBmi > johnBmi;

//console.log(markBmi, johnBmi, markHigherBMI);

/* Coding Challenge 2 */
/* if (markBmi > johnBmi) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log("John's BMI is higher than Mark's!");
}

if (markBmi > johnBmi) {
  console.log(`Mark's BMI (${markBmi}) is higher than John's (${johnBmi})!`);
} else {
  console.log(`John's BMI (${johnBmi}) is higher than Mark's (${markBmi})!`);
} */

/* Coding Challenge 3 */
/* const dolphinsAvg = (96 + 108 + 89) / 3;
const koalasAvg = (88 + 91 + 110) / 3;

if (dolphinsAvg > koalasAvg) {
  console.log('🐬 WINS!!!');
} else if (dolphinsAvg === koalasAvg) {
  console.log("IT'S A DRAW!!");
} else {
  console.log('🐨 WINS!!!');
} */

/* const dolphinsAvgB1 = (97 + 112 + 101) / 3;
const koalasAvgB2 = (109 + 95 + 123) / 3;

console.log(dolphinsAvgB1, koalasAvgB2);

if (dolphinsAvgB1 >= 100 && dolphinsAvgB1 > koalasAvgB2) {
  console.log('🐬 WINS!!!');
} else if (koalasAvgB2 >= 100 && dolphinsAvgB1 < koalasAvgB2) {
  console.log('🐨 WINS!!!');
} else {
  console.log("IT'S A DRAW!!");
} */

/* const dolphinsAvgB1 = (97 + 112 + 101) / 3;
const koalasAvgB2 = (109 + 95 + 106) / 3;

console.log(dolphinsAvgB1, koalasAvgB2);

if (dolphinsAvgB1 >= 100 && koalasAvgB2 >= 100) {
  if (dolphinsAvgB1 > koalasAvgB2) {
    console.log('🐬 WINS!!!');
  } else if (dolphinsAvgB1 < koalasAvgB2) {
    console.log('🐨 WINS!!!');
  } else {
    console.log("🐬🐨 IT'S A DRAW!!");
  }
} else {
  console.log('No one wins the trophy 😒');
} */

/* Coding Challenge 4 */
let bill = 275;
let tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total bill ${bill + tip}.`
);
