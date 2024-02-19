function ListNode(val,next){
    this.val=val;
    this.next=next;
}
let addTwoNumbers = function(l1, l2) {
    let dummyNode=new ListNode(0);
    let trail=dummyNode;
    let carry=0;
    while (l1 || l2 || carry) {
        let digit1=l1==null?0:l1.val;
        let digit2=l2==null?0:l2.val;
        let sum=digit1+digit2+carry;
        carry=Math.floor(sum/10);
        trail.next=new ListNode(sum%10);
        trail=trail.next;
        if(l1)l1=l1.next;
        if(l2)l2=l2.next;
    }
    return dummyNode.next;
};