/**
 * Sort Even and Odd Indices Independently
 */
var sortEvenOdd = function(nums) {
    let countOdd=new Array(101).fill(0);
    let countEven=new Array(101).fill(0);
    for(let i=0;i<nums.length;i++){
        if(i%2==0){
            countEven[nums[i]]++;
        }else{
            countOdd[nums[i]]++;
        }
    }
    let j=0;
    for(let i=0;i<101;i++){
        while(countEven[i]--){
            nums[j]=i;
            j+=2;
        }
    }
    j=1;
    for(let i=100;i>=0;i--){
        while(countOdd[i]--){
            nums[j]=i;
            j+=2;
        }
    }
    return nums;
};