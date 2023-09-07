/**
 * Count Symmetric Integers
 */
var countSymmetricIntegers = function(low, high) {
    let count=0;
    for (let i = low; i <= high; i++) {
        let num=i.toString();
        if(num.length%2!=0)continue;
        let isEqual=equalSum(num);
        if(isEqual)count++;
    }
    return count;
};
let equalSum=function(num){
    let i=0,j=num.length-1;
    let sumLeft=0,sumRight=0;
    while (i<j) {
        sumLeft+=parseInt(num[i]);
        sumRight+=parseInt(num[j]);
        i++;
        j--;
    }
    return sumLeft==sumRight;
}