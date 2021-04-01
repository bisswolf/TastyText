function countwords() {
	let noc = document.getElementById("words").value.length;
	let now = document.getElementById("words").value;
	let nod = document.getElementById("words").value;
	let non = document.getElementById("words").value;
	let numofwhitespace = document.getElementById("words").value;

	// Number of whitespaces

	numofwhitespace = numofwhitespace.match(/\s/g);
	if (numofwhitespace == null) {
		numofwhitespace = 0;
	} else {
		numofwhitespace = numofwhitespace.length;
	}

	//Number of Digits
	nod = nod.match(/\d/g);
	if (nod == null) {
		nod = 0;
	} else {
		nod = nod.length;
	}

	//Number of Numbers
	non = non.match(/\d+/g);
	if (non == null) {
		non = 0;
	} else {
		non = non.length;
	}
	console.log(non);
	// Number of words
	now = now.match(/\w+/g);
	if (now == null) {
		now = 0;
	} else {
		now = now.length;
	}
	now = now - non;

	//Number of alphabets
	let numberofalphabets = noc - nod - numofwhitespace + 0;

	document.getElementById("charactercount").innerHTML = "Characters = " + noc;
	document.getElementById("wordcount").innerHTML = "Words = " + now;
	document.getElementById("digicount").innerHTML = "Digits = " + nod;
	document.getElementById("alphabetcount").innerHTML =
		"Alphabets = " + numberofalphabets;
	document.getElementById("numcount").innerHTML = "Numbers = " + non;
	document.getElementById("white_spacecount").innerHTML =
		"Whitespaces = " + numofwhitespace;
}
