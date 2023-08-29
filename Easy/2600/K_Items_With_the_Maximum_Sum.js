/**
 * K Items With the Maximum Sum
 */
var kItemsWithMaximumSum = function(numOnes, numZeros, numNegOnes, k) {
    if(k<numOnes)return k;
    let sum=0;
    sum+=numOnes;
    k-=numOnes;
    if(k<numZeros)return sum;
    k-=numZeros;
    if(k<numNegOnes)return sum-k;
    return sum-numNegOnes;
};
let numOnes = 3, numZeros = 2, numNegOnes = 0, k = 2;
let res=kItemsWithMaximumSum(numOnes,numZeros,numNegOnes,k);
console.log(res);