/**
 * Maximum Depth of N-ary Tree
 */
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
let maxDepth = function(root) {
    if(!root)return 0;
    let depth = 0;
    let queue = [root];
    while (queue.length!=0) {
        depth+=1;
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            let current = queue.shift();
            for (const child of current.children) {
               queue.push(child);               
            }
        }
    }
    return depth;
}