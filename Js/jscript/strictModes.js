// Enforces stricter parsing and error handling the code at runtime
'use strict';
let counter;
function catchTheProblem() {
  for (counter = 1; counter <= 10; counter++) {
    console.log(`counter is not defined ${counter}`);
  }
}

catchTheProblem();

let hasDriverLicense = false;
const passTest = true;

if (passTest) hasDriverLicense = true;
if (hasDriverLicense) console.log('Drive, Enjoy!');
