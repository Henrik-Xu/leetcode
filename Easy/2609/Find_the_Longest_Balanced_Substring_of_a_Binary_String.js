/**
 * Find the Longest Balanced Substring of a Binary String
 */
var findTheLongestBalancedSubstring = function(s) {
    let max=0;
    for (let i = 0; i < s.length;) {
        let ones=0,zeros=0;
        while (i < s.length && s[i] == '0') {
            zeros++;
            i++;
        }
        while (i < s.length && s[i] == '1') {
            ones++;
            i++;
        }
        let len = 2 * Math.min(zeros, ones);
        max=Math.max(max,len);
    }
    return max;
};
let s = "01000111";
let res=findTheLongestBalancedSubstring(s);
console.log(res);