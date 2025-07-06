/*
>>>>>>>>>>>>>>> Roadmap:
              - Converting & checking numbers
              - Math and Rounding
              - The Remainder operator
              - Working with BigInt
              - Creating Dates using Locale
              - Operations with Dates
              - Internationalizing Dates(Intl)
              - Internationalizing Numbers (Intl)
              - Timers: SetTimeout and setInterval
*/

//- Converting & checking numbers

console.log(23 === 23.0);

//Base 10 - 0 to 9
//Binary 2 - 0 & 1

console.log(0.1 + 0.2);
console.log(10 / 3);

const value = "21";
console.log(typeof value);  //string

////CONVERSION- common method
console.log(typeof Number(value)); //converted into Number

console.log(typeof value); //string

////CONVERSION- JS other way
console.log(typeof +value); //Number
//or 
console.log(typeof +"21"); //Number

//IMP--  to print only integer in string containing numbers
console.log(parseInt("23rem"));
console.log(parseFloat("12.3435454POLO"));


//Is NAN
console.log(Number.isNaN("23"));  //this is a string, false
console.log(Number.isNaN(23));  //this is a number, false
console.log(Number.isNaN("hello23")); //this is a not a number, true

//Is Finite
console.log(Number.isFinite(20));  //true
console.log(Number.isFinite(10 / 0)); //false, as we got infinity
console.log(Number.isFinite(0 / 20));  //true, as we got 0 which is finite

//Is Integer
console.log(Number.isInteger(20));  //true
console.log(Number.isInteger(10 / 0)); //false, as we got infinity
console.log(Number.isInteger(0 / 20));  //true, as we got 0 which is integer
console.log(Number.isInteger(2.09)); //false, as this is decimal



//------------------------ Mathematical Operations ------------------------//
console.log(Math.sqrt(25));  //result -- SQUARE ROOT of 25

console.log(Math.max(12, 14, 16, 18, 20));   //result -- 20 MAXIMUM number
console.log(Math.min(12, 14, 16, 18, 20));   //result -- 12 MINIMUM number

console.log(Math.max(12, 14, parseInt("16World"), parseFloat("good20.9823")));  // NAN - not a number


const randomInt = (start_number, end_number) =>
    Math.floor(Math.random() * (end_number - start_number + 1)) + start_number;

// this floor will round up the decimal
// and then fixing for start_number to end_number, -----
//                                        Math.random() - for random number   
//                                       * (end_number - start_number) = 20-10= 10 , this mean it will be within 0-9 (upto 10 digits/numbers) 
//                                       * (end_number - start_number + 1) = 11, this from 0-10 (as, 10 were allowing 0-9)
//                                       + start_number - whatever number generate from 0-10, it will add 10 more to it. ex. -5 then 5 +10 = 15 and  10 < 15 < 20

console.log(randomInt(10, 20));


// ROUNDING - TRUNC
console.log(Math.trunc(20.3123456));  // remove all decimal value, and result -- 20

// ROUNDING - ROUND
console.log(Math.round(21.2344));  //will round to nearest interger -- 21
console.log(Math.round(21.5344));  //will round to nearest interger -- 22

// ROUNDING - FLOOR 
console.log(Math.floor(21.2920029)); // remove all decimal value, 
//But for negative number, it is rounding to nearest integer. not only removing decimal unlike trunc


console.log(Math.trunc(-23.45));  // result  > -23 
console.log(Math.floor(-23.45));  // result  > -24

//but not for positive number
console.log(Math.trunc(23.45));  // result  > 23 
console.log(Math.floor(23.45));  // result  > 23

//------------------------ Remainder Operator ------------------------//
console.log(5 % 2);  //remainder is 1
console.log(5 / 2);  //2.5 as this is not remainder-- it is result


//------------------------ Numreic Separator ------------------------//
const bankBalancesWant = 1234567890;
console.log(bankBalancesWant);
//But it is very hard to undertand the values like what it is million, billion, trillion
//To ease this we use _
const finalBankBalnceWeWant = 123_456_789_0;
console.log(finalBankBalnceWeWant); //output will same- 1234567890


//>>>>>>>>>>>>>>>>>>>>> BIGINT <<<<<<<<<<<<<<<<<<<<<<<<<
console.log(123456789 * 123456789123456789); //might we get some random numbers

