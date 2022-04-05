/**
 * Ones and Zeroes
 * You are given an array of binary strings strs and two integers m and n.
 * Return the size of the largest subset of strs such that there are at most m 0's and n 1's in the subset.
 * A set x is a subset of a set y if all elements of x are also elements of y.
 */
let getNums = function(str){
    let arr = new Array(2).fill(0);
    for (const s of str) {
        if(s=='0'){
            arr[0]++;
        }
        if(s=='1'){
            arr[1]++;
        }
    }
    return arr;
}
let findMaxForm = function(strs, m, n) {
    let dp = new Array(m+1).fill(0).map(()=>new Array(n+1).fill(0));
    for (const str of strs) {
        let arr = getNums(str);
        for (let i = m; i >=arr[0]; i--) {
            for (let j = n; j >=arr[1]; j--) {
                if(i>=arr[0] && j>=arr[1]){
                    dp[i][j]=Math.max(dp[i][j],dp[i-arr[0]][j-arr[1]]+1);
                }else{
                    dp[i][j]=dp[i][j];
                }
            }
        }
    }
    return dp[m][n];
};
let strs = ["10","0001","111001","1","0"], m = 5, n = 3;
let res = findMaxForm(strs,m,n);
console.log(res);