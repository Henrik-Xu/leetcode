function Node(val, next, random) {
    this.val = val;
    this.next = next;
    this.random = random;
};
   
/**
* @param {_Node} head
* @return {_Node}
*/
var copyRandomList2 = function(head) {
    if(!head)return null;
    let current=head;
    let map=new Map();
    while (current) {
        map.set(current,new Node(current.val));
        current=current.next;
    }
    current=head;
    while (current) {
        map.get(current).next=map.get(current.next) || null;
        map.get(current).random=map.get(current.random) || null;
        current=current.next
    }
    return map.get(head);
};

var copyRandomList = function(head) {
    if(!head)return null;
    let current=head;
    while (current) {
       let newNode=new Node(current.val,current.next);
       current.next=newNode;
       current=newNode.next;
    }
    current=head;
    while (current) {
        while (current.random) {
            current.next.random=current.random.next;
        }
        current=current.next!=null?current.next.next:null;
    }
    let old_head = head;
    let new_head = head.next;
    let curr_old = old_head;
    let curr_new = new_head;
    while (curr_old) {
        curr_old.next=curr_old.next.next;
        curr_new.next=curr_new.next!=null?curr_new.next.next:null;
        curr_old=curr_old.next;
        curr_new=curr_new.next;
    }
    return new_Node;
};