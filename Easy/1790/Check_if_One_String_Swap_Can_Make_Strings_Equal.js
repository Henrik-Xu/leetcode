
/**
 * Check if One String Swap Can Make Strings Equal
 */
var areAlmostEqual = function(s1, s2) {
    if (s1 === s2) return true;
    let count = 0;
    let index = [];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            count++;
            index.push(i);
        }
    }
    if(count>2)return false;
    return count==2&&s1[index[0]] === s2[index[1]] && s1[index[1]] === s2[index[0]];
};
let s1='bank',s2='kank';
let res=areAlmostEqual(s1,s2);
console.log(res);