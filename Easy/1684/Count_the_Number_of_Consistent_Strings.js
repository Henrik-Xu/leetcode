/**
 * Count the Number of Consistent Strings
 */
var countConsistentStrings = function(allowed, words) {
    let map=new Map();
    for (let i = 0; i < allowed.length; i++) {
        const element = allowed[i];
        map.set(element,true);
    }
    let count=0;
    for (const word of words) {
        count+=getCount(map,word);
    }
    return count;
};
let getCount=function(map,word){
    for (const char of word) {
        if(!map.has(char)){
            return 0;
        }
    }
    return 1;
}