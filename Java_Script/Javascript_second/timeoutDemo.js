// var i = 1;
// setTimeout(function () {
//   while (i <= 5) {
//     console.log(i++);
//   }
// }, 3000);

console.log('Javascript...');

//Using let keyword ---> With var, value gets incremented to 6 & stored as 6. after checking condition
function timeoutAfterEachLet() {
  for (let j = 1; j <= 5; j++) {
    setTimeout(() => {
      console.log(j);
    }, j * 3000);
  }
}
timeoutAfterEachLet();

//With the help of closure, we can run with var keyword
function timeoutAfterEachVar() {
  for (var k = 1; k <= 4; k++) {
    function closureTestVar(x) {
      setTimeout(() => {
        console.log(x);
      }, x * 2000);
    }
    closureTestVar(k);
  }
}
timeoutAfterEachVar();
