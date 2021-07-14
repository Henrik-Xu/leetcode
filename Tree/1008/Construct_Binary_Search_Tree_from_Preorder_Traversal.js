/**
 * Construct Binary Search Tree from Preorder Traversal
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var bstFromPreorder = function(preorder) {
  let index = 0;
  let constructTree = function(preorder, bound) {
    if (preorder.length == index || preorder[index] > bound) return null;
    let node = new TreeNode(preorder[index++]);
    node.left = constructTree(preorder, node.val);
    node.right = constructTree(preorder, bound);
    return node;
  };
  return constructTree(preorder, Number.MAX_VALUE);
};
let res = bstFromPreorder([8, 5, 1, 7, 10, 12]);
console.log(res);
