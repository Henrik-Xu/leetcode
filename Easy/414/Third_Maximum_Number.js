/**
 * Third Maximum Number
 */
let thirdMax = function(nums) {
   let max1=null,max2=null,max3=null;
   for (const num of nums) {
    if(max1==num || max2==num || max3==num)continue;
    if(max1==null || num>max1){
        max3=max2;
        max2=max1;
        max1=num;
        
    }else if(max2==null || num>max2){
        max3=max2;
        max2=num;
    }else if(max3==null || num>max3){
        max3=num;
    }
   } 
   return max3==null?max1:max3;
};
let nums = [2,2,3,1];
let res=thirdMax(nums);
console.log(res);