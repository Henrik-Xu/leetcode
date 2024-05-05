/**
 * Rotate List
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}
var rotateRight = function(head, k) {
    if(head==null || head.next==null)return head;
    let dummy=new ListNode(-1,head);
    let fast=dummy,slow=dummy;
    let len=0;
    while (fast.next!=null) {
        len++;
        fast=fast.next;
    }
    k=len-k%len;
    while (k>0 && slow.next!=null) {
        slow=slow.next;
        k--;
    }
    fast.next=dummy.next;
    dummy.next=slow.next;
    slow.next=null;
    return dummy.next;
};

let l5=new ListNode(5);
let l4=new ListNode(4,l5);
let l3=new ListNode(3,l4);
let l2=new ListNode(2,l3);
let l1=new ListNode(1,l2);
let k=2;
let res=rotateRight(l1,k);
console.log(res);