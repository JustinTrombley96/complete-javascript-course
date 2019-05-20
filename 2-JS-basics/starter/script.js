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

/************************************************************************
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

// /************************************************************************
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

/************************************************************************ 
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

/************************************************************************
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

// var firstName = 'John';
// var age = 28;
// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.')
// } else {
//     console.log(firstName + ' is a man.')
// }
//And &&, OR ||, or Not !

/************************************************************************ 
 * The Ternary Operator and Switch Statements
 */

// var firstName = 'John';
// var age = 25;

// //Ternary Operator
// age >= 18 ? console.log(firstName + ' drinks beer.') :
//     console.log(firstName + ' drinks juice.')

// var drink = age >= 18 ? 'beer' : 'juice';
// console.log(drink);

// if (age >= 18) {
//     var drink = 'beer';
// } else {
//     var drink = 'juice';
// }
// console.log(drink)

//Switch Statement
// var job = 'teacher';
// switch (job) {
//     case 'teacher':
//     case 'instructor':
//         console.log(firstName + ' teaches kids how to code.')
//         break;
//     case 'driver':
//         console.log(firstName + ' drives an uber in Lisbon.')
//         break;
//     case 'designer':
//         console.log(firstName + ' designs beautiful websites.')
//         break;
// }

// switch (true) {
//     case age < 13:
//         console.log(firstName + ' is a boy.');
//         break;
//     case age >= 13 && age < 20:
//         console.log(firstName + ' is a teenager.');
//         break;
//     case age >= 20 && age < 30:
//         console.log(firstName + ' is a young man.')
//         break;
//     default:
//         console.log(firstName + ' is a man.')
// }

// var firstName = 'John';
// var age = 28;
// if (age < 13) {
//     console.log(firstName + ' is a boy.');
// } else if (age >= 13 && age < 20) {
//     console.log(firstName + ' is a teenager.');
// } else if (age >= 20 && age < 30) {
//     console.log(firstName + ' is a young man.')
// } else {
//     console.log(firstName + ' is a man.')
// }

/************************************************************************ 
 * Truthy and Falsy values and equality operators
 */

//falsy values: undefined, null, 0, ' ', NaN
//truthy values: NOT falsy values

// var height;

// height = 23;

// if (height || height === 0) {
//     console.log('Variable is defined');
// } else {
//     console.log('Variable has NOT been defined');
// }

// //Equality Operators
// if (height == '23') {
//     console.log('The == operator does type coercion!');
// }

/************************************************************************ 
 * Coding Challenge 2
 */

// var johnsTeamAvg = (89 + 120 + 127) / 3;
// var mikesTeamAvg = (116 + 94 + 126) / 3;
// var marysTeamAvg = (97 + 134 + 154) / 3;
// console.log(johnsTeamAvg);
// console.log(mikesTeamAvg);
// console.log(marysTeamAvg);

// if (johnsTeamAvg > mikesTeamAvg && johnsTeamAvg > marysTeamAvg) {
// 	console.log("John's team wins!");
// } else if (johnsTeamAvg === mikesTeamAvg && johnsTeamAvg === marysTeamAvg) {
// 	console.log('John, Mary and Mike all tied!');
// } else if (johnsTeamAvg === mikesTeamAvg) {
// 	console.log('John and Mike tied!');
// } else if (johnsTeamAvg === marysTeamAvg) {
// 	console.log('John and Mary tied!');
// } else if (mikesTeamAvg === marysTeamAvg) {
// 	console.log('Mike and Mary tied!');
// } else if (mikesTeamAvg > johnsTeamAvg && mikesTeamAvg > marysTeamAvg) {
// 	console.log("Mike's team wins!");
// } else {
// 	console.log("Mary's team wins!");
// }

/************************************************************************ 
 * Functions
 */

// function calculateAge(birthYear) {
// 	return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMike = calculateAge(1964);
// var ageMary = calculateAge(1985);

