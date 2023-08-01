/**
 * Shuffle String
 */
var restoreString = function(s, indices) {
    let res=new Array(s.length).fill(0);
    for (let i = 0; i < s.length; i++) {
        res[indices[i]]=s[i]
    }
    return res.join('');
};