/**
 * Friends Of Appropriate Ages
 */
let numFriendRequests = function (ages) {
  let count = new Map();
  for (const age of ages) {
    if (count.has(age)) {
      count.set(age, count.get(age) + 1);
    } else {
      count.set(age, 1);
    }
  }
  let res = 0;
  for (const [a, aValue] of count.entries()) {
    for (const [b, bValue] of count.entries()) {
      if (request(a, b)) {
        res += aValue * (bValue - (a == b ? 1 : 0));
      }
    }
  }
  return res;
};
let request = function (x, y) {
  return !(y <= 0.5 * x + 7 || y > x || (y > 100 && x < 100));
}
let ages = [54, 23, 102, 90, 40, 74, 112, 74, 76, 21];
let res = numFriendRequests(ages);
console.log(res);
