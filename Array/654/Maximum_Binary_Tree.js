/**
 * Maximum Binary Tree
 */
let TreeNode = function(val){
    this.val = val;
    this.left = this.right = null;
}
let constructMaximumBinaryTree = function(nums) {
   function findMaxNum(nums){
       let max = nums[0];
       let index = 0;
       for (let i = 0; i < nums.length; i++) {
           if(nums[i]>max){
               max = nums[i];
               index = i;
           }
       }
       return {max,index};
   } 
   function constructBinaryTree(nums){
       if(nums==null || nums.length==0)return null;
       let {max,index} = findMaxNum(nums);
       let root = new TreeNode(max);
       root.left = constructBinaryTree(nums.slice(0,index));
       root.right = constructBinaryTree(nums.slice(index+1),nums.length);
       return root;
   }
   return constructBinaryTree(nums);
};