/**
 * Maximum Product of Two Elements in an Array
 */
var maxProduct = function(nums) {
  let max=-1,sencond=-1;
  for (const n of nums) {
    if(n>max){
        second=max;
        max=n;
    }else if(n>sencond){
        sencond=n;
    }
  }  
  return (max-1)*(second-1);
};
let nums=[3,4,5,2];
let res=maxProduct(nums);
console.log(res);