// console.log(ageJohn, ageMike, ageMary);

// function yearsUntilRetirement(year, firstName) {
// 	var age = calculateAge(year);
// 	var retirement = 65 - age;

// 	if (retirement > 0) {
// 		console.log(firstName + ' retires in ' + retirement + ' years.');
// 	} else {
// 		console.log(firstName + ' is already retired.');
// 	}
// }

// yearsUntilRetirement(1990, 'John');
// yearsUntilRetirement(1952, 'Mike');
// yearsUntilRetirement(1982, 'Jane');

/************************************************************************ 
 * Function Statements and Expressions
 */
//Function declaration
//function whatDoYouDo(job, firstName) {}

//Function Expression
// var whatDoYouDo = function(job, firstName) {
// 	switch (job) {
// 		case 'teacher':
// 			return firstName + ' teaches kids how to code.';
// 		case 'driver':
// 			return firstName + ' drives a cab in Lisbon.';
// 		case 'designer':
// 			return firstName + ' desgins beautiful websites.';
// 		default:
// 			return firstName + ' does something else';
// 	}
// };
// console.log(whatDoYouDo('teacher', 'John'));
// console.log(whatDoYouDo('designer', 'Mike'));
// console.log(whatDoYouDo('driver', 'Leo'));
// console.log(whatDoYouDo('', 'John'));
// console.log(whatDoYouDo('retired', 'Mark'));

// /************************************************************************
//  * Arrays

//  */ // Initialize new array
// var names = [ 'John', 'Mark', 'Jane' ];
// var years = new Array(1990, 1969, 1948);

// console.log(names[0]);
// console.log(names);
// console.log(names.length);

// //Mutate Array Data
// names[1] = 'Ben';
// names[5] = 'Mary';
// names[names.length] = 'Billy';
// console.log(names);

// // Different Data Type
// var john = [ 'John', 'Smith', 1990, 'teacher', false ];
// john.push('blue');
// john.unshift('Mr.');
// console.log(john);

// john.pop();
// john.pop();
// john.shift();
// console.log(john);

// console.log(john.indexOf(1990));

// var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John is a designer'
// console.log(isDesigner)

// /************************************************************************
//  * Coding Challenge 3

// let johnBill1 = 124;
// var johnBill2 = 48;
// var johnBill3 = 268;
// var finalAmounts = [];
// var tips = [];

// if (johnBill1 < 50) {
// 	tips.push(Math.round(johnBill1 * 0.2));
// 	finalAmounts.push(johnBill1 * 1.2);
// } else if (johnBill1 < 200 && johnBill1 > 50) {
// 	tips.push(Math.round(johnBill1 * 0.15));
// 	finalAmounts.push(johnBill1 * 1.15);
// } else {
// 	tips.push(Math.round(johnBill1 * 0.1));
// 	finalAmounts.push(johnBill1 * 1.1);
// }

// if (johnBill2 < 50) {
// 	tips.push(Math.round(johnBill2 * 0.2));
// 	finalAmounts.push(johnBill2 * 1.2);
// } else if (johnBill2 < 200 && johnBill2 > 50) {
// 	tips.push(Math.round(johnBill2 * 0.15));
// 	finalAmounts.push(johnBill2 * 1.15);
// } else {
// 	tips.push(Math.round(johnBill2 * 0.1));
// 	finalAmounts.push(johnBill2 * 1.1);
// }

// if (johnBill3 < 50) {
// 	tips.push(Math.round(johnBill3 * 0.2));
// 	finalAmounts.push(johnBill3 * 1.2);
// } else if (johnBill3 < 200 && johnBill3 > 50) {
// 	tips.push(Math.round(johnBill3 * 0.15));
// 	finalAmounts.push(johnBill3 * 1.15);
// } else {
// 	tips.push(Math.round(johnBill3 * 0.1));
// 	finalAmounts.push(johnBill3 * 1.1);
// }

