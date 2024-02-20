/*
 > De-Structing: Extract values from Array and Object, by assigning them to variable (ECMA6)
  
  
                 >>>>>>>>>>>>>> Destructuring ARRAYS <<<<<<<<<<<<<<
 */

  'use strict';

const personDetails = {
    name: 'John Tan',
    profile: 'Software Engineer',
    locationCountry: 'United states',
    softwareLanguges: ['c#', '.net', 'java', 'javscript', 'typescript'],
    projects: ['Core', 'Affordable', 'RLC', 'Razz', 'Reporting'],
    mainProject: 'ResMan', 

    task: function(startTask, endTask){
      return [this.softwareLanguges[startTask], this.softwareLanguges[endTask]];
    }
};


const arrDemo = [10,12, 14];

const a = arrDemo[0];
const b = arrDemo[1];
const c = arrDemo[2];

console.log(typeof arrDemo);
console.log(a, b, c);



//De-Structuring Array
const [x,y,z] = arrDemo;
console.log(x,y,z);

//or 
let [projectTestFirst, , projectTestSecond] = personDetails.projects;
console.log(projectTestFirst, projectTestSecond);


//Swapping Variables
[projectTestFirst, projectTestSecond] = [projectTestSecond, projectTestFirst];
console.log(projectTestFirst, projectTestSecond);



//getting array element
const [firstTasks, endTasks] =  personDetails.task(1,3);
console.log(firstTasks, endTasks);


//nested array
const arrayNested = [2,3,,[5,6]];
const [p,q,o=1, [r,s]] = arrayNested;
console.log(p,q,o,r,s);



//----------------------------------------------------------------------------------------------//


/*
               >>>>>>>>>>>>>> Destructuring OBJECTS <<<<<<<<<<<<<<
*/

const {name, profile, locationCountry} = personDetails;
console.log(name, profile, locationCountry);

const travelDelhi = {
  famousPlace: "Rajiv Chowk",
  actualLocation: "New Delhi",
  country:"India",
  food: ['Biryani', 'Chap', 'Momos', 'GhupChup', 'Pizza', 'Veg Curry'],
  transportMedian:['car', 'Bike','Bus', 'Aeroplane', 'Metro', 'Train', 'Tuk-Tuk'],
  mostReligious: 'Hindu',
  cityType: 'Metro',
  cityCode: 111,
  travelTime1:{
    startTime: 8,
    endtime: 9,
    travelMode: 'Metro'
  },
  travelTime2:{
    startTime: 7,
    endtime: 10,
    travelMode: 'E-Buses',
  },
  travelTime3:{
    startTime: 10,
    endtime: 10,
    travelMode: 'Tuk-Tuk'
  },
  travelTime4:{
    startTime: 10,
    endtime: 10,
    travelMode: 'E-Bikes'
  },
  alwaysVisit: null,
}

//destructing Objects, and getting data
const {famousPlace, actualLocation, country} = travelDelhi;
console.log(famousPlace, actualLocation, country);  //error


//to make variable name DIFFERENT
const {famousPlace: placetovisit, actualLocation: originPlaces, country:originCountrys } = travelDelhi;
console.log(`${placetovisit}
${originPlaces}
${originCountrys}`);  

//We can fetch Object's Array, by creating Empty array
const {food = [], transportMedian = []} = travelDelhi;
console.log(food, transportMedian);

//Mutating Variables(string concept) i.e. Changing size and assigned values

let aa = 10;
let bb = 20;

const obj = {aa:110, bb:220, cc:330};

({aa, bb} = obj);//In order to perform De-Structing we need to wrap here with Paranthesis
console.log(aa, bb); 

//Destructing Nested Objects
const {travelTime1} = travelDelhi;
console.log(travelTime1);

// We can make variable name different in nested objects
const {travelTime2: 
  {startTime: sTime, 
    endtime:eTime,
    travelMode: tMode,
  }
  } = travelDelhi;

  console.log(sTime, eTime, tMode);


//----------------------------------------------------------------------------------------------//


