
function createTank(id, x, y, direction, arena) {
	var tank = {};
	tank.direction = direction;
	tank.onMove = false;
	tank.x = x;
	tank.y = y;
	tank.id = id;
	tank.html = '<div class="tank" id="tank_' + id + '"></div>';

	var $arena = $(arena);
	if ($arena) {
		$arena.append(tank.html);
	}

	return tank;
}

