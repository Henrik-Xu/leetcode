/**  Construct Binary Tree from Preorder and Postorder Traversal
 * Return any binary tree that matches the given preorder and postorder traversals.
 * Values in the traversals pre and post are distinct positive integers.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let constructFromPrePost = function(pre, post) {
  let root = new TreeNode(pre.shift());
  if (root.val != post[0]) {
    root.left = constructFromPrePost(pre, post);
  }
  if (root.val != post[0]) {
    root.right = constructFromPrePost(pre, post);
  }
  post.shift();
  return root;
};

let res = constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]);
console.log(res);
