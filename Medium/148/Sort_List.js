/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
    if(head==null || head.next ==null){
        return head;
    }
    let fast=head,slow=head;
    let prev=null;
    while (fast && fast.next) {
        fast=fast.next.next;
        prev=slow;
        slow=slow.next;
    }
    prev.next=null;

    let l1=sortList(head);
    let l2=sortList(slow);

    return mergeList(l1,l2);
};
let mergeList=function(l1,l2){
    let p=new ListNode(0),l=p;
    while (l1&&l2) {
        if(l1.val<l2.val){
            l.next=l1;
            l1=l1.next;
        }else{
            l.next=l2;
            l2=l2.next;
        }
        l=l.next;
    }
    if(l1!=null){
        l.next=l1;
    }
    if(l2.next!=null){
        l.next=l2;
    }
    return p.next;
}