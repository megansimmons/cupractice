/*(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ["Bug", "Gandi", "Biscuit", "Stella"];
    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log(names.length);
    // TODO: Create log statements that will print each of the names array elements individually.
    console.log("The first name in the array is " + names[0] + ".");
    console.log("The second name in the array is " + names[1] + ".");
    console.log("The third name in the array is " + names[2] + ".");
    console.log("The fourth name in the array is " + names[3] + ".");
})(); */


(function(){
	"use strict";

	var petNames = ["Bug", "Gandi", "Biscuit", "Stella"];
 	console.log(petNames.length); //logs 4 bc 4 names in array

 	for (var p = 0; p < petNames.length; p++) {
 		console.log("The pet name at index " + p + " is " + petNames[p] + ".");
 	}

 	petNames.forEach(function (element, index, array) {
 		console.log("The pet name at index " + index + " is " + element + ".");
 	})

})();