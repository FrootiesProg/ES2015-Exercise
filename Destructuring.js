// Object Destructuring 1
let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
let { numPlanets, yearNeptuneDiscovered } = facts;

console.log(numPlanets); // Output: 8
console.log(yearNeptuneDiscovered); // Output: 1846

// Object Destructuring 2
let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659,
};

let { numPlanets, ...discoveryYears } = planetFacts;

console.log(discoveryYears); // Output: { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }

// Object Destructuring 3
getUserData({ firstName: "Alejandro", favoriteColor: "purple" }); // Output: "Your name is Alejandro and you like purple"

getUserData({ firstName: "Melissa" }); // Output: "Your name is Melissa and you like green"

getUserData({}); // Output: "Your name is undefined and you like green"

//Array Destructuring 1
let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Output: "Maya"
console.log(second); // Output: "Marisa"
console.log(third); // Output: "Chi"

//Array Destructuring 2
let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings",
];

console.log(raindrops); // Output: "Raindrops on roses"
console.log(whiskers); // Output: "whiskers on kittens"
console.log(aFewOfMyFavoriteThings); // Output: ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

//Array Destructuring 3
let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

console.log(numbers); // Output: [10, 30, 20]

//ES5 Assigning Variables to Object Properties
var obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

var a = obj.numbers.a;
var b = obj.numbers.b;
// Answer
const obj = {
  numbers: {
    a: 1,
    b: 2,
  },
};

const { a, b } = obj.numbers;

console.log(a); // Output: 1
console.log(b); // Output: 2

// ES5 Array Swap
var arr = [1, 2];
var temp = arr[0];
arr[0] = arr[1];
arr[1] = temp;
// Answer
let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

console.log(arr); // Output: [2, 1]

// raceResults()

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre'])

/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/

// Answer
const raceResults = ([first, second, third, ...rest]) => ({ first, second, third, rest });

// Returns
{
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
  