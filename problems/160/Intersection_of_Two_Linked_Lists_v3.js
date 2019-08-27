/**
 * Approach 3: Two Pointers
 * Complexity Analysis
 *  Time complexity : O(m+n)O(m+n).
 *  Space complexity : O(1)O(1).
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  let P_A = headA;
  let P_B = headB;
  let count = 0;
  while (P_A && P_B) {
    if (P_A === P_B) return P_A;

    P_A = P_A.next;
    P_B = P_B.next;
    if (!P_A) {
      P_A = headB;
      count++;
    }
    if (!P_B) {
      P_B = headA;
      count++;
    }
    if (count > 2) break;
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
