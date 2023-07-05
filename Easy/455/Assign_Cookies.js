/**
 * Assign Cookies
 */
let findContentChildren = function(g, s) {
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    let i = 0;
    for (let j = 0; j < s.length && i<g.length; j++) {
        if(g[i]<=s[j]){
            i++;
        }
    }
    return i;
};