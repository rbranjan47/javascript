//true and true > true, AND
// true and false > false, AND

//true and false > true, OR
//true and true > true, OR

const hasDriverLicense = true;
const hasDriverGoodVision = true;
const hasDriverDrinking = false;
const hasDriverDoneBad = false;

console.log(hasDriverLicense && hasDriverGoodVision); //true
console.log(hasDriverLicense && hasDriverDrinking); //false
console.log(hasDriverDrinking && hasDriverDoneBad); //false

console.log(hasDriverLicense || hasDriverGoodVision); //true
console.log(hasDriverLicense || hasDriverDrinking); //true
console.log(hasDriverDrinking || hasDriverDoneBad); //false
