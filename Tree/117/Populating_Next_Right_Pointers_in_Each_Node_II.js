function TreeNode(val) {
  this.val = val;
  this.left = this.right = this.next = null;
}
let connect = function(root) {
  if (!root) return root;
  let stack = [root];
  while (stack.length != 0) {
    let length = stack.length;
    for (let i = 0; i < length; i++) {
      let current = stack.shift();
      if (i != length - 1) {
        current.next = stack[0];
      }
      if (current.left) {
        stack.push(current.left);
      }
      if (current.right) {
        stack.push(current.right);
      }
    }
  }
  return root;
};
let root = new TreeNode(1);
let right = new TreeNode(-9);
let third = new TreeNode(8);
let fourth_left = new TreeNode(4);
let fouth_right = new TreeNode(-3);
let fifth = new TreeNode(-3);
let sixth = new TreeNode(-6);
let seventh = new TreeNode(-6);
let eight_left = new TreeNode(-4);
let eight_right = new TreeNode(-9);
let ninth = new TreeNode(6);

eight_right.left = ninth;
seventh.left = eight_left;
seventh.right = eight_right;
sixth.right = seventh;
fifth.left = sixth;
fouth_right.left = fifth;
third.left = fourth_left;
third.right = fouth_right;
right.right = third;
root.right = right;

let res = connect(root);
console.log(res);
