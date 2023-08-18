/**
 * Find All K-Distant Indices in an Array
 */
var findKDistantIndices = function(nums, key, k) {
    let set=new Set();
    for(let i=0;i<nums.length;i++){
        if(nums[i]==key){
            for(let j=i-k;j<=i+k;j++){
                 if(j>=0 && j<nums.length){
                    set.add(j);
                }
            }
        }
    }
    return [...set];
};