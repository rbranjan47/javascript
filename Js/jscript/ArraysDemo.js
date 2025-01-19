// >>>>>>>>>>>>>>>>>>>>>>>>>> ARRAY <<<<<<<<<<<<<<<<<<<<<<<<<

//Arrays > Special Variables, store more than 1 values

'use strict';

const names = ['Corbin', 'Scott', 'John', 'Thomas', 'Damitra'];
console.log(names);

console.log(names[2]);
console.log(names[2]);

//length of array
console.log('Array length: ' + names.length);

//Replacing array values.But names declared with const, since Array values is not Primitive type

names[3] = 'David';
console.log(names);

//Adding more elements
names[names.length] = 'thomas';
console.log(names);

const values = [1995, 1996, 1997, 1998, 1999, 2000];
function calcAge1(years) {
  return 2023 - years;
}

console.log(calcAge1(values[0]));
console.log(calcAge1(values[1]));
console.log(calcAge1(values[2]));
console.log(calcAge1(values[3]));
console.log(calcAge1(values[4]));
console.log(calcAge1(values[5]));
console.log(calcAge1(values[6])); //NAN

/*----------- Operation on Array -----------*/
//PUSHING IN ELEMENT-----Adding elements to Array
names.push('Nick');
console.log(names);


values.push(2001);
console.log(values);

//POPPING OUT ELEMENT-----removing elements
names.pop(); //removes last element of array i.e . Nick
console.log(names);

names.shift(); //shift array to next from first element of array i.e. corbin
console.log(names);

//Index of elements
console.log('Index: ' + names.indexOf('thomas'));

//Includes elements or not
const includesNames1 = names.includes('Damitra');
console.log(includesNames1);

const includesNames2 = names.includes('Nick');
console.log(includesNames2);

//to string, whole array
const namesString = names.toString();
console.log(namesString);

//to string, array element
const namesStringEle = names[3].toString();
console.log(namesStringEle);

//sorting of array
const valuesSorting = values.sort();
console.log(`Ascending: ${valuesSorting}`);

const valueReverseSorting = values.sort().reverse();
console.log(`Descending: ${valueReverseSorting} `);

//Iterations

let calculatedAge = '';

function calcAge2(actualValue, value, array) {
  calculatedAge += actualValue + '<br>';
}
console.log(values.forEach(calcAge2));

/* >>>>>>>>>>>>>>>>>>>>>>>>> IMPORTANT ARRAY CONCEPTS: <<<<<<<<<<<<<<<<<<<<<<<<<
  -- Simple Array Methods
  -- Looping arrays: forEach
  -- forEach with Maps and Sets
  -- Data Transformations: map, filter, & reduce
  -- The map method
  -- Computing Usernames
  -- The filter method
  -- The reduce method

  -- The magic of Chaining methods
  -- The Find Method
  -- The Find Index Methods
*/

// >>>>> SLICE(startCount, endCount-1) method
let arr01 = ['a', 'e', 'i', 'o', 'u'];;
console.log(arr01);
console.log(arr01.slice(2)); //will start from 2nd index and return rest
console.log(arr01.slice(2, 4)); //will start from 2nd index and return element before 4th


// >>>>> Making Array's shallow copy (means new instance created but the properties or elemenets still refer the same objects/array)
//using spread operator  
console.log([...arr01]);

//using slice method
console.log(arr01.slice());


// >>>>>>>>>>>>>>> SPLICE(startCount, deleteElementCount) method
//Similar to Slice array, but it delete elements from the exisiting array
console.log(arr01);
console.log(arr01.splice(2)); //return from 2nd position to last i.e. [i, o, u]
console.log(arr01);  //return reamining i.e [a, e]

// >>>>>>>>>>>>>>> Reverse method
console.log(arr01);
console.log(arr01.reverse());

// >>>>>>>>>>>>>>> CONCAT method, add 2 arrys into 1
const arr02 = ['q', 'u', 'e', 'r', 't', 'y'];
console.log(arr01.concat(arr02));

/* -- We can also achieve using REST parameter*/
console.log([...arr01, ...arr02]);


