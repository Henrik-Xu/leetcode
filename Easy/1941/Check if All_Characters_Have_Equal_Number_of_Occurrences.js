/**
 * Check if All Characters Have Equal Number of Occurrences
 */
var areOccurrencesEqual = function(s) {
    let map=new Map();
    for(let i=0;i<s.length;i++){
        map.set(s[i],map.get(s[i])?map.get(s[i])+1:1);
    }
    let count=map.get(s[0]);
    for(let [key,value] of map){
        if(value!==count) return false;
    }
    return true;
};