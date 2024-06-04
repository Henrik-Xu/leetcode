/**
 * Reverse Linked List II
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if(head==null)return;
    let dummy=new ListNode(-1);
    dummy.next=head;
    let pre=dummy;
    for (let i = 1; i < left; i++) {
       pre=pre.next;
    }
    let start=pre.next;
    let then=start.next;
    for (let i = 0; i < right-left; i++) {
        start.next=then.next;
        then.next=pre.next;
        pre.next=then;
        then=start.next;
    }
    return dummy.next;
};

let l5=new ListNode(5);
let l4=new ListNode(4,l5);
let l3=new ListNode(3,l4);
let l2=new ListNode(2,l3);
let l1=new ListNode(1,l2);

let res=reverseBetween(l1,2,4);
console.log(res);