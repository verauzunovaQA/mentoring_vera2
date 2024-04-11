// We are using const keywork for declaring variables (or let, if we need to reassign the variables later)

// Strings:
const cat = "Cat no. 1";
const cat2 = 'Cat no. 2';

// Usage of variables in strings (template literal):
const cat3 = `Cat no. 3 (I dont like: ${cat2})`;

// How to concat two strings:
const twoCats = cat + ", " + cat2;

// Boolean values:
const amIABigCat = true;
const amIANiceCat = false;

// Numbers:
const numberOfPaws = 10;

// Arrays:
const luckyNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Objects:
const person = {
  name: 'Marcin',
  job: 'Proffessional cat lover',
  cats: ['Jhonny', 'Mike'],
  readBooks: [
    {title: 'JS fundamentals', howManyTimesItWasRead: 10},
    {title: 'Another book', howManyTimesItWasRead: 100},
    {title: 'Cat Encyclopedia', howManyTimesItWasRead: 999},
  ]
};

// We can write the functions like:
function add(number1, number2) {
  return number1 + number2;
}

// Usage of a function:
const addition1 = add(1,2);

// We can assign the function to a variable:
const addingFunction = function add(number1, number2) {
  return number1 + number2;
};

const addition2 = addingFunction(1,3);

// Functions that gets immediately called:
(function() {
  console.log('hello Vera!')
})();

// Introducing Arrow functions:
(() => {
  console.log('hello Vera 2!')
})();

// We can also assing arrow functions to the variables:
const callMyCatBack = (catName) => console.log("Go back to me " + catName);


// The simple for loop:
for (let index = 0; index < 10; index++) {
  console.log(index);
}

const catNames = ['Rose', 'Mike', 'Adam', 'Kate', "Mike", "Mice"];

const CatNames = '';

// Iterating over the array values:
catNames.forEach(callMyCatBack);

// Filtering ony the names that starts from a letter "M":
console.log(catNames.filter(catName => catName[0] === "M"));


if("1" == 1) {
  console.log('They are the same! The condition is true!');
}

if("1" === 1) {
  console.log('They are not the same! The condition is false!');
}


// For homework, please try to write a function that we'll use in our calculator app:

function  performCalculation(calculation) {
  // FUNCTIION BODY HERE
}

// We will use it like here:
performCalculation('1 + 2 + (1 * 3)') // This function returns value of 6

