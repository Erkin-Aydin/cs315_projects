const prompt = require('prompt-sync')();

function foo(n) {
  if (n%2==0) {
    function bar(n) {
      return 2*n;
    }
  }
  else {
    function bar(n) {
      return 2*n+1;
    }
  }
  return bar(n);
}
number = prompt("Enter a number: ", 0);
foo_number = foo(number);
console.log ("number is "+number+" foo(number) is "+foo_number);
