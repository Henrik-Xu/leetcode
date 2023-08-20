/**
 * Rearrange Characters to Make Target String
 */
var rearrangeCharacters = function(s, target) {
    let count=new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        count[s.charCodeAt(i)-97]++;
    }
    let count2=new Array(26).fill(0);
    for(let i=0;i<target.length;i++){
        count2[target.charCodeAt(i)-97]++;
    }
    let res=101;
    for(let i=0;i<target.length;i++){
        res=Math.min(res,Math.floor(count[target.charCodeAt(i)-97]/count2[target.charCodeAt(i)-97]));
    }
    return res;  
};