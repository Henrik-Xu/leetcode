/**
 * Decompress Run-Length Encoded List
 */
let decompressRLElist = function(nums) {
    let res=[];
    for (let i = 0; i < nums.length-1; i+=2) {
        let freq=nums[i],val=nums[i+1];
        while (freq-->0) {
            res.push(val);
        }
    }
    return res;
};