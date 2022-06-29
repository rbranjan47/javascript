//strict mode, has to be very first statement in the code
//for specific function or block, but mostly in the starting of the code
//gives error/bugs at error line

'use strict';

let rabiLicense = false;
const passTest = true;

//passTest ? !rabiLicense : "not able to driver";
if(passTest) rabiLicense = true;
if(rabiLicense) console.log("rabi can drive");