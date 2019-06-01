//Primitives: Numbers, Strings, Booleans, Undefined, Null.
//Everything else is an object.
//Every JS object has a prototype property.
//The prototype property of an object is where we put methods and properties that we want other objects to inherit.
//The constructor's prototype property is not the prototype of the Constructor itself, it's the prototype of ALL instances that are created through it.
//When a certain method is called, the serach starts in the obj itself, and if it can't be found it searches the obj prototype. This continues until the method is found: prototype chain.

//Function Constructor *******************************************************************

// var Person = function(name, yearOfBirth, job) {
// 	this.name = name;
// 	this.yearOfBirth = yearOfBirth;
// 	this.job = job;
// };

// Person.prototype.calculateAge = this.calculateAge = function() {
// 	console.log(2019 - this.yearOfBirth);
// };

// Person.prototype.lastName = 'Smith';

// var john = new Person('John', 1990, 'teacher');

// var jane = new Person('Jane', 1912, 'designer');
// var mark = new Person('Mark', 1978, 'retired');

// john.calculateAge();
// jane.calculateAge();
// mark.calculateAge();

// console.log(john.lastName);
// console.log(jane.lastName);
// console.log(mark.lastName);

//Object.create *******************************************************************

// var personProto = {
// 	calculateAge : function() {
// 		console.log(2019 - this.yearsOfBirth);
// 	},
// };

// //Method 1
// var john = Object.create(personProto);
// john.name = 'John';
// john.yearsOfBirth = 1990;
// john.job = 'teacher';

// //Method 2
// var jane = Object.create(personProto, {
// 	name : { value: 'Jane' },
// 	year : { value: 1969 },
// 	job  : { value: 'designer' },
// });

//Primitives vs Objects *******************************************************************

//Primitives
// var a = 23;
// var b = a;
// a = 46
// console.log(a)
// console.log(b)

//Objects
// var obj1 = {
//     name: 'John',
//     age: 26
// }
// var obj2 = obj1
// obj1.age = 30;

// console.log(obj1.age)
// console.log(obj2.age)

//Functions
// var age = 27
// var obj = {
//     name: 'Jonas',
//     city: 'Lisbon'
// }

// function change(a, b) {
//     a = 30;
//     b.city = 'San Francisco'
// }

// change(age, obj)

// console.log(age)
// console.log(obj.city)

//Lecture: Passing functions as arguments *******************************************************************

//A function is an instance of the Object type
//JS has first-class functions

// var years = [ 1990, 1965, 1937, 2005, 1998 ];

// function arrayCalc(arr, fn) {
// 	var arrRes = [];
// 	for (var i = 0; i < arr.length; i++) {
// 		arrRes.push(fn(arr[i]));
// 	}
// 	return arrRes;
// }

// function calculateAge(el) {
// 	return 2019 - el;
// }

// function isFullAge(el) {
// 	return el >= 18;
// }

// function maxHeartRate(el) {
// 	if (el >= 18 && el <= 81) {
// 		return Math.round(206.9 - 0.67 * el);
// 	} else {
// 		return -1;
// 	}
// }

// var ages = arrayCalc(years, calculateAge);

// var fullAges = arrayCalc(ages, isFullAge);

// var rates = arrayCalc(ages, maxHeartRate);

// console.log(ages);
// console.log(fullAges);
// console.log(rates);

//Lecture: Functions returning functions *******************************************************************

// function interviewQuestion(job) {
// 	if (job === 'designer') {
// 		return function(name) {
// 			console.log(name + ', can you please explain what UX design is?');
// 		};
// 	} else if (job === 'teacher') {
// 		return function(name) {
// 			console.log('What subject do you teach, ' + name + '?');
// 		};
// 	} else {
// 		return function(name) {
// 			console.log('Hello ' + name + ', what do you do?');
// 		};
// 	}
// }

// var teacherQuestion = interviewQuestion('teacher');
// var designerQuestion = interviewQuestion('designer');
// var blankQuestion = interviewQuestion('');
// // teacherQuestion('John');
// designerQuestion('Mary');
// blankQuestion('Mark');

// interviewQuestion('teacher')('Mark');

//Lecture: IIFE  *******************************************************************

(function() {
	var score = Math.random() * 10;
	console.log(score >= 5);
})();

(function(goodLuck) {
	var score = Math.random() * 10;
	console.log(score >= 5 - goodLuck);
})();
