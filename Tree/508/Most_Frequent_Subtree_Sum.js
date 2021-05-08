/**Most Frequent Subtree Sum
 *Given the root of a binary tree, return the most frequent subtree sum. If there is a tie,
 * return all the values with the highest frequency in any order.
 * The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself).
 */
let TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};
let findFrequentTreeSum = function(root) {
  let count = new Map();
  let maxCount = 0;
  let dfs = function(root) {
    if (root == null) return 0;
    let s = dfs(root.left) + dfs(root.right) + root.val;
    if (count.has(s)) {
      count.set(s, count.get(s) + 1);
    } else {
      count.set(s, 1);
    }
    maxCount = Math.max(maxCount, count.get(s));
    return s;
  };
  dfs(root);
  let res = [];
  for (const key of count.keys()) {
    if (count.get(key) == maxCount) {
      res.push(key);
    }
  }
  return res;
};
