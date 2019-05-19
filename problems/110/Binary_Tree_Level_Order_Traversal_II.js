/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

let levelOrderBottom = function(root) {
  let result = [];

  let getArray = function(node, index) {
    if (node == null) return [];
    if (index >= result.length) {
      result[index] = [];
    }
    result[index].push(node.val);
    getArray(node.left, index + 1);
    getArray(node.right, index + 1);
  };
  getArray(root, 0);
  return result.reverse();
};

let root = new TreeNode(3);
let left1 = new TreeNode(9);
let right1 = new TreeNode(20);

let right1_1 = new TreeNode(15);
let right1_2 = new TreeNode(7);

right1.left = right1_1;
right1.right = right1_2;

root.left = left1;
root.right = right1;

let answer = levelOrderBottom(root);

console.log(answer);
