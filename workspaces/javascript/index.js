/**
 * @param {number[]} array
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(array, target) {
  const map = new Map();
  const length = array.length;
  for (let i = 0; i < length; i++) {
    map.set(array[i], i);
  }
  for (let i = 0; i < length; i++) {
    const element = target - array[i];
    if (map.has(element) && map.get(element) !== i) {
      return [i, map.get(element)];
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
