/**
 * Remove Linked List Elements
 */
function ListNode(val,next){
    this.val=val;
    this.next=next===undefined?null:next;
}
let removeElements = function(head, val) {
    let current=new ListNode(-1);
    current.next=head;
    let res=current;
    while (head!=null) {
        if(head.val==val){
            current.next=head.next;
        }else{
            current=current.next;
        }
        head=head.next
    }
    return res.next;
};

let L6=new ListNode(6);
let L5=new ListNode(5,L6);
let L4=new ListNode(4,L5);
let L3=new ListNode(3,L4);
let L6_2=new ListNode(6,L3);
let L2=new ListNode(2,L6_2);
let L1=new ListNode(1,L2);

let res=removeElements(L1,6);
console.log(res);
