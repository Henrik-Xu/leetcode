/**
 * Shuffle an Array
 * Implement the Solution class:
 * Solution(int[] nums) Initializes the object with the integer array nums.
 * int[] reset() Resets the array to its original configuration and returns it.
 * int[] shuffle() Returns a random shuffling of the array.
 */
/**
 * @param {number[]} nums
 */
let Solution = function(nums) {
  this.origin = [...nums];
  this.array = nums;
  this.len = nums.length;
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  return this.origin;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  for (let i = 0; i < this.len; i++) {
    this.swapAt(i, this.generateRandom(i, this.len));
  }
  return this.array;
};

Solution.prototype.swapAt = function(i, j) {
  [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
};

Solution.prototype.generateRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
let solution = new Solution([1, 2, 3]);
let res = solution.shuffle();
console.log(res);
res = solution.reset(); // Resets the array back to its original configuration [1,2,3]. Return [1, 2, 3]
console.log(res);
res = solution.shuffle();
console.log(res);
