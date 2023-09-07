/**
 * Max Pair Sum in an Array
 */
var maxSum = function(nums) {
    let res=-1;
    let map=new Map();
    for (const num of nums) {
        let max=maxDigit(num);
        if(map.has(max)){
            map.get(max).push(num)
        }else{
            map.set(max,[num]);
        }
    }
    for (const [key,value] of map.entries()) {
        if(value.length>1){
            value.sort((a,b)=>b-a);
            res=Math.max(res,value[0]+value[1]);
        }
    } 
    return res;
};
let maxDigit=function(num){
    let max=-1;
    let str=num.toString();
    for (let i = 0; i < str.length; i++) {
        const element = parseInt(str[i]);
        if(element>max){
            max=element;
        }
    }
    return max;
}
let nums=[51,71,17,24,42];
let res=maxSum(nums);
console.log(res);