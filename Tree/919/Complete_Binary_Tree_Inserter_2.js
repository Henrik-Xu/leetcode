function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 */
class CBTInserter {
  constructor(root) {
    this.root = root;
    this.dequeue = [];
    let queue = [root];
    while (queue.length != 0) {
      let current = queue.shift();
      if (current.left == null || current.right == null) {
        this.dequeue.push(current);
      }
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
  }
  insert(v) {
    let node = new TreeNode(v);
    this.dequeue.push(node);
    let first = this.dequeue[0];
    if (first.left == null) {
      first.left = node;
    } else if (first.right == null) {
      first.right = node;
      this.dequeue.shift();
    }
    return first.val;
  }
  get_root() {
    return this.root;
  }
}
