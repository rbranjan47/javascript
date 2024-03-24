const firstName = 'rabi';
const job = 'software engineer';
const birthYear = 1997;
const currentYear = 2023;

const name1UsingConcat =
  "I'm " +
  firstName +
  ', a ' +
  (currentYear - birthYear) +
  " years old. I'm a " +
  job +
  '!';

console.log(name1UsingConcat);

//Concatenating string using BACKTICKS(`)
const name2UsingBackticks = `I'm  ${firstName} ${
  currentYear - birthYear
} a years old. I'm a ${job}!`;
console.log(name2UsingBackticks);

console.log(
  'Printing using "slash n":  \n\
  Hey! \n\
Good Morning  \n\
How you all?'
);

//Backticks allows to write using \n\
console.log(`Printing using backticks:
Hey!
Good Morning
How you all?`);


//>>>>>>>>>>>>>>>>>>>> Working with String and Its Method <<<<<<<<<<<<<<<<<<<<
const airLine1 = "Air India Tata";
const airLine2 = "Air India Express";

console.log(airLine1[0]);
console.log(airLine2[4]);

//or, we can write directly with string
console.log("Vistara"[2]);
console.log("Tata Airlines".length);

console.log("Hey Good Morning".indexOf("o"));
console.log("Hey Good Morning".lastIndexOf("o"));

console.log("Hey Good Morning".slice(4, 8));

console.log("india is best😍".toUpperCase());
console.log("INDIA IS BEST😍".toLowerCase());

//Just Starting letter capital letter
const data1 = "inDia😍";
const data1LowerCase = data1.toLowerCase();  //convert all to lower case
console.log(data1[0].toUpperCase() + data1LowerCase.slice(1));


//comparing email, TRIM Method
const comparingEmail  = "rbranjan@gmail.com" == "     rbRANJan@gmail.com  \n".toLowerCase().trim() ? "Matched" : "Not Matched";
console.log(comparingEmail);

//Replace Method
const priceDollar = "$ 120";
const priceRuppee = priceDollar.replace("$","₹");
console.log(priceRuppee);


const nameJohn = "John Tan";
const nameNewJohn = nameJohn.replace("John", "John Scott Ledbetter");
console.log(nameNewJohn);

//IMPORTANT -- REPLACE GLOBALLY
const orderFood = `Hey I have order pizza and this pizza is really good in taste Thanks for 
                          offering pizza!`;

console.log(orderFood.replace(/pizza/g, "Biryani"));


//Startswith and ends with
const planeInfo = "Air india Express Vistara";
console.log(planeInfo.startsWith("Air") && planeInfo.endsWith("tara"));


//SubString
const nameSubstring = "Hello Tesla";
const nameNewSubstring1 = nameSubstring.substring(2); //start parameter
const nameNewSubstring2 = nameSubstring.substring(2,8);
console.log(nameNewSubstring1);
console.log(nameNewSubstring2);


//Split Operator, return Array element after breaking string from given characater
const nameSplit = "a+very+nice+string+split";
const nameAfterSplit = nameSplit.split("+");
console.log(nameAfterSplit); 

//to use split to get value
const devInfo = "John Tan is good developer";
let  [firstnameDev, lastnameDev] = devInfo.split(" ");
console.log(firstnameDev, lastnameDev);


//Join method
const nameSplitAndthenJoin = nameAfterSplit.join(" ");  //a very nice string split
console.log(nameSplitAndthenJoin);


//Push method
nameAfterSplit.push("ok");
console.log(nameAfterSplit);


//making capital letter of first character
let arr = [];
for(let n of nameAfterSplit){
  arr.push(n.replace(n[0], n[0].toUpperCase()));
}
console.log(arr);

//Padding  --- Used to add given string with total length
const message = " Hey Good Morning🌄 ";

console.log(message.padStart(25, ">").padEnd(31, "<"));  // added > with included lenth total 25

console.log(message.padEnd(25, "<"));


//Slice Method(x,y) -- Return extracted part of sstring from x to (y-1) position

/*                    A B C D E F G H I J
(left -> Right)       0 1 2 3 4 5 6 7 8 9
(Right -> Left)     -10-9-8-7-6-5-4-3-2-1
*/
const describeAutomation = "Automation testing automates the website!";
console.log(describeAutomation.slice(2)); //tomation testing automates the website!

console.log(describeAutomation.slice(2, 11));

const creditCardDetail = "1234567891011121314";
const creditCardSliced = creditCardDetail.slice(creditCardDetail.length-4);
const creditCardMasked = creditCardSliced.padStart(16, "X");
console.log(`Credit card: ${creditCardDetail}
      Credit Card Sliced: ${creditCardSliced}
      Credit Card Masked: ${creditCardMasked}`);



//Repeat Method, repeat given string to Given number 
console.log(describeAutomation.repeat(4));


//>>>>>>>>>>>>>>>>>>>> MODERN STRING WORKING <<<<<<<<<<<<<<<<<<<<
const flights = "_Air India: vafsjkdsndkbs62784bahbdajgd87323 + _Vistara: hkjdbkbsjc873r973r2r + _Air Asia: jhnkbcsjhcb837gfwuifw + Air India Express:kjcuilhWHY9WDWLEUIFGWEF";

const  flightDetailSpit = flights.split("+");
console.log(flightDetailSpit);

for(let flightUnderSocredRemoved of flightDetailSpit){
  console.log(flightUnderSocredRemoved.replace("_", "").trim());
}
