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
console.log(mapEx.get("name1"));
console.log(mapEx.get(1));

//Ternary Operator
mapEx.set("open", 11);
mapEx.set("close", 23);
mapEx.set(true, 'Shop is Open!');
mapEx.set(false, "Shop is Closed!");

//If-Else logic
const customerTime = 12;
if(customerTime > mapEx.get("open") && customerTime < mapEx.get("close")){
    console.log(mapEx.get(true));
}
else{
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
const arr = [1,2];
mapEx.set(arr, "storing Array");
console.log(mapEx.get(arr));
console.log(mapEx);


//IMPORTANT:  Conversion of Object to Map
const objectSample = {
    placeName: "Texas",
    placeAlternateName:"",
    placeAlternateName2: "",
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
};
//printing object
console.log(objectSample);

//printing object,as map after converting it to MAP
//and we can access the key value pair of Object
const objectSampleINTOMap = new Map(Object.entries(objectSample));
console.log(objectSampleINTOMap);


//>>>>>>>>>>>>>>>>>>>>>> Iteration in Map <<<<<<<<<<<<<<<<<<<<<<<
//Similar method, to Iterate Object

//Object Iterating
for(let [a,b] of Object.entries(objectSample)){
    console.log(a,b);
}

//Map
for(let [mapEXKey, mapEXValues] of mapEx.entries()){
    console.log(mapEXKey, mapEXValues);
}

//IMPORTANT -- Conversion of MAP to ARRAY, Using SPREAD Operator
console.log([...mapEx]);
console.log([...mapEx.keys()]);
console.log([...mapEx.values()]);
console.log([...mapEx.entries()]);

//coding challenge
