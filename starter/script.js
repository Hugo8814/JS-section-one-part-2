"use strict";

// let hasDriversLincense = false;
// const passTest = true;

// if (passTest) hasDriverLincense = true;
// if (hasDriversLincense) console.log("i can drive");

// //const private = 32;
// //const if = 23

// function logger() {
//   console.log("my name is hugo");
// }
// calling //running // invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges}
//   oranges.`;
//   return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// const appleOrangeJuice = fruitProcessor(3, 4);
// console.log(appleOrangeJuice);

// function describeCountry(country, population, capitalCity) {
//   const facts = `${country} has ${population} people and its capital city is ${capitalCity}`;
//   return facts;
// }
// const uk = describeCountry("england", "74 million", "london");
// console.log(uk);
// const usa = describeCountry("USA", "314 million", "washinton DC");
// console.log(usa);
// const br = describeCountry("brazil", "224 million", "brazila");
// console.log(br);

//fuction del

// function calcAge1(birthYear) {
//   return 2030 - birthYear;
// }

// const age1 = calcAge1(2003);
// console.log(age1);

// //funtion expression
// const calcAge2 = function (birthYear) {
//   return 2030 - birthYear;
// };
// const Age2 = calcAge2(2003);
// console.log(Age2);

// function percentageOfWorld1(pop) {
//   return (pop / 7900) * 100;
// }
// const pop1 = percentageOfWorld1(1100);
// console.log(pop1);
// const pop2 = percentageOfWorld1(100);
// console.log(pop2);
// const pop3 = percentageOfWorld1(500);
// console.log(pop3);

// const popcalc = function (pop21) {
//   return (pop21 / 7900) * 100;
// };
// const pop4 = popcalc(1100);
// console.log(pop4);
// const pop5 = popcalc(700);
// console.log(pop5);
// const pop6 = popcalc(2300);
// console.log(pop6);

// arrow function
// const calcAge3 = (birthYear) => 2030 - birthYear;
// const age3 = calcAge3(2003);
// console.log(age3);

// const yearTilRetire = (birthYear, firstName) => {
//   const age = 2023 - birthYear;
//   const retire = 65 - age;
//   //return retire;
//   return `${firstName} retires in ${retire} years`;
// };
// console.log(yearTilRetire(2003, "hugo"));
// console.log(yearTilRetire(1984, "gisa"));

// const popcalc = (pop21) => {
//   return (pop21 / 7900) * 100;
// };
// const pop4 = popcalc(1100);
// console.log(pop4);
// const pop5 = popcalc(700);
// console.log(pop5);
// const pop6 = popcalc(2300);
// console.log(pop6);

// function cutPieces(fruit) {
//   return fruit * 6;
// }

// function fruitProcessor(apples, oranges) {
//   const applesPieces = cutPieces(apples);
//   const orangePieces = cutPieces(oranges);
//   const juice = `Juice with ${applesPieces} apples pieces and ${orangePieces}
//       oranges pieces.`;
//   return juice;
// }
// console.log(fruitProcessor(2, 4));

// const pop1 = function (pop) {
//   return (pop / 7900) * 100;
// };

// const describePop = function (country, pop) {
//   const per = pop1(pop);
//   const des = `${country} has ${pop} million people, which is about ${per}% of the world.`;
//   console.log(des);
// };

// describePop("UK", 74);

// const pop = function (pop) {
//   return (pop / 7900) * 100;
// };

// const describePop1 = function (country, pop) {
//   const per1 = pop(pop);
//   const des1 = `${country} has ${pop} million
//     people, which is about ${per}% of the world.`;
//   console.log(des);
// };
// describePop1("Portugal", 10);

// const calcAge = function (birthYear) {
//   return 2023 - birthYear;
// };

// const yearTilRetire = function (birthYear, firstName) {
//   const age = calcAge(birthYear);
//   const retire = 65 - age;

//   if (retire > 0) {
//     console.log(`${firstName} retires in ${retire} years`);
//     return retire;
//   } else {
//     console.log`${firstName} has already retired`;
//     return -1;
//   }

//   //return `${firstName} retires in ${retire} years`;
// };

// console.log(yearTilRetire(2003, "hugo"));
// console.log(yearTilRetire(1942, "mike"));

// const calcAverage = (num1, num2, num3) => {
//   return (num1 + num2 + num3) / 3;
// };

// const scoreDolphins = calcAverage(44, 23, 71);
// console.log(scoreDolphins);
// const scoreKoalas = calcAverage(85, 54, 41);
// console.log(scoreKoalas);

// function checkWinner(avgDolhins, avgKoalas) {
//   if (avgDolhins >= avgKoalas * 2) {
//     console.log(`Dolhins win (${avgDolhins} vs ${avgKoalas})`);
//   } else if (avgKoalas >= avgDolhins * 2) {
//     console.log(`Koalas win (${avgKoalas} vs ${avgDolhins})`);
//   } else {
//     console.log("no Team wins...");
//   }
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas));
//
// const friend1 = "bob";
// const friend2 = "danny";
// const friend3 = "mike";

// const friends = [" bob", "tim", "mike"];
// console.log(friends);

// const y = new Array(2003, 100, 23, 244234, 4234, 424);
// console.log(friends[2]);
// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "jay";
// console.log(friends);

// const firstName = "hugo";
// const hugo = [firstName, "pereia", 2026 - 2003, friends, "sigma"];
// console.log(hugo);

// const calcAge = function (birthYear) {
//   return 2026 - birthYear;
// };

// const years = [1990, 1983, 1903, 2003, 2004, 1756];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[2]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [
//   calcAge(years[0]),
//   calcAge(years[2]),
//   calcAge(years[years.length - 1]),
// ];

