/**
 * Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and
 * postorder is the postorder traversal of the same tree, construct and return the bianry tree.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let buildTree = function(inorder, postorder) {
  if (postorder == null || postorder.length == 0) return;
  if (postorder.length == 1) {
    return new TreeNode(postorder[0]);
  }
  let postIndex = postorder.length - 1;
  let build = function(inorder, postorder, start, end) {
    if (start > end) return null;
    let node = new TreeNode(postorder[postIndex]);
    postIndex--;
    if (start == end) return node;
    let location = findLocation(inorder, start, end, node.val);
    node.right = build(inorder, postorder, location + 1, end);
    node.left = build(inorder, postorder, start, location - 1);
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
  return build(inorder, postorder, 0, postIndex);
};

let r1 = new buildTree([2, 1], [2, 1]);
console.log(r1);
