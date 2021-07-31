//  actually 2021 is repeating here, so we are changing with a variable
const now = 2021;

const age_rabi = now-1995;
const age_rubi = now-1993;
const age_khushbu = now-1991;
console.log(age_rabi, age_rubi, age_khushbu);

//we can also perform others actions like
console.log(age_rabi*2, age_rubi+10, age_khushbu%2);

//simple multiple
console.log(2*3);

//multiplication of 2 3 times, i.e. 2*2*2
console.log(2**3);

//concatenation of strings
const firstname = 'Rabi';
const lastname = 'Ranjan';
console.log(firstname +' '+lastname);



//Assignment operators
let x = 10+5;
console.log(x);
x += 10;
console.log(x); //x= x+10

x *= 4;
console.log(x); //x = x*4

x++; //x+1
console.log(x);

x--; //x-1
console.log(x);


//comparison operators
const a = 10;
const b = 20;
if(a>b){
    console.log('a is greater than b');
}else {
    console.log('a is smaller than b');
}


console.log(a===b); //identical 
console.log(a!==b); //not identical

console.log(a==b); //is equal to
console.log(a!=b); //is not equal to

const current_year = 2021;
console.log(current_year - 2018 > current_year - 2017);


//assignment -------- 01
//BMI = mass/height ** 2 ==> mass/height * height 
//1. we need to store the mark and John height in a variables 
//2. calculate the BMI's using the formula
//3. Create a boolean variables 'markHigherBMI' containing information about whether mark has a higher BMI than john
//TEST DATA 1: Marks weight 78 kg and is 1.69 tall & Johns weight 92kg and is 1.95 tall
var mark_weight = 78;
var mark_height = 1.69;
var mark_bmi = mark_weight /mark_height**2;
console.log(mark_bmi);

var john_weight = 92;
var john_height = 1.95;
var john_bmi = john_weight /john_height**2;
console.log(john_bmi);

console.log(mark_bmi > john_bmi);


//TEST DATA 2:  Marks weight 95 kg and is 1.88 tall & Johns weight 85kg and is 1.76 tall
var mark_weight = 95;
var mark_height = 1.88;
var mark_bmi = mark_weight /mark_height**2;
console.log(mark_bmi);

var john_weight = 85;
var john_height = 1.76;
var john_bmi = john_weight /john_height**2;
console.log(john_bmi);

console.log(mark_bmi > john_bmi);