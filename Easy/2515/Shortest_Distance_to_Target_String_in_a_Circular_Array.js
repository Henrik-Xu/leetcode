/**
 * Shortest Distance to Target String in a Circular Array
 */
var closetTarget = function(words, target, startIndex) {
    let n=words.length,min=-1;
    for (let i = 0; i < words.length; i++) {
        if(words[i]===target){
            let diff=Math.min(Math.abs(i-startIndex),Math.abs(n-Math.abs(i-startIndex)));
            min=min==-1?diff:Math.min(min,diff);
        }
    }
    return min;
};