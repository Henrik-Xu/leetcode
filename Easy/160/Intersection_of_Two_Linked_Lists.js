/**
 * Intersection of Two Linked Lists
 * Follow up: Could you write a solution that runs in O(m + n) time and use only O(1) memory?
 */
let getIntersectionNode = function(headA, headB) {
    if(headA==null && headB==null)return true;
    if(headA==null || headB==null)return false;
    let a=headA;
    let b=headB;
    while (a!=b) {
        a=a==null?headB:a.next;
        b=b==null?headA:b.next;
    }
    return a;
};