// >>>>>>>>>>>>>>> JOIN method  -- return string after adding passed paramter after each element of array
console.log(arr02.join('-'));


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// >>>>>>>>>>>>>>> NEW METHODS OF ARRAY <<<<<<<<<<<<<<< ////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// >> AT method, to access the element of array
const arr03 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9];
console.log(arr01[2]); //return 2nd position element i.e. 3

console.log(arr03.at(2));

// or we can use at position, to use when we don't know last index and element & want to perform action on it
console.log(arr03[arr03.length - 1]);
//or, using slice method
console.log(arr03.slice(-1)[0]);
//or, using splice method
console.log(arr03.splice(arr03.length - 1), 1);

// or using at method
console.log(arr03.at(-1));


// >>>>>>>>>>>>>>> LOOP ARRAY (forEach method) <<<<<<<<<<<<<<<

//Using for of loop (- used for Arrays, String, Map, & Set)
for (const numberItr of arr03) {
  if (numberItr > 5) {
    console.log(`Credited: ${numberItr}`);
  } else {
    console.log(`Debited: ${Math.abs(numberItr)}`);
  }
}

//using forEach
console.log("---------- For Each ----------");
arr03.forEach(function (numbers, i, originalArr) {
  if (numbers > 5) {
    console.log(`For each Credited: ${numbers} at position ${i} having length ${originalArr.length}`);
  } else {
    console.log(`For each Debited: ${Math.abs(numbers)} at position ${i} having length ${originalArr.length}`);
  }
})


// >>>>>>>>>>>>>>> DATA TRANSFORMATION (MAP, FILTER, & REDUCE) <<<<<<<<<<<<<<<


// >>>>>> MAP - return new Array containing results of applying an operation on all original array elements
/*
const newArray = array.map((currentValue, index, array) => {
                   // Return the new value for the new array
                  });
*/
const ruppeeToDollar = 83.40;
console.log(arr03);


const mappedArr03 = arr03.map(function (num) {
  return num * ruppeeToDollar;
  //return 23;  //this will map all position with 23 simply
});

console.log(mappedArr03);

const ruppeeToCanDollar = 60.888;
const mapped01Arr03 = arr03.map((num01) => {
  return num01 * ruppeeToCanDollar;
});

console.log(mapped01Arr03);

//accessing indexs and array
const movement01arr03 = arr03.map((mov, i, originalArray) => {
  if (mov > 0) {
    console.log(`Movement: ${i + 1}: Credited: ${mov} in total ${originalArray.length}`);
  } else {
    console.log(`Movement: ${i + 1}: Debited: ${mov} in total ${originalArray.length}`);
  }
})

//Creating username from name 
const name01 = "Rabi Ranjan kumar";
const username = name01.toLowerCase().split(' ');
console.log(username);
const usernameFinal = username.map(function (firstLetter) {
  return firstLetter[0];
}).join('');
console.log(usernameFinal);



// >>>>>> FILTER - return a new Array containing thr array elements that pass a specified condition
/* const newArray = array.map((currentValue, index, array) => {
               // Return the new value for the new array
                 });
*/

const movement02arr03 = arr03.filter(function (mov) {
  return mov > 0;
});

console.log(movement02arr03);

const movement03arr03 = arr03.filter((mov) => {
  return mov < 0;
});

console.log(movement03arr03);


// >>>>>> REDUCE - return reduced array elements down to one single value (i.e. adding element together)
/*  const newArray = array.reduce(function(accumulator, currentValue, index, array){
                      }, initialValue);  

                      - accumulator = actual value & variable
                      - currentValue = parsing value & variable
                      - index = position of element 
                      - array = array's variable
*/
console.log(arr03);

const movement04arr03 = arr03.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);

console.log('Result ' + movement04arr03);

//Map, Filter, & Reduce - Chanining/ PIPELINE
const movement05arr03_map_filter_reduceChanining = arr03.filter(mov => mov > 0)
  .map(mov => ruppeeToDollar * mov)
  .reduce((accumulator, mov) => accumulator + mov, 0);

console.log("Result: ", movement05arr03_map_filter_reduceChanining);



//Coding Challenge - aVERAGE OF DATA1 & DATA2, USING ARROW FUNCTION
const data1 = [5, 2, 4, 1, 15, 8, 3];
const dataAvg = data1.reduce((acc, startValue) => acc + startValue, 0) / data1.length;
console.log(dataAvg);




