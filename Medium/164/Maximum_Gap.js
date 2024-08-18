/**
 * Maximum Gap
 */
var maximumGap = function(nums) {
    let n=nums.length;
    if(n<2){
        return 0;
    }
    if(n<3){
        return Math.abs(nums[0]-nums[1]);
    }
    let min=nums[0],max=nums[0];
    for (let i = 1; i < nums.length; i++) {
        min=Math.min(min,nums[i]);
        max=Math.max(max,nums[i]);
    }
    if (min == max) {
        return 0; 
    }
    let bucketSize=Math.ceil((max-min)/(n-1));
    let minBuckets=new Array(n);
    let maxBuckets=new Array(n);
    for (const num of nums) {
        let j=Math.floor((num-min)/bucketSize);
        minBuckets[j] = minBuckets[j] ? Math.min(minBuckets[j], num) : num;
		maxBuckets[j] = maxBuckets[j] ? Math.max(maxBuckets[j], num) : num;
    }
    let res=bucketSize;
    let previous=maxBuckets[0];
    for (let i = 1; i < n; i++) {
        if(minBuckets[i]){
            res=Math.max(res,minBuckets[i]-previous);
        }
        if(maxBuckets[i]){
            previous=maxBuckets[i];
        }
    }
    return res;
};
let nums =
[1,1,1,1,1,5,5,5,5,5];
let res=maximumGap(nums);
console.log(res);
