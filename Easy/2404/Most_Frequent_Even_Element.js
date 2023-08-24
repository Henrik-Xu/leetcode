/**
 * Most Frequent Even Element
 */
var mostFrequentEven = function(nums) {
    let min=-1;
    let map=new Map();
    for (let i = 0; i < nums.length; i++) {
        if(nums[i]%2==0){
            if(map.has(nums[i])){
                map.set(nums[i],map.get(nums[i])+1);
            }else{
                map.set(nums[i],1);
            }
            if(min==-1 || map.get(nums[i])>map.get(min) || (map.get(nums[i])==map.get(min) && nums[i]<min))
                min=nums[i];
        }
    }
    return min;
};