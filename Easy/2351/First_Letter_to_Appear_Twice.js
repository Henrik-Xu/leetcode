/**
 * First Letter to Appear Twice
 */
var repeatedCharacter = function(s) {
    let count=new Array(26).fill(0);
    for(let i=0;i<s.length;i++){
        count[s[i].charCodeAt()-97]++;
        if(count[s[i].charCodeAt()-97]>=2)
            return s[i];
    }
    return '';
}