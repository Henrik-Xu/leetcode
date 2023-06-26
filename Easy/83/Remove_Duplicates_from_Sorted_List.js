/**
 * Remove Duplicates from Sorted List
 */
function ListNode(val,next){
    this.val=(val===undefined?0:val);
    this.next=(val===undefined?null:next);
}
let deleteDuplicates = function(head) {
   let current=head;
   while (current!=null && current.next!=null) {
    if(current.val==current.next.val){
        current.next=current.next.next;
    }else{
        current=current.next;
    }
   } 
   return head;
};
let r1=new ListNode(1,2);   
let root=new ListNode(1,r1);
let res=deleteDuplicates(root);
console.log(res);