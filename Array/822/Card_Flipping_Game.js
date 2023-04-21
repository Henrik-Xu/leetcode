/**
 * Card Flipping Game
 */
let flipgame = function (fronts, backs) {
  let set = new Set();
  for (let i = 0; i < fronts.length; i++) {
    if (fronts[i] == backs[i]) {
      set.add(fronts[i]);
    }
  }
  let res = 3000;
  for (const f of fronts) {
    if (!set.has(f)) {
      res = Math.min(res, f);
    }
  }
  for (const b of backs) {
    if (!set.has(b)) {
      res = Math.min(res, b);
    }
  }
  return res % 3000;
};
