function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let levelOrderBottom = function(root) {
  if (!root) return [];
  let levels = [];
  let queue = [root];
  while (queue.length != 0) {
    let length = queue.length;
    let level = [];
    for (let i = 0; i < length; i++) {
      let current = queue.shift();
      level.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right);
      }
    }
    levels.unshift(level);
  }
  return levels;
};
