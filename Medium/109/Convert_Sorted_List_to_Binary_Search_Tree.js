/**
 * Convert Sorted List to Binary Search Tree
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
/**
 * Definition for a binary tree node.
 */
function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let recrusive=function(head,tail){
        if(head==tail){
            return null;
        }
        let fast=head;
        let slow=head;
        while (fast!=tail && fast.next!=tail) {
            slow=slow.next;
            fast=fast.next.next;
        }
        let root=new TreeNode(slow.val);
        root.left=recrusive(head,slow);
        root.right=recrusive(slow.next,tail);
        return root;
    }
    return recrusive(head,null);
};