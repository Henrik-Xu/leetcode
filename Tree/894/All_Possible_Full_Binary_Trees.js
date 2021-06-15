/** All Possible Full Binary Trees
 *  Given an integer n, return a list of all possible full binary trees with n nodes. Each node of each tree in the answer must have Node.val == 0.
 *  Each element of the answer is the root node of one possible tree. You may return the final list of trees in any order.
 *  A full binary tree is a binary tree where each node has exactly 0 or 2 children.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

let allPossibleFBT = function(n) {
  let map = new Map();
  if (!map.has(n)) {
    let ans = [];
    if (n == 1) {
      ans.push(new TreeNode(0));
    } else if (n % 2 == 1) {
      for (let x = 0; x < n; x++) {
        let y = n - 1 - x;
        for (const left of allPossibleFBT(x)) {
          for (const right of allPossibleFBT(y)) {
            let bns = new TreeNode(0);
            bns.left = left;
            bns.right = right;
            ans.push(bns);
          }
        }
      }
    }
    map.set(n, ans);
  }
  return map.get(n);
};
