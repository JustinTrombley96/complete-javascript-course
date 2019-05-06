// // var firstName = "Justin";

// // var lastName = "Trombley";
// // var age = 22;

// // var fullAge = true;

// // var job;

// // job = 'Teacher';




// // console.log(firstName, lastName, age, fullAge, job);

// var firstName = "Justin";
// var age = 28; 

// //Type Coercion

// console.log(firstName + " " + age);

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// //Variable Mutation
// age = 'twenty eight';
// job = 'driver'; 

// // alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// // var lastName = prompt("What is his last name?");
// // console.log(firstName + ' ' + lastName);

/********************************************** 
 *  Basic Operators
*/
// var now, yearJohn, yearMark
// now =2020;
// ageJohn = 28;
// ageMark = 33;

// //Math Operators
// yearJohn = now - ageJohn;
// yearMark = now - ageMark;

// console.log(yearJohn);

// console.log(now + 2);
// console.log(now - 2);
// console.log(now * 2);
// console.log(now / 2);

// //Logical Operators
// var johnOlder = ageJohn < ageMark;
// console.log(johnOlder);

// //typeof Operator
// console.log(typeof johnOlder);
// console.log(typeof ageJohn);
// console.log(typeof "Mark is older than John");
// var x;
// // console.log(typeof x);

// /********************************************** 
//  *  Operator Precedence
// */

// var now = 2018;
// var yearJohn = 1989;
// var fullAge = 18;

// // Multiple Operators

// var isFullAge = now - yearJohn >= fullAge; //true
// console.log(isFullAge);

// // Grouping

// var ageJohn = now - yearJohn;
// var ageMark = 35;
// var average = (ageJohn + ageMark) / 2;

// console.log(ageJohn);
// console.log(ageMark);
// console.log(average);

// // Multiple Assignments

// var x, y;
// x =  y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// // More operators

// // These two are the same because of precedence 
// // x = x * 2; 
// // x *= 2;

// console.log(x); 
// x += 10;
// console.log(x)
// x++; This adds 1.
// x--; This subtracts 1.

/**************************************** 
* Coding Challenge 1
*/

/* Efficent Way */

// var markMass = 150;
// var johnMass = 170;
// var markHeight = 70;
// var johnHeight = 75;


// function bmi (mass, height) {
//     var bmi = mass / (height * height);
//     return bmi;
// }

// markBmi = bmi (markMass, markHeight);
// johnBmi =bmi (johnMass, johnHeight);
// console.log(markBmi, johnBmi);


// function compareBmi (person1, person2) {
//     var compareBmi = person1 > person2;
//     return compareBmi;
// }
// console.log(compareBmi(markBmi, johnBmi));

/* Easy Way */

// var markBmi = markMass / (markHeight * markHeight);
// var johnBmi = johnMass / (johnHeight * johnHeight);

// var higherBmi = markBmi > johnBmi;

// console.log(higherBmi);
// console.log(johnBmi);
// console.log(markBmi);


// console.log ("Is Mark's BMI higher than John's? " + higherBmi);

/**************************************** 
* If / else statements
*/

// var firstName = 'John';
// var civilStatus = 'single';

// if (civilStatus === 'married') {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var isMarried = true;
// if (isMarried) {
//     console.log(firstName + ' is married!');
// } else {
//     console.log(firstName + ' will hopefully marry soon :)');
// }

// var markMass = 150;
// var johnMass = 170;

// var markHeight = 70;
// var johnHeight = 75;

// var markBmi = markMass / (markHeight * markHeight);
// var johnBmi = johnMass / (johnHeight * johnHeight);

// if (markBmi > johnBmi) {
//     console.log('Mark\'s BMI is higher than John\'s.');
// } else {
//     console.log('John\'s BMI is higher than Mark\'s.');
// }
