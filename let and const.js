// ES5 Global Constants
var PI = 3.14;
PI = 42; // Although it is possible to reassign the value, the uppercase convention suggests it should not be modified
// Using uppercase letters for the variable name (PI), it let other developers know that the value should be treated as a constant and ideally not modified.

// In ES6 you can use the 'const' keyword to define a constant value.
const PI = 3.14;
PI = 42; // Error: Assignment to constant variable
// With the 'const' keyword attempting to modify the value will throw an error.
