let firstName = "Creola";
let middleName = "Katherine";
let lastName = "Johnson";

// Declare a variable called initials that stores the first character of each string.
// This should produce the string "CKJ", but you must not write the characters C, K, or J in the code of your solution.

let initials = `${firstName[0]}${middleName[0]}${lastName[0]}`;
console.log(initials)
// https://www.google.com/search?q=get+first+character+of+string+mdn

function formatAs12HourClock(time) {
  return `${time} am`;
}

const currentOutput = formatAs12HourClock("23:00");
const targetOutput = "11:00 pm";
console.assert(
  currentOutput === targetOutput,
  `current output: ${currentOutput}, target output: ${targetOutput}`)






