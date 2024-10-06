// >>>>>>>>>>>>>>>>>>>>>>>>>> MAP <<<<<<<<<<<<<<<<<<<<<<<<<

//Map is collection of elements Like Java, stores Key value pairs.
//Map Object can hold Object and Primitive value as key Value pairs.

/*We can Create a Map by:

* Passing an Array to new Map()
* Create a Map and Use Map.set()
*/

const mapEx = new Map();
mapEx.set("name1", "John Tan");
mapEx.set("name2", "Corbin Du Mont");
mapEx.set("name3", "Damitra Gage");
mapEx.set("name4", "Scott Ledbetter");
mapEx.set("name5", "Thomas Hutchins");
mapEx.set("name6", "David Alter");

mapEx.set(1, "Topper");

console.log(mapEx);

//get method
console.log("Getting through key: " + mapEx.get("name1"));
console.log("Getting through key only, which setted above: " + mapEx.get(1));



//Ternary Operator
mapEx.set("open", 11);
mapEx.set("close", 23);
mapEx.set(true, 'Shop is Open!');
mapEx.set(false, "Shop is Closed!");

//If-Else logic
const customerTime = 12;
if (customerTime > mapEx.get("open") && customerTime < mapEx.get("close")) {
    console.log(mapEx.get(true));
}
else {
    console.log(mapEx.get(false));
}

//Map Logic
console.log(customerTime > mapEx.get("open") && customerTime < mapEx.get("close"))
console.log(mapEx.get(true));


//delete method
mapEx.delete("name5");
console.log(mapEx);

//size property
console.log(mapEx.size);

//clear method
// console.log(mapEx.clear());

//getting element 
const arr = [1, 2];
mapEx.set(arr, "storing Array");
console.log(mapEx.get(arr));
console.log(mapEx);


//IMPORTANT:  Conversion of Object to Map
const objectSample = {
    placeName: "Texas",
    placeAlternateName: "",
    placeAlternateName2: "",
    placeCountry: "United States",
    placeState: "Texas Main States",
    placePin: 750093,
    bestFoods: {
        morning: "Pizza",
        afternoon: ["Chicken Rice", "Corn Soup", "Non-veg Soup", "Chow"],
        evening: ["Salad", "Veg Soup"]
    },
    openingHours: {
        sun: "Close",
        sat: {
            open: 9,
            close: 1,
        },
        otherDay: {
            open: 9,
            close: 7,
        },
    },
};

//printing object
console.log("Object is: ", objectSample);

//printing object,as map after converting it to MAP
//and we can access the key value pair of Object
const objectSampleINTOMap = new Map(Object.entries(objectSample));
console.log(objectSampleINTOMap);


//>>>>>>>>>>>>>>>>>>>>>> Iteration in Map <<<<<<<<<<<<<<<<<<<<<<<
//Similar method, to Iterate Object

//Object Iterating
for (let [a, b] of Object.entries(objectSample)) {
    console.log(a, b);
}

//Map
for (let [mapEXKey, mapEXValues] of mapEx.entries()) {
    console.log(mapEXKey, mapEXValues);
}


/*Filter >> Create new Array filled with elements that pass a test provided by a function.
         >> Filter method, does not execute empty elements.
         >> Filter method does not change the original array.
*/

const ages = [32, 33, 16, 40, 12, 18, 74, 9, 11];
const resultAges = ages.filter(checkAdult);

function checkAdult(age) {
    return age >= 18;
}
console.log("Adults are: " + resultAges);


/*Reduce >> Reduce function executes a Reducer function for array element.
         >> Return a Single Value, Based on Function's Accumalated
         >> Does not execute empty Array Function
         >> Does change original Function
*/

const numbers = [15, 5, 19, 10, 12, 23, 25];
const reduced_numbers = numbers.reduce(numbers_funcs);

function numbers_funcs(total, num) {
    total = total + num;
    return total;
}

console.log("Reduced Number: " + reduced_numbers);


//IMPORTANT -- Conversion of MAP to ARRAY, Using SPREAD Operator
console.log("Map Converted to Array: ", [...mapEx]);
console.log("Map-Keys Converted to Array: ", [...mapEx.keys()]);
console.log("Map-values Converted to Array: ", [...mapEx.values()]);
console.log("Map-Enteries Converted to Array: ", [...mapEx.entries()]);

//coding challenge
const gameEvents = new Map([
    [17, '⚽Goal'],
    [36, '🔀Substitution'],
    [47, '⚽Goal'],
    [61, '🔀Substitution'],
    [64, '🟡Yello Card'],
    [69, '🔴Red Card'],
    [70, '🔀Substitution'],
    [72, '🔀Substitution'],
    [76, '⚽Goal'],
    [80, '⚽Goal'],
    [92, '🟡Yellow Card']
]);


//1. Create an Array of 'Events' of different Game Event
const gameEventArray = gameEvents.values();
console.log([...gameEventArray]);

//2. remove yellow card event at minute 64, since it was unfair
gameEvents.delete(64);
console.log(gameEvents);  //return map object
console.log(gameEvents.entries()); //return an Iterator

//3. print this string in console: 
//"An Event happed on Average, every {Value} minutes."
let averageTime = 0;
for (let averageTimeFetch of gameEvents.keys()) {
    averageTime = averageTime + averageTimeFetch;
}
const averageTimeCal = averageTime / 90;
console.log(`An Event happed on average, every ${Number.parseInt(averageTimeCal)} minutes`);

//4. Mark goal first half and second half, based on 45 minutes
for (let [scoredTime, scoredValue] of gameEvents.entries()) {
    if (scoredTime <= 45) {
        console.log(`[First Half] ${scoredTime}: ${scoredValue}`);
    }
    else {
        console.log(`[Second Half] ${scoredTime}: ${scoredValue}`);
    }
}

//Editing DOM -- Document Object Model
//document.body.style.background = "blue"

//BOM -- Browser Object Model
// Represents additional objects provided by the browser(host environment) for the working with everything except DOM
// Functions like -- Alert, Prompt, Confirm are part of BOM

//location.href = "https://google.com";


// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>> FOR EACH IN MAP <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
const indiaLanguages = new Map([
    ["Delhi", "Hindi"],
    ["Punjab", "Punjabi"],
    ["Gujrat", "Gujrati"],
    ["Maharastra", "Marathi"],
    ["Bengal", "Bengali"],
    ["Manipur", "Manipuri"],
    ["Odisha", "Oriya"],
    ["Andhra Pradesh", "Telugu"],
    ["Karnataka", "Kannada"],
    ["Tamil Nadu", "Tamil"],
    ["Kerala", "Malyalam"],
]);

//Using for of loop (Array, Map, Set, String)
for(const [a, b] of indiaLanguages){
    console.log(`${a} Speaks, ${b}`);
}

console.log("---------- For Each ----------");
//using forEach
indiaLanguages.forEach(function(a, b, originalMapIndianLanguages){
    console.log(`${a} Speaks, ${b}. total laguage ${originalMapIndianLanguages.size}`);
});
