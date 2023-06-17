/**
 * Koko Eating Bananas
 */
let minEatingSpeed = function (piles, h) {
  let high = getMax(piles);
  let low = 0;
  while (low <= high) {
    let middle = low + Math.floor((high - low) / 2);
    let time = getHour(piles, middle);
    if (time > h) {
      low = middle + 1;
    } else {
      high = middle - 1;
    }
  }
  return low;
};
let getMax = function (piles) {
  let max = Number.MIN_VALUE;
  for (const p of piles) {
    max = max > p ? max : p;
  }
  return max;
}
let getHour = function (piles, hour) {
  let res = 0;
  for (const p of piles) {
    res += Math.ceil(p / hour);
  }
  return res;
}
let piles = [30, 11, 23, 4, 20], h = 6;
let res = minEatingSpeed(piles, h);
console.log(res);
