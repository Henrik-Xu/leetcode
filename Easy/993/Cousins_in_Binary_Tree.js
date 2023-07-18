/**
 * Cousins in Binary Tree
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
function Node(node,parent,depth){
    this.node = node;
    this.parent = parent;
    this.depth = depth;
}
let isCousins = function(root, x, y) {    
    let map = new Map();    
    let dfs = function(root,parent,depth) {
        if(!root)return;
        map.set(root.val,new Node(root,parent,depth));
        dfs(root.left,root,depth+1);
        dfs(root.right,root,depth+1);
    }
    dfs(root,null,0);
    let nodeX = map.get(x);
    let nodeY = map.get(y);
    return nodeX.depth == nodeY.depth && nodeX.parent != nodeY.parent;
};