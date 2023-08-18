/**
 * Find Resultant Array After Removing Anagrams
 */
var removeAnagrams = function(words) {
    let res=[];
    let previous='';
    for (const word of words) {
        let sorted=word.split('').sort().join('');
        if(sorted==previous)continue;
        previous=sorted;
        res.push(word);
    }
    return res;
};