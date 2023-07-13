/**
 * Shortest Distance to a Character
 */
let shortestToChar = function (s, c) {
    let n = s.length, pos = -n;
    let res = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
      if (s.charAt(i) == c) {
        pos = i;
      }
      res[i] = i - pos;
    }
    for (let i = pos - 1; i >= 0; i--) {
      if (s.charAt(i) == c) {
        pos = i;
      }
      res[i] = Math.min(res[i], pos - i);
    }
    return res;
  }