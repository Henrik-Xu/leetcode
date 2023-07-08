/**
 *  Longest Harmonious Subsequence
 */
let findLHS = function(nums) {
    let res = [];
    let map = new Map();
    for (const num of nums) {
        if(map.has(num)){
            map.set(num,map.get(num)+1);
        }else{
            map.set(num,1);
        }
        if(map.has(num+1)){
            res = Math.max(res,map.get(num)+map.get(num+1));
        }
        if(map.has(num-1)){
            res = Math.max(res,map.get(num)+map.get(num-1));
        }
    }
    return res;
};