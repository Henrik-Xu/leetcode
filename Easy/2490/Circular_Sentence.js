/**
 * Circular Sentence
 */
var isCircularSentence = function(sentence) {
    if(sentence[0]!=sentence[sentence.length-1]) return false;
    let arr=sentence.split(' ');
    for(let i=0;i<arr.length-1;i++){
        if(arr[i][arr[i].length-1]!=arr[i+1][0]) return false;
    }
    return true;
};