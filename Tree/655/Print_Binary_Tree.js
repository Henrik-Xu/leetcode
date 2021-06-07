/** Print Binary Tree
 * Given the root of a binary tree, construct a 0-indexed m x n string matrix res that represents a formatted layout of the tree.
 * The formatted layout matrix should be constructed using the following rules:
 * The height of the tree is height and the number of rows m should be equal to height + 1.
 * The number of columns n should be equal to 2height+1 - 1.
 * Place the root node in the middle of the top row (more formally, at location res[0][(n-1)/2]).
 * For each node that has been placed in the matrix at position res[r][c], place its left child at res[r+1][c-2height-r-1] and its right child at res[r+1][c+2height-r-1].
 * Continue this process until all the nodes in the tree have been placed.
 * Any empty cells should contain the empty string "".
 * Return the constructed matrix res.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let printTree = function(root) {
  function getHeight(root) {
    if (root == null) return 0;
    let left = getHeight(root.left);
    let right = getHeight(root.right);
    return Math.max(left, right) + 1;
  }
  function generate2DArr(row, column) {
    let arr = Array(row);
    for (let i = 0; i < row; i++) {
      arr[i] = new Array(column).fill("");
    }
    return arr;
  }
  function updateArr(arr, r, c, height, root) {
    if (!root) {
      return;
    }
    arr[r][c] = `${root.val}`;
    updateArr(arr, r + 1, c - Math.pow(2, height - r - 1), height, root.left);
    updateArr(arr, r + 1, c + Math.pow(2, height - r - r), height, root.right);
  }
  if (!root) {
    return;
  }
  let m = getHeight(root);
  let n = Math.pow(2, m) - 1;
  let arr = generate2DArr(m, n);
  let r = 0;
  let c = Math.floor((n - 1) / 2);
  updateArr(arr, r, c, m - 1, root);
  return arr;
};
