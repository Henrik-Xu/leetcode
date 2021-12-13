/**
 * Peeking Iterator
 * Design an iterator that supports the peek operation on an existing iterator in addition to the hasNext and the next operations.
 */

// function Iterator() {
//   @ return { number }
//   this.next = function () { // return the next number of the iterator

//   };

//   @return { boolean }
//   this.hasNext = function () { // return true if it still has numbers

//   };
// };

/**
 * @param {Iterator} iterator
 */
var PeekingIterator = function(iterator) {
  let a = [];
  while (iterator.hasNext()) {
    a.push(iterator.next());
  }
  this.a = a;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function() {
  return this.a[0];
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function() {
  return this.a.shift();
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function() {
  return this.a.length != 0;
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */
