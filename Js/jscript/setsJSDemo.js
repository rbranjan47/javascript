//Set Object is collection of Unique values Like JAVA
// No Duplicate are allowed
// Contains any data type value in it.


const orderSetArray1 = new Set(['Biryani', 
           'Rice', 
           'Chapati',
           'Biryani',
           'Panner Masala',
           'Tea',
           'Coffee',
           'Tea'
        ]);

        console.log(orderSetArray1);  //Remove all duplicate values


const orderSetArray2 = new Set(["Hey Good Morning", "Good Night"]);  //Iterates Array Elements
console.log(orderSetArray2);

//Iterates string
const orderSetString = new Set("Hey Good Morning");
console.log(orderSetString); //Iterates each Character of String

//size
console.log(`size: ${orderSetString.size}`);

//add
orderSetArray1.add("Kofta");
console.log(orderSetArray1);

//delete
orderSetArray1.delete("Rice");
console.log(orderSetArray1);

//clear
const orderSetArray1Copied = new Set(orderSetArray1);
orderSetArray1Copied.clear();
console.log(orderSetArray1Copied);

//for of loop, to get values
for(const order of orderSetArray1){
        console.log(order);
}

//IMPORTANT - conversion of set to Array, using SPREAD operator
const setArray = [...new Set(orderSetString)];  
console.log(setArray);

//For Each, Executes every given function once for the given element in the Set
Set.prototype.interSection = function(otherSet){
        let interSectionSet = new Set();

       for(let elementSec of otherSet){
        if(this.has(elementSec)){
                interSectionSet.add(elementSec);    
        }
}
        return interSectionSet;
};

let set1 = new Set([10, 20, 30, 40, 50, 60, 70, 80]);
let set2 = new Set([11, 22, 33, 44, 55, 66, 77, 50]);

let intersectionSetChecked = set1.interSection(set2);
console.log(...intersectionSetChecked);
