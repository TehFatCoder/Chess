function makeBoard(cols, rows) {
	let array = new Array(cols);
	for (let i = 0;i < array.length;i++) {
		array[i] = new Array(rows);
	}
	return array;
}