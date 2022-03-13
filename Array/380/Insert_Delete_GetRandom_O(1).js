/**
 * Insert Delete GetRandom O(1)
 */

let RandomizedSet = function() {
  this.valMap = new Map();
  this.indexMap = new Map();
  this.highest = -1;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if (this.valMap.has(val)) return false;
  this.highest += 1;
  this.valMap.set(val, this.highest);
  this.indexMap.set(this.highest, val);
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if (!this.valMap.has(val)) return false;

  const currentIndex = this.valMap.get(val);
  const valueAtLastIndex = this.indexMap.get(this.highest);

  this.indexMap.set(currentIndex, valueAtLastIndex);
  this.valMap.set(valueAtLastIndex, currentIndex);

  this.valMap.delete(val);
  this.indexMap.delete(this.highest);
  this.highest -= 1;
  return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
  if (this.highest < 0) return null;
  const randomIndex = this.generateRandom();
  return this.indexMap.get(randomIndex);
};

RandomizedSet.prototype.generateRandom = function() {
  return Math.floor(Math.random() * (this.highest + 1));
};

let randomizedSet = new RandomizedSet();
let res = randomizedSet.insert(0); // Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log(res);
res = randomizedSet.insert(1); // Returns false as 2 does not exist in the set.
console.log(res);
res = randomizedSet.remove(0); // Inserts 2 to the set, returns true. Set now contains [1,2].
console.log(res);
res = randomizedSet.insert(2); // getRandom() should return either 1 or 2 randomly.
console.log(res);
res = randomizedSet.remove(1); // Removes 1 from the set, returns true. Set now contains [2].
console.log(res);
res = randomizedSet.insert(2); // 2 was already in the set, so return false.
console.log(res);
res = randomizedSet.getRandom(); // Since 2 is the only number in the set, getRandom() will always return 2.
console.log(res);
