/**
 * Determine if String Halves Are Alike
 */
var halvesAreAlike = function(s) {
    let set =new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let n=s.length,m=n/2;
    let count=0;
    for (let i = 0; i < m; i++) {
        if(set.has(s[i])) count++;
        if(set.has(s[n-1-i])) count--;
    }
    return count==0;
};
