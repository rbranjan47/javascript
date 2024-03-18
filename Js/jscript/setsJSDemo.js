//Set is collection of Unique values Like JAVA
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