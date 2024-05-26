/**
 * Remove Duplicates from Sorted List II
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
   /**
    * @param {ListNode} head
    * @return {ListNode}
    */
var deleteDuplicates = function(head) {
    if(head==null)return null;
    let dummy=new ListNode(-1);
    dummy.next=head;
    let pre=dummy;
    let cur=head;
    while (cur!=null && cur.next!=null) {
        while(cur.next!=null && cur.val==cur.next.val){
            cur=cur.next;
        }
        if(pre.next==cur){
            pre=pre.next;
        }else{
            pre.next=cur.next;
        }
        cur=cur.next;
    }
    return dummy.next;
};