// console.log(finalAmounts);
// console.log(tips);

// // /************************************************************************
// //  * Coding Challenge 3 Professor Example

// function tipCalculator(bill) {
// 	var percentage;
// 	if (bill < 50) {
// 		percentage = 0.2;
// 	} else if (bill >= 50 && bill < 200) {
// 		percentage = 0.15;
// // 	} else {
// // 		percentage = 0.1;
// // 	}
// // 	return percentage * bill;
// // }

// // var bills = [124, 48, 268];
// // var tips = [tipCalculator(bills[0]), tipCalculator(bills[1]), tipCalculator(bills[2])];

// // var finalValues = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// // console.log(tips, finalValues);

// // // /************************************************************************
// // //  * Objects and Properties

// // Object Literal
// var john = {
// 	firstName : 'John',
// 	lastName  : 'Smith',
// 	birthYear : 1990,
// 	family    : [ 'Jane', 'Mark', 'Bob', 'Emily' ],
// 	job       : 'teacher',
// 	isMarried : false,
// };
// console.log(john.firstName);
// console.log(john['lastName']);
// var x = 'birthYear';
// console.log(john[x]);

// john.job = 'designer';
// john['isMarried'] = true;
// console.log(john);

// // New Object Syntax

// var jane = new Object();
// jane.name = 'Jane';
// jane.birthYear = 1969;
// jane['lastName'] = 'Smith';
// console.log(jane);

// // // /************************************************************************
// // //  * Objects and Methods

// var john = {
// 	firstName : 'John',
// 	lastName  : 'Smith',
// 	birthYear : 1992,
// 	family    : [ 'Jane', 'Mark', 'Bob', 'Emily' ],
// 	job       : 'teacher',
// 	isMarried : false,
// 	calcAge   : function() {
// 		this.age = 2018 - this.birthYear;
// 	},
// };
// john.calcAge();
// console.log(john);

// // // /************************************************************************
// // //  * Coding Challenge #4

// john = {
// 	fullName     : 'John Smith',
// 	mass         : 56.699,
// 	height       : 1.6,
// 	calculateBmi : function() {
// 		this.bmi = this.mass / (this.height * this.height);
// 		return this.bmi;
// 	},
// };
// john.calculateBmi();
// console.log(john);

// mark = {
// 	fullName     : 'Mark Plyer',
// 	mass         : 58,
// 	height       : 1.9,
// 	calculateBmi : function() {
// 		this.bmi = this.mass / (this.height * this.height);
// 		return this.bmi;
// 	},
// };
// mark.calculateBmi();
// console.log(mark);

// if (mark.bmi > john.bmi) {
// 	console.log(mark.fullName + ' has a higher BMI!');
// } else if (mark.bmi === john.bmi) {
// 	console.log('They both have the same BMI!');
// } else {
// 	console.log(john.fullName + ' has a higher BMI!');
// }

// // // /************************************************************************
// // //  * Loops and Iteration

// for (var i = 0; i <= 10; i++) {
// 	console.log(i);
// }

// i = 0, 0 < 10 true, log i to console, i++
// i = 1, 1 < 10 true, log i to the console, i++
//...
// i = 9, 9 < 10 true, log i to the console, i++
// i = 10, 10 < 10 false, exit the loop

// for (var i = 1; i <= 20; i += 2) {
// 	console.log(i);
// }

// var john = [ 'John', 'Smith', 1990, 'designer', false, true, 'dog' ];

// for (var i = 0; i < john.length; i++) {
// 	console.log(john[i]);
// }

// //While loop
// var i = 0
// while (i < john.length) {
// 	console.log(john[i]);
// 	i++;
// }

//Continue and break statements

// var john = [ 'John', 'Smith', 1990, 'designer', false, true, 'dog' ];

