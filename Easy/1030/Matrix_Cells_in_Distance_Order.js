/**
 * Matrix Cells in Distance Order
 */
const allCellsDistOrder = (r, c, r0, c0) => {
    const visited = new Set();
    const ret = [];
    const queue = [[r0, c0]];
    while (queue.length) {
      const [x, y] = queue.shift();
      if (x > r - 1 || x < 0 || y > c -1 || y < 0 || visited.has(x * 100 + y)) continue;
      ret.push([x, y]);
      visited.add(x * 100 + y);
      [[0, -1], [0, 1], [1, 0], [-1, 0]].forEach(move => {
        queue.push([x + move[0], y + move[1]]);
      });
    }
    return ret;
  };