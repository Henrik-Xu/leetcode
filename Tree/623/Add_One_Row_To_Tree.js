/** Add One Row to Tree
 * Given the root of a binary tree and two integers val and depth, add a row of nodes with value val at the given depth depth.
 * Note that the root node is at depth 1.
 * The adding rule is:
 *    Given the integer depth, for each not null tree node cur at the depth depth - 1, create two tree nodes with value val as cur's
 * left subtree root and right subtree root.
 *    cur's original left subtree should be the left subtree of the new left subtree root.
 *    cur's original right subtree should be the right subtree of the new right subtree root.
 *    if depth == 1 that means there is no depth depth - 1 at all, then create a tree node with
 *    value val as the new root of the whole original tree, and the original tree is the new root's left subtree.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let addOneRow = function(root, val, depth) {
  if (!root) return;
  if (depth == 1) {
    let node = new TreeNode(val);
    node.left = root;
    return node;
  }
  insert(root, val, depth, 1);
};
let insert = function(root, val, depth, deep) {
  if (root == null) return;
  if (deep == depth - 1) {
    let nodeLeft = new TreeNode(val);
    nodeLeft.left = root.left;
    let nodeRight = new TreeNode(val);
    nodeRight.right = root.right;
    root.left = nodeLeft;
    root.right = nodeRight;
  } else {
    insert(root.left, val, depth, deep + 1);
    insert(root.right, val, depth, deep + 1);
  }
};
