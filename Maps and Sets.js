// Quick Question #1
new Set([1, 1, 2, 2, 3, 4]);
// Answer
new Set([1, 2, 3, 4]); // Returns to this because when making a 'set' obj duplicates values are removed and only unique elements are stored.

// Quick Question #2
[...new Set("referee")].join("") 
// Answer
[...new Set("ref")].join("") //returns a string that consists of the unique characters from the string "referee" concatenated together.
// BreakDown: 'referee' is passed as an arugment to the 'Set' constructor: new Set("referee") which makes a unique characters from the string.
// For the spread operator it is being used to spread the 'Set' object into an array. 
// Finally, 'join' is used to result the array into an empty string as the separator.

// Quick Questions #3
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// Answer
[1,2,3] => true
[1,2,3] => false
// Although the keys are both arrays with the same values [1,2,3], they are actually different objects in memory. Because in JS objs including arrays are compared by ref not by value.

// hasDuplicate
hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false
// Answer
function hasDuplicate(array) {
    // Create a new Set from the input array
    const set = new Set(array);
  
    // Compare the size of the Set with the length of the array
    // If they are different, it means there are duplicate elements
    return set.size !== array.length;
  }
  
// vowelCount
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }
// Answer
function vowelCount(str) {
    // Convert the input string to lowercase
    const lowerStr = str.toLowerCase();
    
    // Initialize an empty Map to store the vowel counts
    const vowelMap = new Map();
  
    // Iterate over each character in the string
    for (let char of lowerStr) {
      // Check if the character is a vowel
      if ('aeiou'.includes(char)) {
        // If the vowel is already in the Map, increment its count by 1
        // Otherwise, add the vowel to the Map with a count of 1
        vowelMap.has(char) ? vowelMap.set(char, vowelMap.get(char) + 1) : vowelMap.set(char, 1);
      }
    }
  
    // Return the resulting vowel Map
    return vowelMap;
  }
  