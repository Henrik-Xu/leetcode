/**
 * Merge Two 2D Arrays by Summing Values
 */
var mergeArrays = function(nums1, nums2) {
    let map=new Map();
    for (const [id,val] of nums1) {
        map.set(id,val);
    }
    for(const [id,val] of nums2){
        if(map.has(id)){
            map.set(id,map.get(id)+val);
        }else{
            map.set(id,val);
        }
    }
    let res=[];
    for (const [key,value] of map.entries()) {
        res.push([key,value]);
    }
    return res.sort((a,b)=>a[0]-b[0]);;
};