/**
 * Minimum Time to Type Word Using Special Typewriter
 */
var minTimeToType = function(word) {
    let start='a'.charCodeAt(0),res=0;
    for (let i = 0; i < word.length; i++) {
        let distance=Math.min(Math.abs(word.charCodeAt(i)-start),Math.abs(26-Math.abs(word.charCodeAt(i)-start)));
        start=word.charCodeAt(i);
        res+=distance+1;
    }
    return res;
};
let word="bza";
let res=minTimeToType(word);
console.log(res);