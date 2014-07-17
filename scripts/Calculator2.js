var accum = 0; //accumulator for value at any given time.
var pendOp = ""; //holds the operation that has been clicked untill equals or another operator is activated.

//takes the number button that was pressed and adds them to the readout value.
function numPressed(int) {
	if (document.getElementById("ReadOut").value == 0) {
		document.getElementById("ReadOut").value = int;
	} else {
		document.getElementById("ReadOut").value += int;
	}
}
//operator function, if accumulator is 0 puts "op" in pending operation and makes the accumulator equal to readout other wise adds "op" to pending operation and activates equals function.
function operator(op) {
	if (accum == 0) {
		accum = document.getElementById("ReadOut").value;
		pendOp = op;
		document.getElementById("ReadOut").value = 0;
	} else {
		equals();
		pendOp = op;
		document.getElementById("ReadOut").value = 0;
	}
}
//makes readout value negative by multiplying it by -1.
function negative() {
	document.getElementById("ReadOut").value *= -1;
}
//adds a decimal point to the readout.
function decimal1() {
	if (document.getElementById("ReadOut").value == 0) {
		document.getElementById("ReadOut").value = "0.";
	} else {
		document.getElementById("ReadOut").value = document.getElementById("ReadOut").value + ".";
	}
}
//works out the percentage of one number compared to another.
function percentage() {
	document.getElementById("ReadOut").value = (accum / 100) * document.getElementById("ReadOut").value;
}
//clears all accumulator and readout.
function clearAll() {
	document.getElementById("ReadOut").value = 0;
	accum = 0;
}
//clears on readout.
function clearEntry() {
	document.getElementById("ReadOut").value = 0;
}
	
// first of two equals functions, this is the one called by the operation functions as it doesnt reset the accumulator or display the result.	
function equals() {
	if (pendOp == "-") {
		accum = accum - parseFloat(document.getElementById("ReadOut").value);
	} else if (pendOp == "*") {
		accum = accum * parseFloat(document.getElementById("ReadOut").value);
	} else if (pendOp == "+") {
		accum = (accum * 1) + (document.getElementById("ReadOut").value * 1);
	} else if (pendOp == "/") {
		accum /= parseFloat(document.getElementById("ReadOut").value);
	} else if (pendOp == "^") {
		accum = Math.pow((accum*1), (document.getElementById("ReadOut").value * 1));
	}
}
//same as the other equals function except it resets the accumulator and displays the results of the calculation.
function equals2() {
	if (pendOp == "-") {
		accum = accum - parseFloat(document.getElementById("ReadOut").value);
	} else if (pendOp == "*") {
		accum = accum * parseFloat(document.getElementById("ReadOut").value);
	} else if (pendOp == "+") {
		accum = (accum * 1) + (document.getElementById("ReadOut").value * 1);
	} else if (pendOp == "/") {
		accum /= parseFloat(document.getElementById("ReadOut").value);
	} else if (pendOp == "^") {
		accum = Math.pow((accum*1), (document.getElementById("ReadOut").value * 1));
	}
	document.getElementById("ReadOut").value = accum;
	accum = 0;
}
	