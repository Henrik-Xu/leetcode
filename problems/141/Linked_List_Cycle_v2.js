function ListNode(val) {
  this.val = val;
  this.next = null;
}

var hasCycle = function(head) {
  if (head == null || head.next == null) return false;

  let slow = head;
  let fast = head.next;

  while (slow != fast) {
    if (fast == null || fast.next == null) {
      return false;
    }
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
};

let linkList = new ListNode(3);
let link_2 = new ListNode(2);
let link_3 = new ListNode(0);
let link_4 = new ListNode(4);
link_4.next = link_2;
link_3.next = link_4;
link_2.next = link_3;
linkList.next = link_2;

let result = hasCycle(linkList);
console.log(result);
