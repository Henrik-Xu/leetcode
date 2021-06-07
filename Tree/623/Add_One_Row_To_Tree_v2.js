function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function Node(node, depth) {
  this.node = node;
  this.depth = depth;
}

let addOneRow = function(root, val, depth) {
  if (!root) return;
  if (depth == 1) {
    let node = new TreeNode(val);
    node.left = root;
    return node;
  }
  let stack = [new Node(root, 1)];
  while (stack.length != 0) {
    let current = stack.pop();
    if (current.node == null) continue;
    if (current.depth == depth - 1) {
      let left = new TreeNode(val);
      left.left = current.node.left;
      let right = new TreeNode(val);
      right.right = current.node.right;
      current.node.left = left;
      current.node.right = right;
    } else {
      stack.push(new Node(current.node.left, current.depth + 1));
      stack.push(new Node(current.node.right, current.depth + 1));
    }
  }
  return root;
};