/*
               >>>>>>>>>>>>>> SPREAD OPERATORS <<<<<<<<<<<<<<
               > an Iterable, for Arrays or String
               > In Object Literal, the spread syntax lists one by one the properties of an Objects and adds the key-value pairs to the New Object
               
               > Syntax is similar to Spread Operator but Works Opposite to it.
*/

//IMPORTANT >>>>>   Use of Spread Operator in ARRAY
const arrDemoAddition = [20, 40, 60, 80, 100];

const arrDemoArrayAddition = [10,30, 40, 50, 60, arrDemoAddition[0],arrDemoAddition[1], arrDemoAddition[2],arrDemoAddition[3], arrDemoAddition[4]];
console.log(arrDemoArrayAddition);
//or, using spread operator
const newArrDemo = [10,30, 40, 50, 60, ...arrDemoAddition];
console.log(newArrDemo);

const newArraysAfterAddition = [...newArrDemo, "Tokyo", "Professor", "Rio"];
console.log(newArraysAfterAddition);

//adding food and TranssportMedian of Above Object's Arrays
const combinedArrays = [...travelDelhi.food,...travelDelhi.transportMedian];
console.log(combinedArrays);



const str = 'Professor';
const sprededTaks = [...str];
console.log(sprededTaks);   //['P', 'r', 'o', 'f', 'e', 's', 's', 'o', 'r']

const tasks = [...str, ' ', 'P.'];  //spreaded and added mentioned text
console.log(tasks); //['P', 'r', 'o', 'f', 'e', 's', 's', 'o', 'r', 'P.']


//IMPORTANT >>>>>   We can also Use Spread Operator in FUNCTION
const orderPizza = function( ingredient1, ingredient2, ingredient3){
  console.log(`Here is your pizza with ingredients: ${ingredient1}, ${ingredient2} and ${ingredient3}`);
}

//calling orderPizza function
const callingIngredients = [
  prompt("Let make pizza with Ingredient1 with:"),
  prompt("It will also have Ingredient2 as:"),
  prompt("and final Ingredient3 as:")
]

//calling functions, Normally
orderPizza(callingIngredients[0], callingIngredients[1], callingIngredients[2]);

//calling function using SPREAD OPERATOR
orderPizza(...callingIngredients);



//IMPORTANT >>>>>   Use of Spread Operator in OBJECTS
const travelDelhiUpdated = {...travelDelhi, constituency: "Democracy", famousPlace:["Lotus Temple", "Delhi CP", "India Gate", "Akarsar Dham"]};
console.log(travelDelhiUpdated);

//Creating copy of Objects
const travelDelhiUpdatedCopied1 = Object.assign({}, travelDelhiUpdated);
console.log(travelDelhiUpdatedCopied1);

//Creating copy of Objects, using spread operator
const travelDelhiUpdatedCopied2 = {...travelDelhiUpdated};
console.log(travelDelhiUpdatedCopied2);


//----------------------------------------------------------------------------------------------//


