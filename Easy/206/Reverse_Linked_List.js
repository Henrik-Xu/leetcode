/**
 * Reverse Linked List
 */
let reverseList = function(head) {
    let newHead=null;
    while (head!=null) {
        let next=head.next;
        head.next=newHead;
        newHead=head;
        head=next;
    }
    return newHead;
};