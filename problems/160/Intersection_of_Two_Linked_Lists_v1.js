/* Approach 1: Brute Force
* For each node ai in list A, traverse the entire list B and check if any node in list B coincides with ai.

* Complexity Analysis

* Time complexity : O(mn)O(mn).

* Space complexity : O(1)O(1). 
*/

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var getIntersectionNode = function(headA, headB) {
  while (headA) {
    let headC = headB;
    while (headC) {
      if (headA === headC) {
        return headA;
      }
      headC = headC.next;
    }
    headA = headA.next;
  }
  return null;
};

let headA = new ListNode(4);
let A_1 = new ListNode(1);
let A_2 = new ListNode(8);
let A_3 = new ListNode(4);
let A_4 = new ListNode(5);
A_3.next = A_4;
A_2.next = A_3;
A_1.next = A_2;
headA.next = A_1;

let headB = new ListNode(5);
let B_1 = new ListNode(0);
let B_2 = new ListNode(1);

B_2.next = A_2;
B_1.next = B_2;
headB.next = B_1;

let result = getIntersectionNode(headA, headB);
console.log(result);
