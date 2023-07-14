/**
 * Buddy Strings
 */
let buddyStrings = function(s, goal) {
    if(s.length!=goal.length)return false;
    let set=new Set([...s]);
    if(s==goal && set.size<goal.length) {
        return true;
    }
    let diff=[];
    for (let i = 0; i < s.length; i++) {
        if(s[i]!=goal[i]){
            diff.push(i);
        }        
    }
    return diff.length==2 && s[diff[0]]==goal[diff[1]] && s[diff[1]]==goal[diff[0]];
};