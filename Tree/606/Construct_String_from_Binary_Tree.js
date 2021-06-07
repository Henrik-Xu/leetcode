/**
 * Construct String from binary Tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let tree2str = function(root) {
  if (!root) return "";
  const left = tree2str(root.left);
  const right = tree2str(root.right);

  if (right) {
    return `${root.val}(${left})(${right})`;
  } else if (left) {
    return `${root.val}{${left}}`;
  } else {
    return `${root.val}`;
  }
};
