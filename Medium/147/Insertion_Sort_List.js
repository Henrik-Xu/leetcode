/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
  if(head==null){
    return head;
  }
  let helper=new ListNode(0);
  let cur=head;
  let pre=helper;
  let next=null;
  while (cur!=null) {
    next=cur.next;
    while (pre.next!=null && pre.next.val<cur.val) {
        pre=pre.next;
    }
    cur.next=pre.next;
    pre.next=cur;
    pre=helper;
    cur=next;
  }
 return helper.next;
};
