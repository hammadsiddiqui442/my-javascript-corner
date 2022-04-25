https://www.w3schools.com/js/js_number_methods.asp

============================================================================================
JavaScript Number Methods
============================================================================================

Number methods help you work with numbers.



==============================================================================================
The toString() Method
==============================================================================================


let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();

console.log(x.toString());
console.log((123).toString());
console.log((100 + 23).toString());

OUTPUT
123
123
123


=========================================================================================
The toExponential() Method
=========================================================================================


let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);

console.log(x.toExponential());
console.log(x.toExponential(4));
console.log(x.toExponential(6));

// OUTPUT
// 9.656e+0
// 9.6560e+0  
// 9.656000e+0


========================================================================================
The toFixed() Method
========================================================================================


let x = 9.656;
x.toFixed(0);
x.toFixed(2);
x.toFixed(4);
x.toFixed(6);

console.log(x.toFixed(0));
console.log(x.toFixed(2));
console.log(x.toFixed(4));
console.log(x.toFixed(6));

// OUTPUT
// 10
// 9.66    
// 9.6560  
// 9.656000


=========================================================================================
The toPrecision() Method
=========================================================================================


let x = 9.656;
x.toPrecision();
x.toPrecision(2);
x.toPrecision(4);
x.toPrecision(6);

console.log(x.toPrecision());
console.log(x.toPrecision(2));
console.log(x.toPrecision(4));
console.log(x.toPrecision(6));

// OUTPUT
// 9.656
// 9.7    
// 9.656  
// 9.65600


=====================================================================================
The valueOf() Method
=====================================================================================


let x = 123;
x.valueOf();
(123).valueOf();
(100 + 23).valueOf();

console.log(x.valueOf());
console.log((123).valueOf());
console.log((100 + 23).valueOf());

// OUTPUT
// 123
// 123
// 123


=============================================================================================
The Number() Method
=============================================================================================

Number() can be used to convert JavaScript variables to numbers:


Number(true);
Number(false);
Number("10");
Number("  10");
Number("10  ");
Number(" 10  ");
Number("10.33");
Number("10,33");
Number("10 33");
Number("John");
console.log(Number(true));
console.log(Number(false));
console.log(Number("10"));
console.log(Number("  10"));
console.log(Number("10  "));
console.log(Number(" 10  "));
console.log(Number("10.33"));
console.log(Number("10,33"));
console.log(Number("10 33"));
console.log(Number("John"));



// OUTPUT
// 1
// 0 
// 10
// 10
// 10
// 10
// 10.33
// NaN
// NaN
// NaN


=======================================================================================
The Number() Method Used on Dates
=======================================================================================

Number() can also convert a date to a number.


Number(new Date("1970-01-01"));
console.log(Number(new Date("1970-01-01")));

// OUTPUT
// 0

The Number() method returns the number of milliseconds since 1.1.1970.

The number of milliseconds between 1970-01-02 and 1970-01-01 is 86400000:

Number(new Date("1994-11-13"));
console.log(Number(new Date("1994-11-13")));

// OUTPUT
// 784684800000


=======================================================================================
The parseInt() Method
=======================================================================================

parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:


parseInt("-10");
parseInt("-10.33");
parseInt("10");
parseInt("10.33");
parseInt("10 20 30");
parseInt("10 years");
parseInt("years 10");
console.log(parseInt("-10"));
console.log(parseInt("-10.33"));
console.log(parseInt("10"));
console.log(parseInt("10.33"));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));

// OUTPUT
// -10
// -10
// 10 
// 10 
// 10 
// 10 
// NaN


=========================================================================================
The parseFloat() Method
=========================================================================================

parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned:

parseFloat("10");
parseFloat("10.33");
parseFloat("10 20 30");
parseFloat("10 years");
parseFloat("years 10");
console.log(parseFloat("10"));
console.log(parseFloat("10.33"));
console.log(parseFloat("10 20 30"));
console.log(parseFloat("10 years"));
console.log(parseFloat("years 10"));

// OUTPUT
// 10
// 10.33
// 10   
// 10  
// NaN 


========================================================================================
JavaScript MIN_VALUE and MAX_VALUE
========================================================================================

MAX_VALUE returns the largest possible number in JavaScript.


let x = Number.MAX_VALUE;
console.log(x);

// OUTPUT
// 1.7976931348623157e+308


MIN_VALUE returns the lowest possible number in JavaScript.


let x = Number.MIN_VALUE;
console.log(x);

// OUTPUT
// 5e-324


========================================================================================
JavaScript POSITIVE_INFINITY
========================================================================================


let x = Number.POSITIVE_INFINITY;
console.log(x);

// OUTPUT
// Infinity


let x = 1 / 0;
console.log(x);

// OUTPUT
// Infinity


========================================================================================
JavaScript NEGATIVE_INFINITY
========================================================================================


let x = Number.NEGATIVE_INFINITY;
console.log(x);

// OUTPUT
// -Infinity


let x = -1 / 0;
console.log(x);

// OUTPUT
// -Infinity


========================================================================================
JavaScript NaN - Not a Number
========================================================================================


let x = Number.NaN;
console.log(x);

// OUTPUT
// NaN


let x = 100 / "Apple";
console.log(x);

// OUTPUT
// NaN


let x = 6;
x.MAX_VALUE
console.log(x.MAX_VALUE);

// OUTPUT
// undefined