//Same keys and values
function createInstructor(firstName, lastName) {
  return {
    firstName: firstName,
    lastName: lastName,
  };
}

//ES2015
const createInstructor = (firstName, lastName) => ({
  firstName,
  lastName,
});

//Example
var instructor = createInstructor("John", "Doe");
console.log(instructor);
// Output: { firstName: 'John', lastName: 'Doe' }

//Computed Property Names
var favoriteNumber = 42;

var instructor = {
  firstName: "Colt",
};

instructor[favoriteNumber] = "That is my favorite!";

//ES2015
const favoriteNumber = 42;

const instructor = {
  firstName: "Colt",
  [favoriteNumber]: "That is my favorite!",
};

console.log(instructor);
// Output: { firstName: 'Colt', 42: 'That is my favorite!' }

//Object Methods
var instructor = {
  firstName: "Colt",
  sayHi: function () {
    return "Hi!";
  },
  sayBye: function () {
    return this.firstName + " says bye!";
  },
};
//ES2015
const instructor = {
  firstName: "Colt",
  sayHi() {
    return "Hi!";
  },
  sayBye() {
    return `${this.firstName} says bye!`;
  },
};
console.log(instructor.sayHi()); // Output: "Hi!"
console.log(instructor.sayBye()); // Output: "Colt says bye!"

//createAnimal function
const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
s.bleet(); //"BAAAAaaaa"

//Function to creatAnimal
const createAnimal = (species, verb, noise) => ({
  species,
  [verb]() {
    return noise;
  },
});

const d = createAnimal("dog", "bark", "Woooof!");
console.log(d.species); // Output: "dog"
console.log(d.bark()); // Output: "Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
console.log(s.species); // Output: "sheep"
console.log(s.bleet()); // Output: "BAAAAaaaa"
