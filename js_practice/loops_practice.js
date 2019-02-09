"use strict"

//WHILE LOOPS

/*
var i = 0;
while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}
*/

/*
var i = 1;
while (i < 10) {
	console.log(i);
	i++;
}
*/

/*
var i = 2;
while (i <= 65536) {
	console.log(i);
	i *= 2;
}
*/

//This logs 1, 3, 9, 27
/*
var p = 1;
while (p < 31) {
	console.log(p);
	p *= 3;
}
*/


//This will skip count by 3 from 0-30
/*
var p = 0; 
while (p < 31) {
	console.log('Yay! I\'m skip counting by ' + p + '.');
	p += 3;
}
*/


//Lesson Example: The next loops are the same, except the first will never run.  The do while loop will run once.
/*
var i = 10;
while (i < 10) {
    console.log('while loop iteration #' + i);
    i++;
}

var i = 10;
do {
    console.log('while loop iteration #' + i);
    i++;
} while (i < 10);

//These two mimic the examples in the lesson: While and Do While loops
var p = 29;
 while (p < 29) {
 	console.log(p + " log");
 	p++;
 }

 var p = 29;
 do {
 	console.log(p + " log");
 	p++;
 } while (p < 29);
*/

//Infinite Loops :/
/*
These create Infinite Loops and makes it sound like my computer is about to explode.

var i = 20;
while (i <= 20) {
	console.log(i)
	i--
}

var p = 29;
while (p <= 29) {
  	console.log(p);
  	p--
  }

var p = 99;
while (p >= 0) {
	console.log(p + " is going to be divided by 3!");
	p /= 3;
}
*/

//This works! It skip counts down by 3.
/*
var p = 99;
while (p > 0) {
	console.log(p);
	p = p - 3;
} 
*/

//Change to a For Loop...it works, added break keyword and loop stops at 18!

/*
for (var p = 99; p > 0; p = p - 3) {
	if (p == 15) {
		console.log('Break!')
		break;
	}
	console.log(p + ' is in a for loop!');
}
*/
//This For Loop skip counts down by 3, skips over 15 and continues.
 for (var p = 99; p > 0; p = p - 3) {
	
	if (p == 15) {
		console.log('Break!')
		continue;
	} else {
		console.log(p);
	}
	
}

/* 
FOR LOOPS: compact syntax of WHILE LOOPS
FOR and WHILE LOOPS are essentially synonymous
 
for (var i = 0; i < 10; i++) {
	console.log('for loop iteration #' + i);
}

var i = 0 initializes variable, loop counter (BEFORE)
i < 10 sets condition to check against a value (WHILE)
i++ change in value of variable (END)

can initialize and change multiple values by separating with commas
*/

/*
for (var g = 100; g > 0; g = g - 5) {
	console.log(g);
}
*/

//BREAK & CONTINUE: keywords that allow customization of loops
/*
var m = 0;
while (m < 10) {
	console.log(m);
	if (m == 8) {
		console.log("about to break");
		break;
		console.log("break out"); //This will never be seen due to the break just before.
	}
	m++;
}

console.log("all done");
*/

//EXAMPLE OF KEYWORD CONTINUE

/*
for (var i = 1; i < 100; i++) {
    if (i % 2 !== 0) {
        // number isn't even
        // odd numbers aren't as cool
        // skip the rest of the loop and continue with the next iteration
        continue;
    }
    console.log('Here is a lovely even number: ' + i);
}
*/
/*
var random = Math.floor((Math.random()*50)+1)
//console.log("Random odd number to skip is " + random);

for (var d = 0; d < 50; d++) {
	if (d % 2 === 0) {
		continue;
	}
	

	if (d == random) {
		console.log("Skipping this random odd number " + d + " !");
	} else {
		console.log(d + " is an odd number");
	}

	if (d >= 49) {
		break;
	}

}
*/