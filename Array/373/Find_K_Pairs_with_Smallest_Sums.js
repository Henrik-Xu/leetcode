/**
 * Find K Pairs with Smallest Sums
 * You are given two integer arrays nums1 and nums2 sorted in ascending order and an integer k.
 * Define a pair (u, v) which consists of one element from the first array and one element from the second array.
 * Return the k pairs (u1, v1), (u2, v2), ..., (uk, vk) with the smallest sums.
 */
let kSmallestPairs = function(nums1, nums2, k) {
  let Pairs = function(first, second, next) {
    this.first = first;
    this.second = second;
    this.next = next;
  };
  if (nums1.length == 0 || nums2.length == 0 || k == 0) return [];
  let res = [];
  let queue = [];
  for (let i = 0; i < nums1.length && i < k; i++) {
    queue.push(new Pairs(nums1[i], nums2[0], 0));
  }
  while (k-- > 0 && queue.length != 0) {
    let current = queue.shift();
    res.push([current.first, current.second]);
    if (current.next == nums2.length - 1) continue;
    queue.push(
      new Pairs(current.first, nums2[current.next + 1], current.next + 1)
    );
    queue.sort((a, b) => a.first + a.second - (b.first + b.second));
  }
  return res;
};
let nums1 = [1, 7, 11],
  nums2 = [2, 4, 6],
  k = 3;
let res = kSmallestPairs(nums1, nums2, k);
console.log(res);
