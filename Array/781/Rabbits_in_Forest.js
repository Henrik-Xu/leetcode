/**
 * Rabbits in Forest
 */
let numRabbits = function (answers) {
  let map = new Map();
  for (const num of answers) {
    if (map.has(num)) {
      map.set(num, map.get(num) + 1);
    } else {
      map.set(num, 1);
    }
  }
  let res = 0;
  for (const [key, count] of map) {
    res += Math.ceil(count / (key + 1)) * (key + 1);
  }
  return res;
};
let answers = [10, 10, 10];
let res = numRabbits(answers);
console.log(res);
