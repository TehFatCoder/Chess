function makeBoard(cols, rows) {
	let array = new Array(cols);
	for (let i = 0;i < array.length;i++) {
		array[i] = new Array(rows);
	}
	return array;
}

let board, w;
const cols = 8, rows = 8;

function setup() {
	// put setup code here
	createCanvas(800, 800);
	w = floor(width / cols);
	board = makeBoard(cols, rows);
	for (let i = 0;i < cols;i++) {
		for (let j = 0;j < rows;j++) {
			board[i][j] = new Cell(i, j, w, null, null);
		}
	}
}

function draw() {
	// put drawing code here
	background(0);
	for (let i = 0;i < cols;i++) {
		for (let j = 0;j < rows;j++) {
			board[i][j].draw();
		}
	}
}


function Cell(i, j, w, state, type) {
	this.i = i;
	this.j = j;
	this.x = i * w;
	this.y = j * w;
	this.w = w;
	this.state = state;
	this.type = type;

	this.draw = () => {
		if (this.i % 2 == this.j % 2) {
			fill(255);
		} else {
			fill(0);
		}
		rect(this.x, this.y, this.w - 1, this.w - 1);
	}
}