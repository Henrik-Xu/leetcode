/**
 * Two Sum II - Input Array Is Sorted
 */
let twoSum = function(numbers, target) {
  let map = new Map();
  for (let i = 0; i < numbers.length; i++) {
    let rest = target - numbers[i];
    if (map.has(rest)) {
      return [map.get(rest), i + 1];
    } else {
      map.set(numbers[i], i + 1);
    }
  }
};
let numbers = [2, 7, 11, 15],
  target = 9;
let res = twoSum(numbers, target);
console.log(res);
