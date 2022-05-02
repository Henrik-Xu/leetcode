/**
 * Longest Uncommon Subsequence II
 */
let findLUSlength = function(strs) {
    strs.sort((a,b)=>b.length-a.length);
    function getDuplicates(){
        let set = new Set();
        let duplicates = new Set();
        for (const s of strs) {
            if(set.has(s)){
                duplicates.add(s);
            }
            set.add(s);
        }
        return duplicates;
    }
    function isSubsequence(a,b){
        let i = 0,j = 0;
        while (i<a.length && j<b.length) {
            if(a.charAt(i) == b.charAt(j)){
                j++;
            }
            i++;
        }
        return j == b.length;
    }

    let duplicates = getDuplicates();
    for (let i = 0; i < strs.length; i++) {
        if(!duplicates.has(strs[i])){
            if(i==0)return strs[0].length;
            for (let j = 0; j < i; j++) {
                if(isSubsequence(strs[j],strs[i]))break;
                if(j==i-1){
                    return strs[i].length;
                }
                
            }
        }
    }
    return -1;
};

let strs = ["aaaa","aaaa","aaa",'abc','aa'];
let res = findLUSlength(strs);
console.log(res);