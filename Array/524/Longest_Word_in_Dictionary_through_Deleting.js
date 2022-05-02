/**
 * Longest Word in Dictionary through Deleting
 */
let findLongestWord = function(s, dictionary) {
    let isSubSequence = function(b){
        let i = 0, j = 0;
        while(i<s.length && j < b.length){
            if(s.charAt(i) == b.charAt(j)){
                j++;
            }
            i++;
        }
        return j == b.length;
    }
    let maxStr = '';
    for (const str of dictionary) {
        if(isSubSequence(str)){
            if(str.length > maxStr.length || (str.length==maxStr.length && str.localeCompare(maxStr) < 0)){
                maxStr = str;
            }
        }
    }
    return maxStr;
};
let  s = "abpcplea", dictionary = ["ale","apple","monkey","plea","appla"];
let res = findLongestWord(s,dictionary);
console.log(res);