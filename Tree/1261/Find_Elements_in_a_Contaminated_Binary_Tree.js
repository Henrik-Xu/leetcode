/**
 * Find Elements in a Contaminated Binary Tree
 */
/**
 * @param {TreeNode} root
 */
var FindElements = function(root) {
  let set = new Set();
  let dfs = function(root, val) {
    if (!root) return;
    set.add(val);
    dfs(root.left, 2 * val + 1);
    dfs(root.right, 2 * val + 2);
  };
  dfs(root, 0);
  this.set = set;
};

/**
 * @param {number} target
 * @return {boolean}
 */
FindElements.prototype.find = function(target) {
  return this.set.has(target);
};

/**
 * Your FindElements object will be instantiated and called as such:
 * var obj = new FindElements(root)
 * var param_1 = obj.find(target)
 */