// for (var i = 0; i < john.length; i++) {
// 	if (typeof john[i] !== 'string') continue;
// 	//Skips everything that isn't a string
// 	console.log(john[i]);
// }

// for (var i = 0; i < john.length; i++) {
// 	if (typeof john[i] !== 'string') break;
// 	//Stops the for loop when it reaches something that isn't a string
// 	console.log(john[i]);
// }

// //Pulling out everything that isn't a string

// for (var i = 0; i < john.length; i++) {
// 	if (typeof john[i] === 'string') continue;
// 	console.log(john[i]);
// }

// //Looping backwards

// for (var i = john.length - 1; i >= 0; i--) {
// 	console.log(john[i]);
// }
// screamKingsSeasons = [ 'Dimension 1', false, 'The Reality Effect', 'Exploration of the Damned', 27 ];

// for (var i = 0; i < screamKingsSeasons.length; i++) {
// 	if (typeof screamKingsSeasons[i] !== 'string') continue;
// 	console.log(screamKingsSeasons[i]);
// }

// for (var i = screamKingsSeasons.length - 1; i >= 0; i--) {
// 	if (typeof screamKingsSeasons[i] !== 'string') continue;
// 	console.log(screamKingsSeasons[i]);
// }

// // // /************************************************************************
// // //  * Coding Challenge 5

var bills = [124, 48, 268, 180, 42];
var johnTips = [];
var total = [];
var allTips = [];

// 20% = x <50
// 15% = 50 < x < 200
// 10% = 200 < x

for (var i = 0; i < bills.length; i++) {
    if (bills[i] < 50) {
        johnTips.push(bills[i] * 0.2);
        allTips.push(bills[i] * 0.2);
        total.push(bills[i] * 1.2);
    } else if (50 <= bills[i] && bills[i] < 200) {
        johnTips.push(bills[i] * 0.15);
        allTips.push(bills[i] * 0.15);
        total.push(bills[i] * 1.15);
    } else {
        johnTips.push(bills[i] * 0.1);
        allTips.push(bills[i] * 0.1);
        total.push(bills[i] * 1.1);
    }
}
console.log(johnTips);
console.log(total);

var markBills = [77, 375, 110, 45];
var markTips = [];
var markTotal = [];
//20% = x < 100
//10% = 100 < x < 300
//25% = 300 < x

for (var i = 0; i < markBills.length; i++) {
    if (markBills[i] < 100) {
        markTips.push(markBills[i] * 0.2);
        allTips.push(markBills[i] * 0.2);
        markTotal.push(markBills[i] * 1.2);
    } else if (100 <= markBills[i] && markBills[i] < 300) {
        markTips.push(markBills[i] * 0.1);
        allTips.push(markBills[i] * 0.1);
        markTotal.push(markBills[i] * 1.1);
    } else {
        markTips.push(markBills[i] * 0.25);
        allTips.push(markBills[i] * 0.25);
        markTotal.push(markBills[i] * 1.25);
    }
}

console.log(markTips);
console.log(markTotal);
console.log(allTips);

//Average Overall Tip
var total = 0;
for (var i = 0; i < allTips.length; i++) {
    total += allTips[i];
}
var averageTip = total / allTips.length;

console.log(averageTip);

//Average John Tip

var totalJ = 0;
for (var i = 0; i < johnTips.length; i++) {
    totalJ += johnTips[i];
}
var averageJohnTip = totalJ / johnTips.length;

console.log(averageJohnTip);

//Average Mark Tip
var totalM = 0;
for (var i = 0; i < markTips.length; i++) {
    totalM += markTips[i];
}
var averageMarkTip = totalM / markTips.length;

console.log(averageMarkTip);

//Who has the higher average?

if (averageJohnTip > averageMarkTip) {
    console.log("John's family tips more than Mark's family!");
} else if (averageMarkTip > averageJohnTip) {
    console.log("Mark's family tips more than John's family!");
} else {
    console.log('Both families tipped the same amount!');
}