
function Tank(id, x, y, direction, arena) {
	this.id = id;
	this.direction = direction;
	this.onMove = false;
	this.x = x;
	this.y = y;
	this.html = '<div class="tank" id="tank_' + id + '"></div>';
	this.arena = arena;

	this.render = function () {
		//
	};

	this.turnRight = function () {
		//
	};

	this.turnLeft = function () {
		//
	};

	this.setDirection = function () {
		//
	};




	// var $arena = $(arena);
	// if ($arena) {
	// 	$arena.append(this.html);
	// }

	//return this;
}

// var t1 = new Tank(1, 200, 100, 1, '.arena');
// var t2 = new Tank(2, 100, 100, 2, '.arena');

// console.log(t1);
// console.log(t2);