// console.log(ages);

// const friends = ["bob", "tim", "mike"];
// // add elements
// const newLength = friends.push("jay");
// console.log(friends);
// console.log(newLength);

// friends.unshift("kate");
// console.log(friends);

// ///remove
// friends.pop();

// const popped = friends.pop();
// console.log(popped);
// console.log(friends);

// friends.shift();
// console.log(friends);

// friends.push(23);

// console.log(friends.indexOf("bob"));
// console.log(friends.includes("tim"));
// console.log(friends.includes("kate"));
// console.log(friends.includes("23"));

// if (friends.includes("hugo")) {
//   console.log("hugo is here??");
// }

// const clactip = function (bill) {
//   let tip;
//   if (bill >= 50 && bill <= 300) {
//     bill * 0.15;
//   } else {
//     bill * 0.2;
//   }
//   return tip;
// };

// const calcTip = function (bill) {
//   let tip;
//   if (bill >= 50 && bill <= 300) {
//     tip = bill * 0.15;
//   } else {
//     tip = bill * 0.2;
//   }
//   return tip;
// };

// console.log(calcTip(100));

// const bills = [124, 555, 44];
// const bill1 = calcTip(bills[0]);
// const bill2 = calcTip(bills[1]);
// const bill3 = calcTip(bills[2]);

// console.log(bill1);
// console.log(bill2);
// console.log(bill3);

// const tips = [bill1, bill2, bill3];
// console.log(tip);

// const total = [tips, bills];
// console.log(totals, bills, tips);

// const populations = [4.1, 34, 1200, 3500];
// console.log(populations.length === 4);
// const neighbours = ["Norway", "Sweden", "Russia"];
// neighbours.push("Utopia");
// console.log(neighbours);
// neighbours.pop();
// console.log(neighbours);
// if (!neighbours.includes("Germany")) {
//   console.log("Probably not a central European country :D");
// }
// neighbours[neighbours.indexOf("Sweden")] = "Republic of Sweden";
// console.log(neighbours);

// const jonasArray = [
//   "hugo",
//   "pereira",
//   2023 - 2003,
//   "five guys"[("tim", "Bob", "pat")],
// ];

// const jonas = {
//   firstName: "hugo",
//   lastName: "pereira",
//   age: 2023 - 2003,
//   job: "five guys",
//   friends: [("tim", "Bob", "pat")],
// };

// const myCountry = {
//   country: "uk",
//   capital: "london",
//   language:"english"
//   population:"74 million"
// };

// const jonas = {
//   firstName: "hugo",
//   lastName: "pereira",
//   age: 2023 - 2003,
//   job: "five guys",
//   friends: ["tim", "Bob", "pat"],
// };
// console.log(jonas);

// console.log(jonas.lastName);
// console.log(jonas["lastName"]);

// const nameKey = "Name";
// console.log(jonas["first" + nameKey]);
// console.log(jonas["last" + nameKey]);

// const interIn = prompt(
//   "what do you want to know about hugo? choose between firstname , lastname , age ,job and friends"
// );
// console.log(jonas[interIn]);

// if (jonas[interIn]) {
//   console.log(jonas[interInsad]);
// } else {
//   console.log(
//     " wrong request! choose between firstname , lastname , age ,job and friends "
//   );
// }

// jonas.loction = "uk";
// jonas["twitter"] = "@jonasschmedtman";

// console.log(
//   `${jonas.firstName} has ${jonas.friends.length} friends  and his best friend is called ${jonas.friends[0]}`
// );

// const jonas = {
//   firstName: "hugo",
//   lastName: "pereira",
//   birthYear: 19,
//   job: "five guys",
//   friends: ["tim", "Bob", "pat"],
//   hasDriversLincense: false,

//   calcAge: function () {
//     return 2023 - this.birthYear;
//   },

//   getsum: function () {
//     return `${this.firstName} is a ${this.birthYear} and he has ${
//       this.hasDriversLincense ? "a" : "no"
//     } car`;
//   },
// };

// //jonas.calcAge(2003);
// console.log(jonas.getsum());
// //console.log(jonas.calcAge());
// //console.log(jonas["calcAge"](2003))
// const mark = {
//   fullName: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// const john = {
//   fullName: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = this.mass / (this.height * this.height);
//     return this.bmi;
//   },
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(
//   `${john.fullName}'s BMI (${john.bmi}) is ${
//     john.bmi > mark.bmi ? "higher" : "lower"
//   } than ${mark.fullName}'s (${mark.bmi})!`
// );

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`hugo is the best ${rep}`);
// }

const jonas = [
  "hugo",
  "pereira",
  19,
  "five guys",
  ["tim", "Bob", "pat"],
  "Bob",
];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//   console.log(jonas[i], typeof jonas[i]);

//   // types[i] = typeof jonas[i];
//   types.push(typeof jonas[i]);
// }

// console.log(types);

// const years = [1992, 2010, 2004, 2003];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//   ages.push(2023 - years[i]);
// }
// console.log(ages);

// continue and break
// console.log("--- ONLY STRINGS ---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] !== "string") continue;

//   console.log(jonas[i], typeof jonas[i]);
// }

// console.log("--- BREAK WITH NUMBER ---");
// for (let i = 0; i < jonas.length; i++) {
//   if (typeof jonas[i] === "number") break;

//   console.log(jonas[i], typeof jonas[i]);
// }
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
  const tip = calcTip(bills[i]);
  tips.push(tip);
  totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  return sum / arr.length;
};
console.log(calcAverage([2, 4, 10]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
