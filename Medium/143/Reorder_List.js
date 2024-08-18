/**
 * Definition for singly-linked list.
 */ 
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if(head==null || head.next==null){
        return head;
    }
    let p1=head;
    let p2=head;
    while (p2.next && p2.next.next) {
        p2=p2.next.next;
        p1=p1.next;
    }
    let preMiddle=p1;
    let preCurrent=preMiddle.next;
    while (preCurrent.next) {
        let current=preCurrent.next;
        preCurrent.next=current.next;
        current.next=preMiddle.next;
        preMiddle.next=current;
    }
    //Start reorder one by one  1->2->3->6->5->4 to 1->6->2->5->3->4
    p1=head;
    p2=preMiddle.next;
    while (p1!=preMiddle) {
        preMiddle.next=p2.next;
        p2.next=p1.next;
        p1.next=p2;
        p1=p2.next;
        p2=preMiddle.next;
    }
    return head;
};

let l6=new ListNode(6);
let l5=new ListNode(5,l6);
let l4=new ListNode(4,l5);
let l3=new ListNode(3,l4);
let l2=new ListNode(2,l3);
let l1=new ListNode(1,l2);

let res=reorderList(l1);
console.log(res);