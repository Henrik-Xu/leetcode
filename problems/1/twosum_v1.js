/**
 * @param {number[]} array
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(array, target) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    const element = array[i];
    for (let j = i + 1; j < length; j++) {
      if (target - element == array[j]) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
