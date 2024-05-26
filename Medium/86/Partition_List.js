/**
 * Partition List
 */
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
    let left = new ListNode(-1);
    let dummyLeft = left;
    let right = new ListNode(-1);
    let dummyRight =right;
    while (head != null) {
        if (head.val < x) {
            dummyLeft.next = new ListNode(head.val);
            dummyLeft=dummyLeft.next;
        } else {
            dummyRight.next = new ListNode(head.val);
            dummyRight=dummyRight.next;
        }
        head = head.next;
    }
    dummyLeft.next = right.next;
    return left.next;
};

let l5 = new ListNode(2);
let l4 = new ListNode(5, l5);
let l3 = new ListNode(2, l4);
let l2 = new ListNode(3, l3);
let l1 = new ListNode(4, l2);
let head = new ListNode(1, l1);

let x=3;
let res=partition(head,x);
console.log(res);