// In Javascript, 5 falsy values : 0, '', undefined , null, NaN

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(NaN));
console.log(Boolean('Rabi'));  //any string without empty, truthy
console.log(Boolean({}));  //empty Object also truthy values
console.log(Boolean(''));

//values coercion to boolean
const money = 0;  //here 0 is a falsy value
if (money){
    console.log("Don't spend it all🤷‍♂️");
}else{
    console.log("You should get a job👨‍💻");
}

let height;  //height is undefined, Falsy value
if(height)
{
    console.log("YAY! height is defined");
}
else{
    console.log("UFF! height is Undefined");
}