/**
 * Palindrome Linked List
 * Follow up: Could you do it in O(n) time and O(1) space?
 */
function ListNode(val,next){
    this.val=val;
    this.next=next==undefined?null:next;
}
let isPalindrome = function (head) {
    let fast = head,
        slow = head;
    while (fast != null && fast.next != null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    slow = reverse(slow);
    fast = head;
    while (slow != null) {
        if (slow.val != fast.val) {
            return false;
        }
        slow = slow.next;
        fast = fast.next;
    }
    return true;
};
let reverse=function(head,newHead){
    if(head==null){
        return newHead;
    }
    let next=head.next;
    head.next=newHead;
    return reverse(next,head);
}

let L4=new ListNode(1);
let L3=new ListNode(2,L4);
let L2=new ListNode(1,L3);
let L1=new ListNode(1,L2);

let res=isPalindrome(L1);
console.log(res);