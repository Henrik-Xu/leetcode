/**
 * Maximum Repeating Substring
 */
var maxRepeating = function(sequence, word) {
    let s=sequence.length,w=word.length;
    let res=0;
    for (let i = 0; i < s; i++) {
        let count=0,k=0;
        for (let j = i; j<s; j++) {
            if(sequence.charAt(j)!=word.charAt(k)){
                break;
            }
            k++;
            if(k==w){
                count++;
                k=0;
            }
        }
        res=Math.max(count,res);
    }
    return res;
};