/*
               >>>>>>>>>>>>>> REST PARAMETERS<<<<<<<<<<<<<<
               > Improved way to handle parameters, 
               > Allowing us to more easily handle various inputs as Parameters in a function
*/


 function userData(a,b,c,...argss){
    console.log("a", a);
    console.log("b", b);
    console.log("multipleArgs", ...argss);
    }
    
    userData("first", "second", "third", "fourth","fifth", "sixth");
    
    
    const sumRestParameter = function sumData(sum,...sumMoreValue){
        for(let a=0;a <sumMoreValue.length;a++){
            sum = sum + sumMoreValue[a];
        }
        return sum;
    }
    
    console.log(sumRestParameter(0, 1,2,3,4,5,6,7,8,9,10));
    
    
    //sorting using Rest Parameter
    const sortedParams = (...argssSortedVar)=>{
        const sortedParamsAfter = argssSortedVar.sort();
        return sortedParamsAfter;
    }
    //sorted result in Array
    console.log(sortedParams(1,3,2,6,4,2,6,8));
    //to string
    console.log(sortedParams(1,3,2,6,4,2,6,8).toString());
    
    
    const [city1, city2, ...cities] = ["Noida", "Bengaluru", "Mumbai", "Pune", "Hyederabad" ];
    console.log(city1, city2, cities);


    const propertyDishObj = {
        placeName: "Texas",
        placeAlternateName:"",
        placeCountry: "United States",
        placeState: "Texas Main States",
        placePin: 750093,
        bestFoods: {
            morning: "Pizza",
            afternoon: ["Chicken Rice","Corn Soup", "Non-veg Soup", "Chow"],
            evening: ["Salad", "Veg Soup"]
        },
        openingHours:{
            sun:"Close",
            sat: {
                open: 9,
                close: 1,
            },
            otherDay:{
                open: 9,
                close: 7,
            },
        },
        onlineOrder: true,
        mostlyPlacedOrder: ["Chicken Rice", "Veg Soup", "Pizza"],
        priceOrderdBy:[110, 120, 130, 140, 150, 166.44],
        //with more parameter in function
        orderSnacks: function(mainIngredient, ...additionalIngredient){
           console.log(`orderd food itmes: ${mainIngredient} and ${additionalIngredient}`);
        },

        //spred operator as order pizza as getting arguments from user
        orderDInner: function(dish, ingredient1, ingredient2, ingredient3){
            console.log(`You have orderde this dish: ${dish} with Ingredient: ${ingredient1}, ${ingredient2} and ${ingredient3}`)
        },
    }

    //We can not declare Rest Element at first like const [...bestFoodsVar, ...mostlyPlacedOrderVar], cause Rest Element will be the Last Element
    //Also, one desctucting rest element should be as variable
    const [bestFoodsVar, ...mostlyPlacedOrderVar] = [...propertyDishObj.bestFoods.afternoon, ...propertyDishObj.mostlyPlacedOrder];
    console.log(`${bestFoodsVar}, 
        ${mostlyPlacedOrderVar}`);


        const {sun,...weekDays} = propertyDishObj.openingHours;
        console.log(sun, weekDays);

//Using simple function
propertyDishObj.orderSnacks("pizza", ...propertyDishObj.mostlyPlacedOrder);

//spread operator
// const orderDinnerPrompt = [prompt("Enter Order Dish Name:"),
// prompt("Ingredient 1 is:"),
// prompt("Ingredient 2 is:"),
// prompt("Ingredient 3 is:"),];

//propertyDishObj.orderDInner(orderDinnerPrompt[0], orderDinnerPrompt[1],orderDinnerPrompt[2],orderDinnerPrompt[3]);
//or
//propertyDishObj.orderDInner(...orderDinnerPrompt);

//--------------Short Circuting: Evalauting expression from left to right, using AND(&&) and OR(||) operator
function shortCircuitTruthyFalsy(){
    console.log(true || true); //true
    console.log(false || true); //true
    console.log(true || false);  //true
    console.log(false || false); //false
 
    console.log(true && true);  //true
    console.log(false && true); //false
    console.log(true && false); //false
    console.log(false && false);  //false
}

shortCircuitTruthyFalsy();

//Examples
function  shortCircuitTruthyFalsyExamples(){
    console.log("Hello" || false); //hello, as it is truthy
    console.log("" || true); //"" is an falsy

    console.log( ''|| 0 || "" ||"Hello..."|| false); //Hello...
}

shortCircuitTruthyFalsyExamples();

//we can use in getting an expressions
propertyDishObj.placeName ? console.log(propertyDishObj.placeName): console.log(propertyDishObj.placeCountry);

propertyDishObj.placeAlternateName ? console.log(propertyDishObj.placeName): console.log(propertyDishObj.placeCountry);
//or we can print by assigning some value
propertyDishObj.placeAlternateName ? console.log(propertyDishObj.placeName): console.log(propertyDishObj.placeAlternateName="The Lone Star State in USA");


//NUllISH Operator, Return right value when Left Value if null or Undefined



