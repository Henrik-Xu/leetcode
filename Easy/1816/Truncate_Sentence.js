/**
 * Truncate Sentence
 */
var truncateSentence = function(s, k) {
    let arr=s.split(' '),sb='';
    for (let i = 0; i < k; i++) {
        if(i!=k-1)
        sb+=arr[i]+' ';
        else
        sb+=arr[i];
    }
    return sb;
};