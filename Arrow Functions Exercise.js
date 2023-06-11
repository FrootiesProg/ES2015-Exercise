// ES5 Map Callback

function double(arr) {
  return arr.map(function (val) {
    return val * 2;
  });
}
var array = [1, 2, 3, 4, 5];
var doubleArray = double(array);
console.log(doubleArray); // Output: [2,4,6,8,]
//The double function takes an array as an argument and uses the map method with a callback function to iterate over each value in the array and double it.
//The resulting array with doubled values is then returned.

// ES2015 Arrow Functions Shorthand

const double = (arr) => arr.map((val) => val * 2);

const array = [1, 2, 3, 4, 5];
const doubledArray = double(array);
console.log(doubledArray); // Output: [2, 4, 6, 8, 10]

// ES2015 Arrow Functions Shorthand

const squareAndFindEvens = (numbers) => {
  const squares = numbers.map((num) => num ** 2);
  const evens = squares.filter((square) => square % 2 === 0);
  return evens;
};

const numbers = [1, 2, 3, 4, 5];
const evenSquares = squareAndFindEvens(numbers);
console.log(evenSquares); // Output: [4, 16]
