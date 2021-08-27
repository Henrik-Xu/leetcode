/**
 * Number of Good Leaf Nodes Pairs
 * Given the root of a binary tree and an integer distance.
 * A pair of two different leaf nodes of a binary tree is said to be good if the length of the shortest path between them is less than or equal to distance
 * Return the number of good leaf node pairs in the tree.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let countPairs = function(root, distance) {
  let result = 0;
  let dfs = function(root, distance) {
    if (!root) return new Array(distance + 1).fill(0);
    if (root.left == null && root.right == null) {
      let res = new Array(distance + 1).fill(0);
      res[1]++;
      return res;
    }
    let left = dfs(root.left, distance);
    let right = dfs(root.right, distance);
    for (let i = 1; i < left.length; i++) {
      for (let j = distance - 1; j >= 0; j--) {
        if (i + j <= distance) {
          result += left[i] * right[j];
        }
      }
    }
    let res = new Array(distance + 1).fill(0);
    // shift by 1
    for (let i = 1; i < res.length - 1; i++) {
      res[i + 1] = left[i] + right[i];
    }
    return res;
  };
  dfs(root, distance);
  return result;
};
