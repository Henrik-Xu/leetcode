/**
 * Check if Binary String Has at Most One Segment of Ones
 */
var checkOnesSegment = function(s) {
    let ones=0;
    for (let i = 1,j=1; i < s.length; i++,j++) {
        if (s.charAt(i - 1) == '0' && s.charAt(i) == '1') {
            return false;
        }
    }
    return true;
};
let s="1001";
let res=checkOnesSegment(s);
console.log(res);