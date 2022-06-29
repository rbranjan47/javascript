//closures: Closures gives access to outer function scope from an inner function

//lexical scoping
function initialization() {
  var name = 'Chrome';

  function browserLaunch() {
    console.log(name);
  }
  browserLaunch();
}
initialization();

//closures
function testInitialization() {
  var name = 'Mozilla';
  function testBrowserLaunch() {
    console.log(name);
  }
  return testBrowserLaunch;
}

var functionTestInitialization = testInitialization();

//this will log, functions ---> testBrowserLaunch
console.log(functionTestInitialization);

//this will log, closure references though lexical analysis
//i.e. functionTestInitialization()  --> testInitialization() --> testBrowserLaunch() --> name
functionTestInitialization();

// we can Also return function while declaration
function test_first() {
  var name = 'tested successfully!';

  return function test_second() {
    console.log(name);
  };
}
var test_last = test_first();
console.log(test_last);
test_last();
