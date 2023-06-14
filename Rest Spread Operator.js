function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function (num) {
    return num % 2 === 0;
  });
}

//Refactor it to use rtest operation and arrow functions
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

//Find Min
const findMin = (...nums) => Math.min(...nums);

//Merge Objects
const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2 });

// Double and Return Args
const doubleAndReturnArgs = (arr, ...args) => {
  const doubledArgs = args.map((arg) => arg * 2);
  return [...arr, ...doubledArgs];
};

//Slice and Dice

/** remove a random element in the items array
and return a new array without that item. */

function removeRandom(items) {
  const indexToRemove = Math.floor(Math.random() * items.length);
  return [...items.slice(0, indexToRemove), ...items.slice(indexToRemove + 1)];
}
const removeRandom = (items) => {
  const indexToRemove = Math.floor(Math.random() * items.length);
  return [...items.slice(0, indexToRemove), ...items.slice(indexToRemove + 1)];
};

/** Return a new array with every item in array1 and array2. */

function extend(array1, array2) {
  return [...array1, ...array2];
}

const extend = (array1, array2) => [...array1, ...array2];

/** Return a new object with all the keys and values
from obj and a new key/value pair */

function addKeyVal(obj, key, val) {
  return { ...obj, [key]: val };
}

const addKeyVal = (obj, key, val) => ({ ...obj, [key]: val });

/** Return a new object with a key removed. */
function removeKey(obj, key) {
  const { [key]: deletedKey, ...rest } = obj;
  return rest;
}
const removeKey = (obj, key) => {
  const { [key]: deletedKey, ...rest } = obj;
  return rest;
};

/** Combine two objects and return a new object. */
function combine(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

const combine = (obj1, obj2) => ({ ...obj1, ...obj2 });

/** Return a new object with a modified key and value. */

function update(obj, key, val) {
  return { ...obj, [key]: val };
}
const update = (obj, key, val) => ({ ...obj, [key]: val });
