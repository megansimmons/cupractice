"use strict";

// Don't change the next two lines!
// This creates two variables:
//     one with the colors of the rainbow, and another with a single randome
//     another with a single random color value
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var color = colors[Math.floor(Math.random()*colors.length)];

switch (color) {
	case "red":
		console.log("Red is important in nature.");
		break;
	case "orange":
		console.log("Orange is the color of parking cones.");
		break;
	case "yellow":
		console.log("Yellow means you're not brave.");
		break;
	case "green":
		console.log("I hope to make lots of green with this job.");
		break;
	case "blue":
		console.log("Blue can mean you are sad.");
		break;
	default:
	console.log("I do not know anything by that color.");
    // TODO: create a case statement that will handle every color except indigo and violet
    // TODO: when a color is encountered log a message that tells the color, and an object of that color
    //       example: Blue is the color of the sky.

    // TODO: create a default case that will catch indigo and violet
    // TODO: for the default case, log: I do not know anything by that color.
}

var puppies = ['Buglas', 'Gootie', 'Chupa Chup', 'B Bop', 'Atlas', 'Lexy', 'Baloo'];
var pup = puppies[Math.floor(Math.random()*puppies.length)];
var current = 'Gootie';

switch (pup) {
	case 'Buglas':
	console.log('My little Doo Bear, I miss you.');
		break;
	case 'Gootie':
	console.log('My big black bear dog, you are a gentle giant.');
		break;
	case 'Chupa Chup':
	console.log('Named after my favorite lollipop!');
		break;
	case 'B Bop':
	console.log('You were my brother\'s favorite.');
		break;
	case 'Atlas':
	console.log('I was so sad when you left. Gootie reminds me of you.');
		break;
	case 'Lexy':
	console.log('You were our first family dog.');
		break;
	default:
	console.log('Good ole Baloo the bear. We didn\'t have much time together.')
}

(pup === current) ? console.log('I was just adopted by my momma!') : console.log('You will not be forgotten!')