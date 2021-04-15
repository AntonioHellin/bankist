/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // SLICE
// // slice() method we can extract part of any array, but without changing the original array
// console.log(arr.slice(2)); // Array with c, d and e
// console.log(arr.slice(2, 4)); // Array starting from c and EXCLUDING e
// console.log(arr.slice(-1)); // Array starting from last position
// console.log(arr.slice(-2)); // Array starting from last position and showing the next one
// console.log(arr.slice(1, -2));
// console.log(arr.slice()); // To create a shadow array
// console.log([...arr]); // To create a shadow array

// // SPLICE
// // splice() method we can extract part of any array changing the original array
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// arr = ['a', 'b', 'c', 'd', 'e'];
// let arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2); // Reverse mutate also the original string

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

// LESSON 142

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   // for (const movement of movements) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// console.log('---- FOREACH ----');

// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

/* 
0: function(200)
1: function(450)
2: function(400)
.
.
.
*/

// LESSON 143

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// // Map
// currencies.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // Set
// const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
// console.log(currenciesUnique);
// currenciesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

/*
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
🐶
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far 😉
*/

// Data 1
// const dogsJulia = [3, 5, 2, 12, 7];
// const dogsKate = [4, 1, 15, 8, 3];

// // Data 2
// const dogsJulia2 = [9, 16, 6, 8, 3];
// const dogsKate2 = [10, 5, 6, 1, 4];

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaCorrected = dogsJulia.slice(1, dogsJulia.length - 2);
//   const dogsKateShadow = dogsKate.slice();
//   const dogsJuliaKate = dogsJuliaCorrected.concat(dogsKateShadow);

//   dogsJuliaKate.forEach(function (age, i) {
//     const type = age >= 3 ? 'adult' : 'puppy';

//     console.log(`Dog number ${i + 1} is an ${type}, and is ${age} years old.`);
//   });
// };

// console.log('---- DATA 1 ----');
// checkDogs(dogsJulia, dogsKate);

// console.log('---- DATA 2 ----');
// checkDogs(dogsJulia2, dogsKate2);

// LESSON 147: DATA TRANSFORMATION: MAP, FILTER, REDUCE

/*
MAP: to loop over arrays, similar to forEach but with the different that map create a new array based on the original array.

FILTER:  to filter element in the original array which satisy a certain condition. Returns a new array.

REDUCE: reduce boils (reduces) all array elements down to one single value (example: adding all elements together). Returns the reduce value.
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const eurToUsd = 1.1;

// // Functional programming (more modern way for programming)
// const movementsUSD = movements.map(function (mov) {
//   return mov * eurToUsd;
// });

// const movementsUSDarrow = movements.map(mov => mov * eurToUsd);

// console.log(movementsUSD);
// console.log(movementsUSDarrow);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescriptions = movements.map(function (mov, i) {
//   if (mov > 0) {
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//   }
// });
// const movementsDescriptions = movements.map(
//   (mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
//       mov
//     )}`
// );
// console.log(movementsDescriptions);

// LESSON 150: FILTER METHOD

// const deposit = movements.filter(mov => mov > 0);
// const withdrawls = movements.filter(function (mov) {
//   return mov < 0;
// });
// console.log(movements);
// console.log(deposit);
// console.log(withdrawls);

// LESSON 151: REDUCE METHOD
// acc = accumulator, cur = current value, i = iteraction, arr = entire array
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0); // This 0 will be the initial value
// const balance = movements.reduce((acc, cur) => acc + cur, 0);

// console.log(balance);

// Maximum value
// const max = movements.reduce(
//   (acc, mov, i, arr) => (acc > mov ? acc : mov),
//   movements[0]
// );
// console.log(max);

// CHALLENGE 2

/*
Coding Challenge #2
Let's go back to Julia and Kate's study about dogs. This time, they want to convert
dog ages to human ages and calculate the average age of the dogs in their study.
Your tasks:
Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
ages ('ages'), and does the following things in order:
1. Calculate the dog age in human years using the following formula: if the dog is
<= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
humanAge = 16 + dogAge * 4
2. Exclude all dogs that are less than 18 human years old (which is the same as
keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know
from other challenges how we calculate averages 😉)
4. Run the function for both test datasets
Test data:
§ Data 1: [5, 2, 4, 1, 15, 8, 3]
§ Data 2: [16, 6, 10, 5, 6, 1, 4]

*/

const ageDogs1 = [5, 2, 4, 1, 15, 8, 3];
const ageDogs2 = [16, 6, 10, 5, 6, 1, 4];

const calcAverageHumanAgefunction = function (ages) {
  const humanAge = ages.map(function (age, i) {
    if (age <= 2) {
      return 2 * age;
    } else {
      return 16 + age * 4;
    }
  });
  const adultDogs = humanAge.filter(function (age) {
    return age >= 18;
  });
  console.log(humanAge);
  console.log(adultDogs);
  const average =
    adultDogs.reduce((acc, age) => acc + age, 0) / adultDogs.length;
  return average;
};

const avg1 = calcAverageHumanAgefunction(ageDogs1);
const avg2 = calcAverageHumanAgefunction(ageDogs2);
console.log(avg1, avg2);
