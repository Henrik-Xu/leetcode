/**
 * All Elements in Two Binary Search Trees
 * Given two binary search trees root1 and root2.
 * Return a list containing all the integers from both trees sorted in ascending order.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let getAllElements = function(root1, root2) {
  let dfs = function(root, arr) {
    if (!root) return;
    dfs(root.left, arr);
    arr.push(root.val);
    dfs(root.right, arr);
  };
  let arr1 = [];
  let arr2 = [];
  dfs(root1, arr1);
  dfs(root2, arr2);

  let size1 = arr1.length;
  let size2 = arr2.length;
  let i = 0;
  j = 0;
  let res = [];
  while (i < size1 && j < size2) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i]);
      i++;
    } else {
      res.push(arr2[j]);
      j++;
    }
  }
  while (i < size1) {
    res.push(arr1[i]);
    i++;
  }
  while (j < size1) {
    res.push(arr1[j]);
    j++;
  }
  return res;
};