/* >>>>>> FIND - return FIRST found element, undefined when not found
               - Iterate all element of array
               - not mutuable, means not change the original array
               - also acceps Callback function 
*/

console.log(data1.find(movData => movData > 2)); //5 is the first element that true the condition

for (let x of data1) {
  if (data1.find(movData => movData > 2)) {
    console.log(x);
  }
}

/*
  >>>>>> FINDINDEX - return FIRST found element, undefined when not found
               - Iterate all element of array
               - not mutuable, means not change the original array
               - also acceps Callback function 
*/
console.log(arr03);  //const arr03 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
console.log(arr03.findIndex(x => x > 5)); //5, as 6 is the element at 5th Position


/* >>>>>> FINDLAST - return FIRST found LAST element, undefined when not found
               - Iterate all element of array
               - not mutuable, means not change the original array
               - also acceps Callback function 

*/

console.log(arr03);  //const arr03 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
console.log(arr03.findLast(x => x > 5)); //9 from last 9 > 5

/*
  >>>>>> FINDLASTINDEX - return FIRST found LAST element, undefined when not found
               - Iterate all element of array
               - not mutuable, means not change the original array
               - also acceps Callback function 
*/
console.log(arr03);  //const arr03 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
console.log(arr03.findLastIndex(x => x > 5)); //8, as 9 is the element from the last at 8th Position from beganining


/*   >>>>>>   >>>>>>   >>>>>>   >>>>>> SOME and EVERY method   <<<<<< <<<<<< <<<<<< <<<<<< 
 >>>>>> SOME - return true if ATLEAST ONE element present in array
             - else False 
             - Checking for partial matches

 >>>>>> EVERY - return true if all given element present and satisfy the condition
             - else False 
             - Checking for uniformity


 But We can use - INCLUDES to check but it is only for equality but NOT for Conditions and test.

 Console.log(arr03.includes(-1));  //true
*/

const someFunction01 = arr03.some(x => x > 10);
console.log(someFunction01); //False

const someFunction02 = arr03.some(x => x > 4);
console.log(someFunction02); //True

const someFunction03 = arr03.some(x => x < -1 * 10);
console.log(someFunction03); // False, no values is less than -10 i.e. -11, -12, ....

const everyFunction01 = arr03.every(x => x > 0);
console.log(everyFunction01); //False, as all values are not greater than 0

const everyFunction02 = arr03.every(x => x > -1 * 10);
console.log(everyFunction02); //true, as all other values more than -10

const everyFunction03 = arr03.every(function (x) { return x > -1 * 20 });
console.log(everyFunction03); //true, as all other values more than -20

//Filter Method - return a new Array containing thr array elements that pass a specified condition
console.log(arr03.filter(x => x > 0));



/* >>>>>> >>>>>> >>>>>> >>>>>> >>>>>>FLAT and FLATMAP method <<<<<< <<<<<< <<<<<< <<<<<< <<<<<< 
 >>>>>> FLAT - returns a new Array by Flattening a nested array(upto a specified depth). 
             - removes nesting levels and concatenates the elements into a single array

    syntax: array.flat(depth)    --- Default value: 1 
*/

//nested array
const arr04 = [1, 2, 3, 4, [5, 6, 7, [8, 9, 10], 11], 12];
console.log(arr04.flat(2));


//But Main Question - How to get Dynamice size value?  ----- pass Infinity 
const arr04Flats = arr04.flat(Infinity);
console.log(arr04Flats);


/*
 >>>>>> FLATMAP - returns a new Array by Mapping and Flattening a nested array.
                - Similar to calling Map function first and then Flat.

      syntax: array.flatMap(callback(currrentValue[, index[, array]])[, thisargs])    --- Default value: 1            

*/


