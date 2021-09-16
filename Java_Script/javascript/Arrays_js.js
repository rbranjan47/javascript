//Arrays
const friends = ["lucy", "michel", "steven", "peter"];
console.log(friends);

//using function to Create an array
const years = new Array(2001, 2002, 2003, 2004, 2005, 2006, 2021);
console.log(years);

//accessing the elements of array
console.log(years[0]);

//length of an array
console.log(years.length);
//last element
console.log(years[years.length - 1]);

//changing the elements
years[2] = "rabi"; //we can remove elements but not whole arrays
console.log(years);
console.log(years[2]);

const intro = ["rabi", "ranjan", 2021 - 1995, "software engineer"];
console.log(intro);

//calculating age, also used in function
const calAge = function (birthYear) {
  return 2021 - birthYear;
};
const year = [2001, 2002, 2003, 2004, 2005, 2006, 2021];
console.log(calAge(year[0]));
console.log(calAge(year[5]));

//using loop
for (let i = 0; i <= year.length - 1; i++) {
  console.log(calAge(year[i]) + "");
}

//using for each loop
for (let z in year) {
  console.log(calAge(year[z]) + "");
}

//passing function to define an array
const ages = [
  calAge(year[0]),
  calAge(year[1]),
  calAge(year[2]),
  calAge(year[3]),
  calAge(year[4]),
];
console.log(ages);

//iterating through Javascript
var iterator = ages.values();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

const friend = ["abc", "bcd", "cde", "def", "efg"];
//pushing(adding on the last) the elements in array
friend.push("ghi");
console.log(friend);

//unshift(adding) on the top
friend.unshift("xyz");
console.log(friend);

//remove(last) elements
friend.pop();
console.log(friend);

//remove(first)
friend.shift();
console.log(friend);

//index of element
console.log(friend.indexOf("abc"));
console.log(friend.indexOf("bcd"));

//using try catch
try {
  console.log(friend.indexOf("xxx"));
} catch (error) {
  console.log(friend.indexOf("abc"));
}
console.log(friend.indexOf("def"));

//check whether element present or not
console.log(friend.includes("abc"));
console.log(friend.includes("xxx"));

//includes helps to implement logics
friend.includes("abc") ? console.log("present") : console.log("not present");

/*coding challenge:
Steven is building his tip calculator, using the same rules
Tip is 15% is bill amount is between 50 & 300
Otherwise, Tip is 20%.


1. Create a arrow functions 'calTip' to calculate the average of 3 scores
2. Use array to create an array 'bills' containing the test data below.
3. Create an array 'tips' containing the tip value for each bill, calculated from the function tip.
4. Create an array 'total' containing the tip values and bill amount. i.e. bill +tip

Test Data1: 125, 555, and 44
*/

const calTip = (tip) => {
  let tipAmount;
  if (tip >= 50 && tip <= 300) {
    tipAmount = tip * 0.15;
  } else {
    tipAmount = tip * 0.2;
  }
  return tipAmount;
};

const bills = [125, 555, 44];
console.log(bills);

const tips = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])];
console.log(tips);

const totals = [bills[0] + tips[0], bills[0] + tips[0], bills[0] + tips[0]];
console.log(totals);
