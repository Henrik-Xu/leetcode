/**
 * Check if The Number is Fascinating
 */
var isFascinating = function(n) {
    let two=2*n,three=3*n; 
    let str=n.toString()+two.toString()+three.toString();
    let count=new Array(10).fill(0);
    for(let i=0;i<str.length;i++){
        count[str[i]-'0']++;
    }
    for(let i=1;i<10;i++){
        if(count[i]!=1) return false;
    } 
    return true;
};