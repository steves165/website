var randomNumber = 0;

function process(inp) {
    	randomNumber = 1 + Math.random() * 3;
	randomNumber = Math.round(randomNumber);

    if (inp == "Rock" && randomNumber == 1) {
        document.getElementById("result").innerHTML = "<h1>It was a Draw!!</h1>";
    } else if (inp == "Rock" && randomNumber == 2) {
        document.getElementById("result").innerHTML = "<h1>Oh Dear you lose!!</h1>";
    } else if (inp == "Rock" && randomNumber == 3) {
        document.getElementById("result").innerHTML = "<h1>Yay you WIN!!</h1>";
    } else if (inp == "Paper" && randomNumber == 1) {
        document.getElementById("result").innerHTML = "<h1>Yay you WIN!!</h1>";
    } else if (inp == "Paper" && randomNumber == 2) {
        document.getElementById("result").innerHTML = "<h1>It was a Draw!!</h1>";
    } else if (inp == "Paper" && randomNumber == 3) {
        document.getElementById("result").innerHTML = "<h1>Oh Dear you lose!!</h1>";
    } else if (inp == "Scissors" && randomNumber == 1) {
        document.getElementById("result").innerHTML = "<h1>Oh Dear you lose!!</h1>";
    } else if (inp == "Scissors" && randomNumber == 2) {
        document.getElementById("result").innerHTML = "<h1>Yay you WIN!!</h1>";
    } else if (inp == "Scissors" && randomNumber == 3) {
        document.getElementById("result").innerHTML = "<h1>It was a Draw!!</h1>";
    }
}

function clr() {
	document.getElementById("result").innerHTML = '&nbsp;';
}