/**
 * Count Pairs Of Similar Strings
 */
var similarPairs = function(words) {
    let count=0
    for (let i = 0; i < words.length; i++) {
        for (let j = i+1; j < words.length; j++) {
            if(isSimilar(words[i],words[j])){
                count++;
            }
        }
    }
    return count;
};
let isSimilar = (word1, word2) => {
    let set=new Set([...word1]);
    for(let i=0;i<word2.length;i++){
        if(!set.has(word2[i])){
            return false;
        }
    }
    set=new Set([...word2]);
    for(let i=0;i<word1.length;i++){
        if(!set.has(word1[i])){
            return false;
        }
    }
    return true;
}
let words =
["aba","aabb","abcd","bac","aabc"];
let res=similarPairs(words);
console.log(res);
