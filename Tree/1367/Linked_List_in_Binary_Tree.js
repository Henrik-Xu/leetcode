/**
 * Linked List in Binary Tree
 * Given a binary tree root and a linked list with head as the first node.
 * Return True if all the elements in the linked list starting from the head correspond to some downward path connected in the binary tree otherwise return False.
 */
function ListNode(val, next) {
  this.val = val;
  this.next = next == undefined ? null : next;
}
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
let isSubPath = function(head, root) {
  let dfs = function(head, root) {
    if (head == null) return true;
    if (root == null) return false;
    return (
      head.val == root.val &&
      (dfs(head.next, root.left) || dfs(head.next, root.right))
    );
  };
  if (head == null) return true;
  if (root == null) return false;
  return (
    dfs(head, root) || isSubPath(head, root.left) || isSubPath(head, root.right)
  );
};
