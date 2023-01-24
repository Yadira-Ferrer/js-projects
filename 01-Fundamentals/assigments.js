/* Values and variables */
const country = 'Guatemala';
const continent = 'America';
let population = 13;

console.log(country);
console.log(continent);
console.log(population);

/* Data Types */
let isIsland = false;
let language;

/* let, const and var */
language = 'spanish';

/* Basic Operators */
console.log(population / 2);
population += 1;
console.log(population);
console.log(
  6 > population
    ? 'Finland has more people than my country.'
    : 'Finland has less people than my country.'
);
console.log(
  33 > population
    ? 'My country has less people.'
    : 'My country has more people.'
);

/* Strings and Template Literals */
let description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);
