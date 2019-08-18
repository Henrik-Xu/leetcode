/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}
/**
 * @param {ListNode} head
 * @return {boolean}
 * To detect if a list is cyclic, we can check whether a node had been visited before. A natural way is to use a hash table.
 */
var hasCycle = function(head) {
  let map = new Map();
  while (head != null) {
    if (map.has(head)) {
      return true;
    } else {
      map.set(head, 1);
    }
    head = head.next;
  }
  return false;
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
