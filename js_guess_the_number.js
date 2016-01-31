var target; 
var guess_input_text;
var guess_input;
var finished = false;
var guesses = 0;

function play_game() {
	var random_number = Math.random() * 100; //random number <0, 100)
	var random_number_integer = Math.floor(random_number);
	target = random_number_integer + 1; //random number <1, 100>
	alert(target)

	while (!finished) {
		guess_input_text = prompt("I'm thinking of a number in the range 1 to 100.\n\nWhat is the number?");
		if (guess_input_text) {
			guess_input = parseInt(guess_input_text);
			guesses += 1;
			finished = check_guess();
		}
		else {
			finished = true;
		}
	}
}

function check_guess() { 
	if (isNaN(guess_input)){ //checks whether input is a number
		alert("You have not entered a number.\n\nPlease enter a number in the range 1 to 100.");
		return false;
	}

	if ((guess_input < 1) || (guess_input > 100)) { //checks whether input is in a range
		alert ("Please, enter an integer number in the range 1 to 100.");
		return false;
	}

	if (guess_input > target) {
		alert("Your number is too large! Try again.");
		return false;
	}

	if (guess_input < target) {
		alert("Your number is too small. Try again");
		return false;
	}

	alert("You got it! The number was " + target + "\n\nIt took you " + guesses + "guesses to get the number.");
	return true;
}