//CODING CHALLENGE
/*
1. Store the Average weight and height of dog breed - HUSKY in huskyWeight and huskyHieght
2. Find the name of the only breed that line both 'Running' and 'Fetching' (in dogBothActivities)
3. Create an array 'uniqueActivities' of all the actvities of the dog breeds
4. Many dog breed like to Swimming. What other activities they do
5. Do all the breeds of average weight of 18 or more. Log to the console true or false
6. Are there ay Active breeds? Active --> More than 3 activity
7. Sum of all averageWeight and averageHeight
*/
const dogBreeds = [
  {
    breed: "Labrador Retriever",
    averageWeight: "25",
    averageHeight: "55",
    activities: ["Swimming", "Fetching", "Hiking"]
  },
  {
    breed: "German Shepherd",
    averageWeight: "22",
    averageHeight: "55",
    activities: ["Herding", "Guarding", "Obedience Training"]
  },
  {
    breed: "Golden Retriever",
    averageWeight: "25",
    averageHeight: "51",
    activities: ["Playing Fetch", "Therapy Work", "Swimming"]
  },
  {
    breed: "Bulldog",
    averageWeight: "18",
    averageHeight: "31",
    activities: ["Relaxing", "Walking", "Socializing"]
  },
  {
    breed: "Poodle",
    averageWeight: "20",
    averageHeight: "38",
    activities: ["Agility Training", "Obedience Training", "Retrieving"]
  },
  {
    breed: "Beagle",
    averageWeight: "9",
    averageHeight: "33",
    activities: ["Tracking", "Hunting", "Playing"]
  },
  {
    breed: "Rottweiler",
    averageWeight: "35",
    averageHeight: "56",
    activities: ["Guarding", "Agility Training", "Hiking", "Fetching"]
  },
  {
    breed: "Siberian Husky",
    averageWeight: "16",
    averageHeight: "50",
    activities: ["Sledding", "Running", "Playing"]
  },
  {
    breed: "Dachshund",
    averageWeight: "7",
    averageHeight: "20",
    activities: ["Digging", "Chasing", "Cuddling"]
  },
  {
    breed: "Boxer",
    averageWeight: "25",
    averageHeight: "53",
    activities: ["Running", "Fetching", "Guarding"]
  }
];


//Solution - 1. Store the Average weight and height of dog breed - HUSKY in huskyWeight and huskyHieght
const dogActivitiesArray01 = [];
for (let a in dogBreeds) {
  dogActivitiesArray01.push(dogBreeds[a].breed + ": " + dogBreeds[a].averageHeight);
}

console.log(dogActivitiesArray01.flat(Infinity));

//or
const allActivities = dogBreeds.flatMap(breed => breed.activities);
console.log(allActivities);



//solution - 2. Find the name of the only breed that line both 'Running' and 'Fetching' (in dogBothActivities)
const dogBothActivities = dogBreeds.find(breeds => breeds.activities.includes("Running") && breeds.activities.includes("Fetching"));


console.log(dogBothActivities);



//solution - 3. Create an array 'uniqueActivities' of all the actvities of the dog breeds
const uniqueActivities = new Set(allActivities);

console.log(Array.from(uniqueActivities));


//solution - 4. Many dog breed like to Swimming. What other activities they do
const otherThanSwimming = dogBreeds.filter(breed => breed.activities.includes("Swimming"));
console.log(otherThanSwimming);

//solution - 5. Do all the breeds of average weight of 18 or more. Log to the console true or false
const areAverageWeight = dogBreeds.every(breed => breed.averageWeight >= 18);
console.log(areAverageWeight);

//solution - 6. Are there ay Active breeds? Active --> More than 3 activity
const areActiveBreeds = dogBreeds.some(breed => breed.activities.length > 3);
console.log(areActiveBreeds);

//solution - 7. Sum of all averageWeight and averageHeight
const sumAverageWeight = dogBreeds.reduce((acc, breed) => acc + Number(breed.averageWeight), 0);
console.log("Average Weight: " + sumAverageWeight);

const sumAverageHeight = dogBreeds.reduce((acc, breed) => acc + Number(breed.averageHeight), 0);
console.log("Average Height: " + sumAverageHeight);



// >>>>>> SORT - return a new Array after sorting it based on Functions
console.log(arr03);

const sortedArray = arr03.sort(); //so sorting is mutating the Array i.e., it is changing the Array

console.log(sortedArray); //  [-1, -2, -3, -4, -5, -6, -7, -8, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//Result is not proper sorted, so we have to create function in it
const sortedArrayFunction = arr03.sort((a, b) =>
  //{ if(a >b ) return 1;
  //if(a < b) return -1;  }
  a - b
);
console.log(sortedArrayFunction);


