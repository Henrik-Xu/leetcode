/** Complete Binary Tree Inserter
 * A complete binary tree is a binary tree in which every level, except possibly the last, is completely filled, and all nodes are as far left as possible.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 */
var CBTInserter = function(root) {
  this.root = root;
  this.deque = [];
  let queue = [root];
  while (queue.length != 0) {
    let current = queue.shift();
    if (current.left == null || current.right == null) {
      this.deque.push(current);
    }
    if (current.left) {
      queue.push(current.left);
    }
    if (current.right) {
      queue.push(current.right);
    }
  }
};

/**
 * @param {number} v
 * @return {number}
 */
CBTInserter.prototype.insert = function(v) {
  let node = new TreeNode(v);
  this.deque.push(node);
  let first = this.deque[0];
  if (first.left == null) {
    first.left = node;
  } else if (first.right == null) {
    first.right = node;
    this.deque.shift();
  }
  return first.val;
};

/**
 * @return {TreeNode}
 */
CBTInserter.prototype.get_root = function() {
  return this.root;
};

/**
 * Your CBTInserter object will be instantiated and called as such:
 */
var obj = new CBTInserter(new TreeNode(1));
var param_1 = obj.insert(2);
var param_2 = obj.get_root();
