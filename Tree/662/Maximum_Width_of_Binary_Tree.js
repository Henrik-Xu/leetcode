/** Maximum Width of Binary Tree
 * Given the root of a binary tree, return the maximum width of the given tree.
 * The maximum width of a tree is the maximum width among all levels.
 * The width of one level is defined as the length between the end-nodes (the leftmost
 *  and rightmost non-null nodes), where the null nodes between the end-nodes are also counted into the length calculation.
 * It is guaranteed that the answer will in the range of 32-bit signed integer.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
var widthOfBinaryTree = function(root) {
  function dfs(root, level, order, start, end) {
    if (!root) return;
    if (start.length == level) {
      start.push(order);
      end.push(order);
    } else {
      end[level] = order;
    }
    let cur = end[level] - start[level] + 1;
    let left = dfs(root.left, level + 1, 2 * order, start, end);
    let right = dfs(root.right, level + 1, 2 * order + 1, start, end);
    return Math.max(cur, Math.max(left, right));
  }
  return dfs(root, 0, 1, [], []);
};
