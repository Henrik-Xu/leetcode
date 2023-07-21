/**
 * Occurrences After Bigram
 */
let findOcurrences = function(text, first, second) {
    let strs=text.split(' ');
    let res=[];
    for (let i = 1; i < strs.length-1; i++) {
        if(first==strs[i-1] && second==strs[i]){
            res.push(strs[i+1]);
        }
    }
    return res;
};
let text = "alice is a good girl she is a good student", first = "a", second = "good";
let res=findOcurrences(text,first,second);
console.log(res);