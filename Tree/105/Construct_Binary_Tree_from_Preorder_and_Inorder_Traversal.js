/**
 * Given two integer arrays preorder and inorder where preorder is the preorder traversal of binary tree
 * and inorder is the inorder traversal of the same tree, construct and return binary tree
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let buildTree = function(preorder, inorder) {
  let preIndex = 0;
  if (preorder == null || preorder.length == 0) return null;
  if (preorder.length == 1) {
    return new TreeNode(preorder[0]);
  }
  let build = function(preorder, inorder, start, end) {
    if (start > end) return null;
    let node = new TreeNode(preorder[preIndex]);
    preIndex++;
    if (start == end) return node;
    let index = findLocation(inorder, start, end, node.val);
    node.left = build(preorder, inorder, start, index - 1);
    node.right = build(preorder, inorder, index + 1, end);
    return node;
  };
  let findLocation = function(arr, start, end, target) {
    for (let i = start; i <= end; i++) {
      if (arr[i] == target) {
        return i;
      }
    }
    return -1;
  };
  return build(preorder, inorder, 0, preorder.length - 1);
};
let preorder = [1, 2];
let inorder = [2, 1];
let result = buildTree(preorder, inorder, 0, preorder.length - 1);
console.log(result);
