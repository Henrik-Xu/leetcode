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
  let queue = [root];
  let deep = 1;
  while (deep < depth - 1) {
    let temp = [];
    while (queue.length != 0) {
      let current = queue.shift();
      if (current.left != null) {
        temp.unshift(current.left);
      }
      if (current.right != null) {
        temp.unshift(current.right);
      }
    }
    deep++;
    queue = temp;
  }
  while (queue.length != 0) {
    let current = queue.shift();
    let left = new TreeNode(val);
    left.left = current.left;
    let right = new TreeNode(val);
    right.right = current.right;
    current.right = right;
  }
  return root;
};
