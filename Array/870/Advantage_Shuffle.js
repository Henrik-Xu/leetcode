/**
 * Advantage Shuffle
 */
let advantageCount = function(nums1, nums2) {
    let sortQueue=[];
    for (let i = 0; i < nums2.length; i++) {
        sortQueue.push([nums2[i],i]);
    }
    sortQueue.sort((a,b)=>a[0]-b[0]);
    nums2.sort((a,b)=>a-b);
    nums1.sort((a,b)=>a-b);
    let res=new Array(nums1.length).fill(0);
    let low=0,high=nums1.length-1;
    let queue=[...nums2];
    while (queue.length!=0) {
        let current=queue.pop();
        let index=map.get(current);
        if(nums1[high]>current){
            res[index]=nums1[high];
            high--;
        }else{
            res[index]=nums1[low];
            low++;
        }
    }
    return res;
};
let nums1 = [2,0,4,1,2], nums2 = [1,3,0,0,2]
let res=advantageCount(nums1,nums2);
console.log(res);