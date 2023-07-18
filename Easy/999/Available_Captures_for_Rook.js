/**
 * Available Captures for Rook
 */
function findRook(board) {
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (board[i][j] === 'R') {
				return {i, j};
			}
		}
	}
}

function checkRight(board, i, j) {
	let counter = 0;

	while (true) {
		if (board[i][j] === 'B') {
			break;
		} else if (board[i][j] === 'p') {
			counter++;
			break;
		} else if (j === board[i].length - 1) {
			break;
		}

		j++;
	}

	return counter;
}

function checkLeft(board, i, j) {
	let counter = 0;

	while (true) {
		if (board[i][j] === 'B') {
			break;
		} else if (board[i][j] === 'p') {
			counter++;
			break;
		} else if (j === 0) {
			break;
		}

		j--;
	}

	return counter;
}

function checkTop(board, i, j) {
	let counter = 0;

	while (true) {
		if (board[i][j] === 'B') {
			break;
		} else if (board[i][j] === 'p') {
			counter++;
			break;
		} else if (i === 0) {
			break;
		}

		i--;
	}

	return counter;
}

function checkDown(board, i, j) {
	let counter = 0;

	while (true) {
		if (board[i][j] === 'B') {
			break;
		} else if (board[i][j] === 'p') {
			counter++;
			break;
		} else if (i === board.length - 1) {
			break;
		}

		i++;
	}

	return counter;
}

let numRookCaptures = function(board) {
	let rook = findRook(board);
	let counter = 0;

	counter += checkRight(board, rook.i, rook.j);
	counter += checkLeft(board, rook.i, rook.j);
	counter += checkTop(board, rook.i, rook.j);
	counter += checkDown(board, rook.i, rook.j);

	return counter;
};