/**
 * Greatest English Letter in Upper and Lower Case
 */
var greatestLetter = function(s) {
    let set=new Set();
    for(let i=0;i<s.length;i++){
        set.add(s[i]);
    }
    for(let i='Z'.charCodeAt(0);i>='A'.charCodeAt(0);i--){
        if(set.has(String.fromCharCode(i)) && set.has(String.fromCharCode(i+32))){
            return String.fromCharCode(i);
        }
    }
    return '';
};