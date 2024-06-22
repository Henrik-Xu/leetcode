/**
 * Path Sum II
 */
var pathSum = function(root, targetSum) {
    let res=[];
    let recrusive=function(root,temp,target){
        if(!root){
            return;
        }
        temp.push(root.val);
        target-=root.val;
        if(!root.left && !root.right){
            if(target==0){
                res.push([...temp]);
            }
        }else{
            recrusive(root.left,temp,target);
            recrusive(root.right,temp,target);
        }
        temp.pop();
    }
    recrusive(root,[],targetSum);
    return res;
};