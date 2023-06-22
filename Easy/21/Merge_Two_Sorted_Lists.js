/**
 * Merge Two Sorted Lists
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}
let mergeTwoLists = function (l1, l2) {
  if (l1 == null && l2 == null) return null;
  if (l1 == null) return l2;
  if (l2 == null) return l1;
  let res = new ListNode(-1);
  let current = res;
  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      current.next = new ListNode(l1.val);
      l1 = l1.next;
    } else {
      current.next = new ListNode(l2.val);
      l2 = l2.next;
    }
    current = current.next;
  }
  if (l1 != null) {
    current.next = l1;
  }
  if (l2 != null) {
    current.next = l2;
  }
  return res.next;
};
