/**
 * Swap Nodes in Pairs
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
var swapPairs = function(head) {
    if(head==null || head.next==null){
        return head;
    }
    let next=head.next;
    head.next=swapPairs(head.next.next);
    next.next=head;
    return next;
};

let l4=new ListNode(4);
let l3=new ListNode(3,l4);
let l2=new ListNode(2,l3);
let l1=new ListNode(1,l2);
let res=swapPairs(l1);
console.log(res);