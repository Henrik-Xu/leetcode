/**
 * Iteration Solution
 */
let inorderTraversal = function(root){
    let result = [];
    let stack = [];
    let current = root;
    while (stack.length!=0 || root!=null) {
        while (root!=null) {
            stack.push(current);
            current = current.left;
        }
        current = stack.pop();
        result.push(current.val);
        current = current.right;
    }
    return result;
}