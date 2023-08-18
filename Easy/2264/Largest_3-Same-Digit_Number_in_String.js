/**
 * Largest 3-Same-Digit Number in String
 */
var largestGoodInteger = function(num) {
    let max=-1,res='';
    for(let i=0;i<num.length-2;i++){
        if(num[i]==num[i+1] && num[i+1]==num[i+2]){
            let s=num.substring(i,i+3);
            if(max<parseInt(s)){
                max=parseInt(s);
                res=s;
            }
        }
    }
    return res;
};