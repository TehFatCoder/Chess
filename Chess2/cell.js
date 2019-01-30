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
		image(sheet, 100, 100, 100, 100, 0, 0, 70, 100);
		rect(this.x, this.y, this.w - 1, this.w - 1);
	}
}