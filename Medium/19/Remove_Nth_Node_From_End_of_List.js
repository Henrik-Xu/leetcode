/**
 * Remove Nth Node From End of List
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var removeNthFromEnd = function(head, n) {
    let fast=head,slow=head;
    for (let i = 0; i < n; i++) fast = fast.next;
    if (fast == null) return head.next;
    while (fast.next != null) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return head;
};

let l5=new ListNode(5);
let l4=new ListNode(4,l5);
let l3=new ListNode(3, l4);
let l2=new ListNode(2, l3);
let l1=new ListNode(1, l2);

let res =removeNthFromEnd(l1,2);
console.log(res);
