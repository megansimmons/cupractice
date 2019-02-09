"use strict";

var myNameIs = 'Gandi'; // TODO: Fill in your name here.

// TODO:
// Create a function called 'sayHello' that takes a parameter 'name'.
// When called, the function should log a message that says hello from the passed in name.

function sayHello(name) {
	var name = myNameIs;
	console.log("Hello " + name);
}
// TODO: Call the function 'sayHello' passing the variable 'myNameIs' as a parameter.
sayHello();

//Practicing Functions
var favoriteFood = 'cheeseburgers'; //global var

function craving(food) {
	var food = favoriteFood;
	console.log('I am craving ' + food + '!!!');
}

craving();



function myBerfday(special) {
	var special = 'September 1st';
	//var unBerfday = 'Any other day of the year!'
	console.log('It\'s my birthday because today is ' + special + '!');
}

myBerfday();






// Don't modify the following line
// It generates a random number between 1 and 100 and stores it in random
var random = Math.floor((Math.random()*100)+1);

// TODO:
// Create a function called 'isOdd' that takes a number as a parameter.
// The function should use the ternary operator to log a message.
// The log should tell the number passed in and whether it is odd or not.

/*function isOdd(number) {
	var number = random;
	var remainder = number % 2;
	if (remainder !== 0) {
		console.log(number + " is odd.");
	} else {
		console.log(number + " is even.");
	}
}
// TODO: Call the function 'isOdd' passing the variable 'random' as a parameter.
isOdd();
*/

//below is the same function isOdd() but using the ternary operator

function isOdd(number) {
	var number = random;
	var remainder = number % 2;
	(remainder !== 0) ? console.log(number + " is odd.") : console.log(number + " is even.");
}
isOdd();

// TODO: Ask the user for their name.
//       Keep asking if an empty input is provided.

// TODO: Show an alert message that welcomes the user based on their input.

// TODO: Ask the user if they like pizza.
//       Based on their answer show a creative alert message.
/*
var response = prompt("What is your name?");
	if (response === "") { //If I use 'while' here, it creates an infinite loop.
		prompt("Please enter your name."); //This only prompts one time and then moves to execute next function.
	} if (response !== "") {
		alert("Welcome " + response);
	} 
	
var pizza = prompt("Do you like pizza?");
	if (pizza === "No") { //case sensitive
		alert("You're weird.");
	} else {
		alert("You Ninja Turtle, You!");
	}
*/

var response = '';

while (response === '') {
	response = prompt('Please enter your name.');
}

alert('Hey ' + response + '!');

var doYouLike = '';

var pizza = prompt("Do you like pizza?");
	if (pizza === "No") { //case sensitive, not sure how to make not case sensitive
		alert("You're weird.");
	} else {
		alert("You Ninja Turtle, You!");
	}



