/** Maximum Depth of N-ary Tree
 *  Given a n-ary tree, find its maximum depth.
 *  The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
 *  Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
 */
function Node(val, children) {
  this.val = val;
  this.children = children;
}
let maxDepth = function(root) {
  if (!root) return 0;
  let max = 0;
  for (const child of root.children) {
    max = Math.max(max, maxDepth(child));
  }
  return max + 1;
};

let children2 = [new Node(5, []), new Node(6, [])];
let sub1 = new Node(3, children2);
let children1 = [sub1, new Node(2, []), new Node(4, [])];
let root = new Node(1, children1);

let res = maxDepth(root);
console.log(res);
