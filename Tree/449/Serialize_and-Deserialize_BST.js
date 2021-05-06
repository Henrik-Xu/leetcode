/** Serialize and Deserialize BST
 * Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer,
 *  or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 * Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization
 *  algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.
 */
let TreeNode = function(val){
    this.val = val;
    this.left = this.right = null;
}

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
let serialize = function(root) {
    if(!root)return null;
    let s = [];
    let helper = function(root){
        if(!root)return;
        s.push(root.val);
        helper(root.left);
        helper(root.right);
    }
    helper(root);
    return s.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
let deserialize = function(data) {
    let constructTree = function(arr,low,upper){
        if(arr.length==0){
            return null;
        }
        let val = arr[0];
        if(val<low || val>upper){
            return null;
        }
        arr.shift();
        let root = new TreeNode(val);
        root.left = constructTree(arr,low,val);
        root.right = constructTree(arr,val,upper);
        return root;
    }
    let arr = data.split(',').map(x=>parseInt(x,10));
    return constructTree(arr,-Number.MIN_VALUE,Number.MAX_VALUE);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 let root = new TreeNode(2);
 root.left = new TreeNode(1);
 root.right = new TreeNode(3);

 let res = deserialize(serialize(root));
 console.log(res);
