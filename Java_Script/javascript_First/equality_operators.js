//const age = 18;
const age = '18';
if(age === 18) console.log('adult people🧑(strict)');

//=== is strict as it doesn't support type coercion 
if(age == 18) console.log('adult people🧑(loose)');

//const favorite = Number(prompt("favorite number"));
const favorite = prompt("favorite number!");
console.log(favorite);
console.log(typeof(favorite));

if(Number(favorite) === 23)
{
    console.log('matched!');
}
else 
{
    console.log('not matched!');
}