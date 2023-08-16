/**
 * Divide a String Into Groups of Size k
 */
var divideString = function(s, k, fill) {
    let res=[];
    let sb='',index=0;
    while(index<s.length){
        sb+=s[index];
        if(sb.length===k){
            res.push(sb);
            sb='';
        }
        index++;
    }
    if(sb.length>0){
        res.push(sb+fill.repeat(k-sb.length));
    }
    return res;
};