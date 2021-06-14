/** All Nodes Distance K in Binary Tree
 *  We are given a binary tree (with root node root), a target node, and an integer value k.
 *  Return a list of the values of all nodes that have a distance k from the target node.  The answer can be returned in any order.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let distanceK = function(root, target, k) {
  let map = new Map();
  let dfs = function(node, parent) {
    if (!node) return;
    map.set(node, parent);
    dfs(node.left, node);
    dfs(node.right, node);
  };
  dfs(root, null);
  let seen = new Set();
  seen.add(null);
  seen.add(target);
  let queue = [null, target];
  let dist = 0;
  while (queue.length != 0) {
    let node = queue.shift();
    if (node == null) {
      if (dist == k) {
        return queue.map(x => x.val);
      }
      queue.push(null);
      dist++;
    } else {
      if (!seen.has(node.left)) {
        seen.add(node.left);
        queue.push(node.left);
      }
      if (!seen.has(node.right)) {
        seen.add(node.right);
        queue.push(node.right);
      }
      let parent = map.get(node);
      if (!seen.has(parent)) {
        seen.add(parent);
        queue.push(parent);
      }
    }
  }
  return [];
};
