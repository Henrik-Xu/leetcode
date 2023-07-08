/**
 * N-ary Tree Postorder Traversal
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
let postorder = function (root) {
    let res = [];
    let dfs = function (root) {
      if (!root) return;
      for (const child of root.children) {
        dfs(child);
      }
      res.push(root.val);
    }
    dfs(root);
    return res;
  };