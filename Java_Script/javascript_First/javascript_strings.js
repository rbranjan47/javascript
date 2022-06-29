const my_name = 'rabi';
const job = 'software engineer';
const birth_year = 1997;
const current_year = 2021;

const view = "I'm "+ my_name + ". and i'm "+ (current_year-birth_year) + "years old and having profession "+ job +"!";
console.log(view);
console.log(typeof(view));   //string

//String temp, using back ticks
const viewNew = `I'm ${my_name}, a ${job} and am ${current_year-birth_year} year old!`;
console.log(viewNew);

//back-ticks allows us to write variables inside string in much easier way, than normal cancatination
console.log(`string with \n \n multiple \n lines`);

//but will also use as
console.log(`string
multiple line 
without using slash n`);