// >>>>>> >>>>>> >>>>>> >>>>>> ARRAY GROUPING <<<<<< <<<<<< <<<<<< <<<<<<
// - Grouping element to organize or process data.
const groupedArray = Object.groupBy(arr03, x => x > 1 ? "Wild Robot" : " Wall E");
console.log(groupedArray);
/*result: 
Wall E: Array of 10: -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1
Wild Robot: Array of 8 : 2, 3, 4, 5, 6, 7, 8, 9
*/

const arr05Names = ['John', 'Scott', 'Corbin', 'Thomas', 'Damitra', 'Nick', 'Mary', 'Alex', 'Sam'];
console.log(Object.groupBy(arr05Names, x => x.length > 5 ? "Long Names: " : "Short Names: "));
/*result: 
Long Names: Array of 3: ['Corbin', 'Thomas', 'Damitra']
Short Names: Array of 6:  ['John', 'Scott', 'Nick', 'Mary', 'Alex', 'Sam']
*/


// >>>>>> >>>>>> >>>>>> >>>>>> MORE WAYS OF CREATING & FILLING ARRAY <<<<<< <<<<<< <<<<<< <<<<<<
/*
Till now we have created Array like this
  const array01 = [1,2,3,,4,5,6,7,8,9];

  or 
  console.log(new Array(1,2,3,4,5,6,7,8,9));

  But we can create in this way also.
*/

const array001 = new Array(10);
console.log(array001); //It will create EMPTY array of size 10

/* >>>>> >>>>> >>>>> >>>>> FILL method <<<<< <<<<< <<<<< <<<<<

Syntax: array.fill(number_to_fill_in_array);  ex. array.fill(2) then all element will be updated by 2

        array.fill(number_to_fill_in_array, from_what_index)  ex. array.fill(3, 4)

        array.fill(number_to_fill_in_array, from_what_index, upto_what_index)  ex. array.fill(3, 4, 6)
                - so, from 3rd index to 6th index, it will fill 4 to all
*/

array001.fill(2, 3, 6);
console.log(array001);  // [empty × 3, 2,2, 2, empty × 4]

/* >>>>> >>>>> >>>>> >>>>> FROM method <<<<< <<<<< <<<<< <<<<<
*/

const array002FromMethod = Array.from({ length: 10 }, () => 1);
console.log(array002FromMethod); //[1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

const array003FromMethod = Array.from({ length: 10 }, (_, i) => i + 1);
//_ is placeholder for the unused value and i is the Index 
console.log(array003FromMethod); //1, 2, 3, 4, 5, 6, 7, 8, 9, 10] taking current index and adding 1



// >>>>>> >>>>>> >>>>>> >>>>>> toREVERSED, toSORTED, AND toSPLICE <<<<<< <<<<<< <<<<<< <<<<<<
/*
       >>>>>> Reverse method:
                   -- Reverse method is use to Reverse the array and return mutated array
                   -- Mutated array means changed the original Array, so it is destructive array
*/
console.log(array003FromMethod.reverse());
console.log(array003FromMethod); // till here, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


/* To resolve this method, we can use 
       >>>>>>  toReversed method
                   -- Reverse method is use to Reverse the array and return un-mutated array
*/
console.log(array003FromMethod.toReversed()); //reversed without mutating [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(array003FromMethod); //unchouched, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

/* 
>>>>>>  splice method
            -- return mutated array from given (fristIndex) to (givenLastIndex)'s elements
*/

//console.log(array003FromMethod.splice(1, 4, 5)); //return removed element from 1st to 4th index i.e., [9, 8, 7, 6]
//console.log(array003FromMethod); //return remaining element in the array i.e. [10, 5, 5, 4, 3, 2, 1] after adding replaced element

/* 
>>>>>>  toSpliced method
            -- return un-mutated array from given (fristIndex) to (givenLastIndex - 1)'s elements
*/

console.log(array003FromMethod.toSpliced(1, 4, 5)); //return result array after removing given startIndex to endIndex elements with passed elements
console.log(array003FromMethod);