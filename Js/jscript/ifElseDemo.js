const age = 20;
const isReallyOld = age >= 18;
const actualAge = age - 18;
if (age < 0) {
  console.log('Enter a valid age!');
} else if (isReallyOld) {
  console.log(`Yes Old Enough, having age difference ${actualAge} years`);
} else {
  console.log(
    `Not Old Enough, having age gap from desired ${-actualAge} years`
  );
}
