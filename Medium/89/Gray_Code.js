/**
 * Gray Code
 */
var grayCode = function(n) {
    if(n==0)return 0;
    let res=[0];
    for (let i = 0; i < n; i++) {
        let len=res.length;
        for (let j = len-1; j>=0; j--) {
            res.push(res[j] | 1<<i);
        }
    }
    return res;
};
let res=grayCode(3);
console.log(res);