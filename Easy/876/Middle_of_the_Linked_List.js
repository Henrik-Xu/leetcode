/**
 * Middle of the Linked List
 */
let middleNode = function(head) {
    let slow=head,fast=head;
    while (fast!=null && fast.next!=null) {
        slow=slow.next;
        fast=fast.next.next;
    }
    return slow;
};