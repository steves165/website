var randomNumber = 0;

function Result(type, win, lose, draw) {
  this.type = type;
  this.results = [win, '<h3>Yay you WIN!</h3>', lose, '<h3>Oh dear you lose!!</h3>', draw, '<h3>It was a draw!!</h3>'];
}

var rock = new Result(/^Rock/, 3, 2, 1);
var paper = new Result(/^Paper/, 1, 3, 2);
var scissors = new Result(/^Scissors/, 2, 1, 3);

function process(inp) {

  var resultArea = $('#result');
  randomNumber = Math.round(1 + Math.random() * 2);

  if (rock.type.test(inp)) {
    resultArea.html(rock.results[rock.results.indexOf(randomNumber) + 1]);
  } else if (paper.type.test(inp)) {
    resultArea.html(paper.results[paper.results.indexOf(randomNumber) + 1]);
  } else if (scissors.type.test(inp)) {
    resultArea.html(scissors.results[scissors.results.indexOf(randomNumber) + 1]);
  } else {
    console.error('something odd has happened');
  }
}

function clr() {
	resultArea.html('&nbsp');
}
