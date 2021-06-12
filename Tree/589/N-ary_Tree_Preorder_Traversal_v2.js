function Node(val, children) {
  this.val = val;
  this.children = children;
}
let preorder = function(root) {
  let res = [];
  let dfs = function(root) {
    if (!root) return [];
    res.push(root.val);
    for (const child of root.children) {
      dfs(child);
    }
  };
  dfs(root);
  return res;
};
