function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  while (head != null && head.val == val) {
    head = head.next;
  }

  if (head == null) {
    return head;
  }

  let pre = head;
  while (pre != null && pre.next !== null) {
    let curr = pre.next;
    if (curr.val != val) {
      pre = curr;
      continue;
    }
    pre.next = curr.next;
  }
  return head;
};

let A_1 = new ListNode(1);
let A_2 = new ListNode(2);
let A_3 = new ListNode(3);
let A_4 = new ListNode(6);
let A_5 = new ListNode(4);
let A_6 = new ListNode(5);
let A_7 = new ListNode(6);

A_1.next = A_2;
A_2.next = A_3;
A_3.next = A_4;
A_4.next = A_5;
A_5.next = A_6;

let result = removeElements(A_1, 6);
console.log(result);
