/**
 * @param {number[]} array
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(array, target) {
  const map = new Map();
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const element = target - array[i];
    if (map.has(element)) {
      return [map.get(element), i];
    }
    map.set(array[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 26));
