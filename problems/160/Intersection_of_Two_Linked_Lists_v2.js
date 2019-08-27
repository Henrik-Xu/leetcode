/**
* Approach 2: Hash Table
* Traverse list A and store the address / reference to each node in a hash set. Then check every node bi in list B: if bi appears in the hash set, 
then bi is the intersection node.

* Complexity Analysis

* Time complexity : O(m+n)O(m+n).

* Space complexity : O(m)O(m) or O(n)O(n). 
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
  let arr = [];
  while (headA) {
    arr.unshift(headA);
    headA = headA.next;
  }
  let map = new Map(arr.map(i => [i, 1]));
  while (headB) {
    if (map.has(headB)) {
      return headB;
    }
    headB = headB.next;
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
