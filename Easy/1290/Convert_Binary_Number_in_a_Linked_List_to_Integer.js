/**
 * Convert Binary Number in a Linked List to Integer
 */
let getDecimalValue = function (head) {
    let sum = 0;
    while (head != null) {
        sum *= 2;
        sum += head.val;
        head = head.next;
    }
    return sum;
};