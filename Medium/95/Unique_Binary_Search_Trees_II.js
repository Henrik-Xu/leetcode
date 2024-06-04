/**
 * Definition for a binary tree node.
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if(n==0)return [];
    let constructTree=function(start,end){
        let arr=[];
        if(start>end){
            arr.push(null);
            return arr;
        }
        for (let i = start; i <=end; i++) {
            let leftSubtrees=constructTree(start,i-1);
            let rightSubtrees=constructTree(i+1,end);
            for (let j = 0; j < leftSubtrees.length; j++) {
                let left=leftSubtrees[j];
                for (let k = 0; k < rightSubtrees.length; k++) {
                    let right=rightSubtrees[k];
                    let node=new TreeNode(i,left,right);
                    arr.push(node);
                }
            }
        }
        return arr;
    }
    return constructTree(1,n);
};

let n = 3;
let res=generateTrees(n);
console.log(res);