console.log(BigInt(123456789 * 123456789123456789)); 
//or
console.log(12345678998765432111234n);


//>>>>>>>>>>>>>>>>>>>>> DATE CALENDER <<<<<<<<<<<<<<<<<<<<<<<<<
const dateNow = new Date;
console.log(dateNow);

/* ---------- We can als write manually ----------*/
console.log(new Date("June 15, 2025"));  //define Month Date, Year
console.log(new Date("Jun 15 2025 16:49:30")); //define Mon Date Year Hour:Minutes:Seconds
console.log(new Date(2025, 10, 12)); //define Year Month Date   
//but output is Wed Nov 12 2025 00:00:00 GMT+0530 (India Standard Time)  - 10 is for october but
// here it is november as JS starts MONTHS from 0l̥

const dateFormat = new Date(2025, 10, 6,23, 11,50);
console.log(`Year ${dateFormat.getFullYear()}`);
console.log(`Month ${dateFormat.getMonth()}`);
console.log(`Date ${dateFormat.getDate()}`);
console.log(`Hours ${dateFormat.getHours()}`);
console.log(`Seconds ${dateFormat.getSeconds()}`);
console.log(`ISOString- ${dateFormat.toISOString()}`);
console.log(`TimeOffSet- ${dateFormat.getTimezoneOffset()}`);
console.log(dateFormat.getTime());
console.log(new Date(1762450910000));

//------------------------ Operations with Dates ------------------------//
const daysPassed = (date1, date2) => (date1 - date2);

console.log(`second passed: ${daysPassed(dateFormat, new Date(2025, 10, 6, 23, 11, 49))/1000}`)
console.log(`Hour passed: ${(daysPassed(dateFormat, new Date(2025, 10, 6, 12, 11, 50))/1000)/(60 * 60) }`)
console.log(`Days passed: ${daysPassed(dateFormat, new Date(2025, 10, 2, 23, 11, 50))/(1000 * 60 * 60 * 24)}`)


//------------------------ Internationalizing Date (Intl) ------------------------//
const now = new Date();
console.log(now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric" 
}));  // July 6, 2025


console.log(now.toLocaleDateString("en")); // 7/6/2025 (by default it is US format))
console.log(now.toLocaleDateString("en-IN")); // 6/7/2025 (it is Indian format)
console.log(now.toLocaleDateString("en-UK")); // 06/07/2025 (it is UK format)
console.log(now.toLocaleDateString("ar-SY")); // ٦/٧/٢٠٢٥ (in arabic symbols)


//By Intl object
console.log(new Intl.DateTimeFormat("en-US").format(now)); // 7/6/2025
console.log(new Intl.DateTimeFormat("en-IN").format(now)); // 6/7/2025
console.log(new Intl.DateTimeFormat("en-UK").format(now)); // 06/07/2025


//------------------------ Internationalizing Numbers (Intl) ------------------------//
const number = 123456.789;
console.log(new Intl.NumberFormat("en-US").format(number)); // 123,456.789
console.log(new Intl.NumberFormat("en-IN").format(number)); // 1,23,456.789         

//By Intl object
console.log(new Intl.NumberFormat("en-UK").format(number)); // 123,456.789
console.log(new Intl.NumberFormat("en-IN").format(number)); // 123.456,789
console.log(new Intl.NumberFormat("en-US").format(number)); // 123.456,789
console.log(new Intl.NumberFormat("ar-SY").format(number)); // ١٢٣٤٥٦٫٧٨٩   


//------------------------ Timers in JS------------------------//
//setTimeout - Executes a function after a specified number of milliseconds
setTimeout(() => {
    console.log("This is setTimeout, execute after 5 seconds");
}, 5000); 

//setInterval - Executes a function repeatedly, with a fixed time delay between each call
setInterval(() => {
    console.log(`Current time is: ${new Date().toLocaleTimeString()}`);
}, 1000);


//clearTimeout - Stops the execution of a function scheduled by setTimeout
const timeoutId = setTimeout(() => {
    console.log("This will not be executed");
}, 5000);       

clearTimeout(timeoutId); // This will prevent the above timeout from executing  