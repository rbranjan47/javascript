const day = 'monday';
//we can use switch statement 

switch(day){
    case 'monday':
        console.log('plan for study time & Go to work also');
        break;

    case 'tuesday':
        console.log('prepare for code also');
        break;

    case 'wednesday':
        console.log('need more code');
        break;

    case 'thursday':
        console.log('more and more code');
        break;

    case 'friday':
        console.log('complete the work and enjoy the night');
        break;

    case 'saturday':
        console.log('rest and enjoy the day');
        break;

    case 'sunday':
        console.log('study more hours');
        break;

    default:
        console.log('study time all time');
}

//statement and expressions
//an expression is an piece of code which produces a value

//Conditional(ternary) operators
const age = 13;
age >= 18 ? console.log('Like to drink wine 🍷') :
console.log(' Like to drink water 💧');

//ternary operators code
const drink = age >= 18 ? 'wine 🍷' : 'water 💧' ;
console.log(drink);

//if else code
let drink2;
if(age >= 18){
    drink2 = 'wine 🍷'
} else {
    drink2 = 'water 💧';
}
console.log(drink2);

//inside console
console.log(`Like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

/*Coding challenge */
const bill_amount = 40;
console.log(`Tip amount is: ${bill_amount >= 50 && bill_amount <= 300 ? bill_amount*0.15 : bill_amount*.20}`);

