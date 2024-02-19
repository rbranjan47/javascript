//Call Back Functions --> Function passed in another function as arguments
//It makes Javascript as asynchronous
// Example, settimeout which also help to make asynchronous, but also get executed after its call stack get completed
setTimeout(function () {
  console.log('Time out sets!');
}, 5000);

function x(y) {
  console.log('x function');
  y();
}

x(function y() {
  console.log('y function');
});
//Javascript is a synchronous & single threaded language

// Blocking the main thread

//Deep about event listeners

//Closures & Scope Demo with Event Listeners
let count = 0;
var el = document.getElementById('buttonClick1');
if (el) {
  el.addEventListener('click', function onClicked() {
    console.log('button1 clicked', ++count + ' times');
  });
}
//To make it safe, use closure(declare in functions)
function clickButton() {
  var element = document.getElementById('buttonClick2');
  if (element) {
    element.addEventListener('click', function onClicked() {
      console.log('button2 clicked', ++count + ' times');
    });
  }
}
clickButton();

//Garbage Collection & removeEvent Listeners
