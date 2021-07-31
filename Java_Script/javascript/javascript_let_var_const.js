//let, const and var keywords
//let keyword is used to re-assign the value
let age =30;
age =31;
console.log(age);

//const keyword can't be re-assign, and best practices to use the const
const birthyear = 1997;
//birthyear = 2000;
console.log(birthyear);

//var keyword, is like the let keyword but var is a FUNCTION scope, whereas Let is a BLOCK scope
var job = "programmer";
job = "teacher";
console.log(job);

//we can clearly see the difference between let and var here
function run(){
    var apple = "apple";
    let banana = "banana";
    console.log(apple, banana);

    {
        var dog = "dog";
        let cat = "cat";
        
        console.log(dog, cat);
    }
    console.log(dog, cat);//here cat will give reference error as it is block scope
}
//running function
run();