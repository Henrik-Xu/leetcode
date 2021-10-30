/**
 * Construct Binary Tree from Preorder and Inorder Traversal
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree
 * and inorder is the inorder traversal of the same tree, construct and return the binary tree.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let buildTree = function(preorder, inorder) {
  if (preorder == null || preorder.length == 0) return null;
  if (preorder.length == 1) {
    return new TreeNode(preorder[0]);
  }
  let findIndex = function(target) {
    for (let i = 0; i < inorder.length; i++) {
      if (target == inorder[i]) {
        return i;
      }
    }
    return -1;
  };
  let rootIndex = 0;
  let construct = function(start, end) {
    if (start > end) return null;
    let root = new TreeNode(preorder[rootIndex++]);
    let index = findIndex(root.val);
    root.left = construct(start, index - 1);
    root.right = construct(index + 1, end);
    return root;
  };
  return construct(0, preorder.length - 1);
};

let preorder = [3, 9, 20, 15, 7],
  inorder = [9, 3, 15, 20, 7];
let res = buildTree(preorder, inorder);
console.log(res);
