/**
 * Generate Parentheses
 */
var generateParenthesis = function(n) {
    let res=[];
    backtracking(0,0,n,"",res);
    return res;
};
let backtracking=function(open,close,n,str,res){
    if(str.length===n*2){
        res.push(str);
        return;
    }
    if(open<n) backtracking(open+1,close,n,str+"(",res);
    if(close<open) backtracking(open,close+1,n,str+")",res);
}