/**
 * Largest Triangle Area
 */
let largestTriangleArea = function (points) {
    let res = 0;
    for (const i of points) {
      for (const j of points) {
        for (const k of points) {
          res = Math.max(res, 0.5 * Math.abs(i[0] * j[1] + j[0] * k[1] + k[0] * i[1] - j[0] * i[1] - k[0] * j[1] - i[0] * k[1]));
        }
      }
    }
    return res;
  };