/**
 * Remove Outermost Parentheses
 */
var removeOuterParentheses = function(s) {
    let sb='';
    let opened=0;
    for (const c of [...s]) {
        if(c=='(' && opened++>0)sb+=c;
        if(c==')' && opened-->1)sb+=c;
    }
    return sb;
};
let sb = "(()())(())";
let res=removeOuterParentheses(s);
console.log(res);