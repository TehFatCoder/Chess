let board, w;
const cols = 8, rows = 8;
const numbers = [1, 2, 3, 4, 5, 6, 7, 8],
			letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
let sheet;

function preload() {
	sheet = loadImage("sheet.png");
}

function setup() {
	// put setup code here
	createCanvas(850, 850);
	w = 100;
	board = makeBoard(cols, rows);
	for (let i = 0;i < cols;i++) {
		for (let j = 0;j < rows;j++) {
			board[i][j] = new Cell(i, j, w, null, null);
		}
	}
}

function draw() {
	// put drawing code here
	background(255);
	for (let i = 0;i < cols;i++) {
		for (let j = 0;j < rows;j++) {
			board[i][1].type = "pawn";
			board[i][1].state = "white";

			board[i][6].type = "pawn";
			board[i][1].state = "black";

			board[i][j].draw();
		}
	}

	fill(0);
	textSize(64);
	for (let i = 0;i < numbers.length;i++) {
		text(numbers[i], width - 40, i * 100 + 70);
	}
	for (let i = 0;i < numbers.length;i++) {
		text(letters[i], i * 100 + 30, height);
	}
}
