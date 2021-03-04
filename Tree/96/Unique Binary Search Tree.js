/**
 * Given an integer n, return the number of stucturally unique BST's(binary search trees)
 * which has exactly n nodes of unique values from 1 to n.
 */

/**
 * G(n): the number of unique BST for a sequence of length n.
 * F(i, n), 1 <= i <= n: the number of unique BST, where the number i is the root of BST, and the sequence ranges from 1 to n.
 * First of all, given the above definitions, we can see that the total number of unique BST G(n), is the sum of BST F(i) using each number i as a root.
 * i.e.
 * G(n) = F(1, n) + F(2, n) + ... + F(n, n).
 * Particularly, the bottom cases, there is only one combination to construct a BST out of a sequence of length 1 (only a root) or 0 (empty tree).
 * i.e.
 * G(0)=1, G(1)=1.
 * example：
 * Given a sequence 1…n, we pick a number i out of the sequence as the root, then the number of unique BST with the specified root F(i),
 * is the cartesian product of the number of BST for its left and right subtrees. For example, F(3, 7): the number of unique BST tree with
 *  number 3 as its root. To construct an unique BST out of the entire sequence [1, 2, 3, 4, 5, 6, 7] with 3 as the root, which is to say,
 *  we need to construct an unique BST out of its left subsequence [1, 2] and another BST out of the right subsequence [4, 5, 6, 7],
 *  and then combine them together (i.e. cartesian product). The tricky part is that we could consider the number of unique BST out of
 *  sequence [1,2] as G(2), and the number of of unique BST out of sequence [4, 5, 6, 7] as G(4). Therefore, F(3,7) = G(2) * G(4).
 *  i.e.
 *  F(i, n) = G(i-1) * G(n-i)	1 <= i <= n
 *  Combining the above two formulas, we obtain the recursive formula for G(n). i.e.
 *  G(n) = G(0) * G(n-1) + G(1) * G(n-2) + … + G(n-1) * G(0)
 *  In terms of calculation, we need to start with the lower number, since the value of G(n) depends on the values of G(0) … G(n-1).
 */

let numTrees = function(n) {
  let G = new Array(n + 1).fill(0);
  G[0] = 1;
  G[1] = 1;
  for (let i = 2; i <= n; i++) {
    for (let j = 1; j <= i; ++j) {
      G[i] += G[j - 1] * G[i - j];
    }
  }
  return G[n];
};

let solution = numTrees(3);
console.log(solution);
