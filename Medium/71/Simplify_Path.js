/**
 * Simplify Path
 */
var simplifyPath = function(path) {
    let stack=[];
    for (let i = 0; i < path.length; i++) {
        if(path[i]=='/')continue;
        let temp='';
        while (i<path.length && path[i]!='/') {
            temp+=path[i];
            i++;
        }
        if(temp=='.')continue;
        else if(temp=='..'){
            if(stack.length!=0){
                stack.pop();
            }
        }else{
            stack.push(temp);
        }
    }
    if(stack.length==0)return '/';
    let res='';
    for (let i = 0; i < stack.length; i++) {
        res=res+'/'+stack[i];
    }
    return res;
};
let path = "/home//foo/";
let res= simplifyPath(path);
console.log(res);