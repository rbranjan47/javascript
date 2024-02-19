/*Event Loop:
Javascript has runtime model based on event loop, which executes the code, 
collecting & processing events and Executing sub-queued tasks.

NOTE: this model is quite different from C & JAVA

call Stack 
- GEC(Global Execution Content)
- EC (Execution Content)


Since, Call Stack ----(under)---> JavaScript Engine
       JavaScript ----(under)---> Browser

So, Browser have all 
    - Local Storage
    - Console
    - DOM APIs
    - Fetch()
    - Location
    - Timer
    - ....and many more access super power, does browser have.

* To access browser's super powers, -----> Web API's
* To access all web API's, we have to use window:
  As, all API falls under window. 


*/
//Example:
console.log('event listeners....'); //----> It uses console APIs

setTimeout(function callBackDFunction() {
  console.log('call back functions...');
}, 5000);

//As this setTimeout is call back function, so after time completion
// CallBack Function ---> Call-Back(Task) Queue ---> Event Loop ---> Call Stack -->Code Executed & Runs

document
  .getElementById('buttonClick1')
  .addEventListener('click', function clickedName() {
    console.log('Button Clicked!');
  });

//Here, addEventListeners also a call back functions
// CallBack Function ---> Call-Back(Task) Queue(call back stores here) ---> Event Loop ---> Call Stack -->Code Executed & Runs

//fetch()  ---> Fetch goes & request API call
// Once we get data from server through API, then call back function will execute
console.log('Start');
setTimeout(function callBacksetTimeout() {
  console.log('fetch along setTimeout...');
}, 5000);

fetch('https://api.netflix.com').then(function callBackFetch() {
  console.log('Netflix Api Fetches...');
});

// CallBack Function ---> Micro Task Queue(call back stores here) ---> Event Loop ---> Call Stack -->Code Executed & Runs
//Micro-Task Queue is much priority than Call-Back Queue
// Call back function which comes from promises & mutation observer will go to Micro-Task Queue

console.log('end');
