/**
 * Linked List Components
 */
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
let numComponents = function(head, nums) {
   let set=new Set();
   for (const num of nums) {
    set.add(num);
   } 
   let res=0;
   while (head!=null) {
        if(set.has(head.val)&&(head.next==null || !set.has(head.next.val))){
                res++;
        }
        head=head.next;
    }
    return res;
};