function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let distanceK = function(root, target, k) {
  let ans = [];
  let dfs = function(node) {
    if (node == null) {
      return -1;
    } else if (node == target) {
      subtree_add(node, 0);
      return 1;
    } else {
      let left = dfs(node.left);
      let right = dfs(node.right);
      if (left != -1) {
        if (left == k) {
          ans.push(node.val);
        }
        subtree_add(node.right, left + 1);
        return left + 1;
      } else if (right != -1) {
        if (right == k) {
          ans.push(node.val);
        }
        subtree_add(node.left, right + 1);
        return right + 1;
      } else {
        return -1;
      }
    }
  };
  let subtree_add = function(node, dist) {
    if (node == null) return;
    if (dist == k) {
      ans.push(node.val);
    } else {
      subtree_add(node.left, dist + 1);
      subtree_add(node.right, dist + 1);
    }
  };
  dfs(root);
  return ans;
};

let root = new TreeNode(3);

let left = new TreeNode(5);
left.left = new TreeNode(6);
let sub = new TreeNode(2);
sub.left = new TreeNode(7);
sub.right = new TreeNode(4);
left.right = sub;

let right = new TreeNode(1);
right.left = new TreeNode(0);
right.right = new TreeNode(8);

root.left = left;
root.right = right;

let res = distanceK(root, left, 2);
console.log(res);
