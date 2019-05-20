///////////////////////////////////////
// Lecture: Execution Contexts
// Global Execution Context = information outside of a function

//1. Creation phase:
//A. Create of the Variable Object(VO)
//B. Creation of the Scope Chain
//C. Determine value of the 'this' variable

//2. Execution Phase:
//The code of the function that generated the current execution context is ran line by line.

//VO = The Argument Object is created. 
//The code is scanned for function declarations. Created in VO pointing to the function. 
//The code is scanned for variable declarations. Undefined.

///////////////////////////////////////
// Lecture: Hoisting

// //functions
// calculateAge(1997)

// function calculateAge(year) {
//     console.log(2016 - year)
// }

// // retirement(1990) This does not work because you can't hoist a variable, but you can hoist a function.

// var retirement = function (year) {
//     console.log(65 - (2016 - year));
// }

// //variables
// var age = 23;
// console.log(age);

// function foo() {
//     console.log(age)
//     var age = 65
//     console.log(age)
// }
// foo()
// console.log(age)








///////////////////////////////////////
// Lecture: Scoping

//Each function creates a scope. This is the space in which the variable defines are accessible.
//Lexical Scoping is when something is written inside of a function but gets access to the scope of the outer function.

// First scoping example

//The scope chain goes up to the parent. Second Scope -> First Scope -> Global Scope.

//Global Scope
// var a = 'Hello! ';
// console.log(a);

// first();

// //First scope
// function first() {
//     var b = 'Hi! ';
//     console.log(a + b);
//     second();

//     //Second Scope
//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);

//     }
// }




// Example to show the difference between execution stack and scope chain
// Execution Stack: Global -> First Scope -> Second Scope -> Third Scope. The order in which functions are called.
// Scope Chain: Second Scope -> First Scope -> Global Scope. Order in which functions are written lexically.

// var a = 'Hello! ';
// first();

// function first() {
//     var b = 'Hi! ';
//     second();

//     function second() {
//         var c = 'Hey! ';
//         third()

//     }
// }

// function third() {
//     var d = 'John ';
//     // console.log(a + b + c + d);
//     console.log(a + d)
// }




///////////////////////////////////////
// Lecture: The this keyword

// Regular function call: The this keyword pounts at the global object.
// Method Call: The this variable points to the object that is calling the method
// The this keyword is not assigned a value until a function where it is defined is actually called.

// calculateAge(1985)

// function calculateAge(year) {
//     console.log(2016 - year)
//     console.log(this)
// }

// var john = {
//     name: 'John',
//     yearOfBirth: 1990,
//     calculateAge: function () {
//         console.log(this);
//         console.log(2019 - this.yearOfBirth)

// function innerFunction() {
//     console.log(this)

// }
// innerFunction()
//     }
// }

// john.calculateAge()

// var mike = {
//     name: 'Mike',
//     yearOfBirth: 1984,
// }

// mike.calculateAge = john.calculateAge
// mike.calculateAge();