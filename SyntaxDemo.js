//Example of a function that prints a number
//Not particularly useful - basically equivalent to console.log
function printVar(num) {
  console.log(num); //Prints the number and a newline
}

var x; //Declare a global variable

//Loop the variable from 1 to 10 inclusive
for(x = 1; x <= 10; x++) {
  printVar(x); //Print the value on each line
}

//x is now 11

//Creates an anonymous function where x becomes x*x
var squared = (x => x*x);

//Use the function to print x squared
printVar(squared(x)); //Prints 121
