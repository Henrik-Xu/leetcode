/**
 * Maximum Value of a String in an Array
 */
var maximumValue = function(strs) {
    let max=0;
    for (let i = 0; i < strs.length; i++) {
        let val=getVallue(strs[i]);
        max=Math.max(val,max);
    }
    return max;
};
let getVallue=function(str){
    let hasA=false,a='a'.charCodeAt(0),z='z'.charCodeAt(0);
    for (let i = 0; i < str.length; i++) {
        if(str[i].charCodeAt(0)>=a && str[i].charCodeAt(0)<=z){
            hasA=true;
            break;
        }
    }
    return hasA?str.length:parseInt(str);   
}