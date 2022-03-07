/**
 * Kth Smallest Element in a Sorted Matrix
 * Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.
 * Note that it is the kth smallest element in the sorted order, not the kth distinct element.
 * You must find a solution with a memory complexity better than O(n2).
 */
let kthSmallest = function(matrix, k) {
  let Pairs = function(r, c, val) {
    this.r = r;
    this.c = c;
    this.val = val;
  };
  let R = matrix.length;
  let queue = [];
  for (let r = 0; r < R && r < k; r++) {
    queue.push(new Pairs(r, 0, matrix[r][0]));
  }
  let res = [];
  while (k-- > 0 && queue.length > 0) {
    let current = queue.shift();
    res.push(current.val);
    if (current.c == R - 1) continue;
    queue.push(
      new Pairs(current.r, current.c + 1, matrix[current.r][current.c + 1])
    );
    queue.sort((a, b) => a.val - b.val);
  }
  return res[res.length - 1];
};
let matrix = [[1, 5, 9], [10, 11, 13], [12, 13, 15]],
  k = 8;
let res = kthSmallest(matrix, k);
console.log(res);
