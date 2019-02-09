"use strict";

// Don't change the next two lines!
// These creates two variables for you:
//     one with the colors of the rainbow
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

var favorite = 'blue'; // TODO: change this to your favorite color from the list

// TODO: Create a block of if/else statements to check for every color except indigo and violet.
// TODO: When a color is encountered log a message that tells the color, and an object of that color.
//       Example: Blue is the color of the sky.
if (color === "red") {
	console.log("Rudolph's nose is red.")
} else if (color === "orange") {
	console.log("Tangelos are orange.")
} else if (color === "yellow") {
	console.log("Sunflowers are yellow.")
} else if (color === "green") {
	console.log("Grass is not always greener on the other side.")
} else if (color === "blue") {
	console.log("The sky is blue...for now.")
} else {
	console.log("I don't know anything by that color.")
}
// TODO: Have a final else that will catch indigo and violet.
// TODO: In the else, log: I do not know anything by that color.

// TODO: Using the ternary operator, conditionally log a statement that
//       says whether the random color matches your favorite color.
(color === favorite) ? console.log("This is my favorite color!") : console.log("This isn't my favorite color.")

var dudes = ["Chris", "Pete", "Brandon", "Luke", "Carlos", "Giovanni"];
var man = dudes[Math.floor(Math.random()*dudes.length)];
var love = "Giovanni";

if (man === "Chris") {
	console.log("Too bad he's an absentee father and a drug addict...next!")
} else if (man === "Pete") {
	console.log("Well this guy is an amazing artist and a lot of fun, but he definitely has a drinking problem that stems from mommy issues.")
} else if (man === "Brandon") {
	console.log("Hot, but also NOT.")
} else if (man === "Carlos") {
	console.log("He shouldn't be single! He is so good natured and good looking.")
} else if (man === "Giovanni") {
	console.log("Maaaaayyyybeeee, just maaaaayyyybeeee")
}	else {
	console.log("The one who got away.")
}

(man === love) ? console.log("I think he could be for real.") : console.log("Go figure.")

var puppies = ['Buglas', 'Gootie', 'Chupa Chup', 'B Bop', 'Atlas', 'Lexy', 'Baloo'];
var pup = puppies[Math.floor(Math.random()*puppies.length)];
var current = 'Gootie';

if (pup === 'Buglas') {
	console.log('My little Doo Bear, I miss you.')
} else if (pup === 'Gootie') {
	console.log('My big black bear dog, you are a gentle giant.')
} else if (pup === 'Chupa Chup') {
	console.log('Named after my favorite lollipop!')
} else if (pup === 'B Bop') {
	console.log('You were my brother\'s favorite.')
} else if (pup === 'Atlas') {
	console.log('I was so sad when you left. Gootie reminds me of you.')
} else if (pup === 'Lexy') {
	console.log('You were our first family dog.')
} else {
	console.log('Good ole Baloo the bear. We didn\'t have much time together.')
}

(pup === current) ? console.log('I was just adopted by my momma!') : console.log('You will not be forgotten!')