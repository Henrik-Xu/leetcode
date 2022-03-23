/**
 * Number of Boomerangs
 * You are given n points in the plane that are all distinct, where points[i] = [xi, yi].
 * A boomerang is a tuple of points (i, j, k) such that the distance between i and j equals
 * the distance between i and k (the order of the tuple matters).
 * Return the number of boomerangs.
 */
let numberOfBoomerangs = function(points) {
  let getDistance = function(A, B) {
    let dx = A[0] - B[0];
    let dy = A[1] - B[1];
    return dx * dx + dy * dy;
  };
  let res = 0;
  let map = new Map();
  for (let i = 0; i < points.length; i++) {
    for (let j = 0; j < points.length; j++) {
      if (i == j) {
        continue;
      }
      let d = getDistance(points[i], points[j]);
      if (map.has(d)) {
        map.set(d, map.get(d) + 1);
      } else {
        map.set(d, 1);
      }
    }

    for (const [key, value] of map) {
      res += value * (value - 1);
    }
    map.clear();
  }
  return res;
};

let points = [[0, 0], [1, 0], [2, 0]];
let res = numberOfBoomerangs(points);
console.log(res);
