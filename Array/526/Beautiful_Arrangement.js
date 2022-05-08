/**
 * Beautiful Arrangement
 * Suppose you have n integers labeled 1 through n. A permutation of those n integers perm (1-indexed) is considered a beautiful
 * arrangement if for every i (1 <= i <= n), either of the following is true:
 *  perm[i] is divisible by i.
 *  i is divisible by perm[i].
 *  Given an integer n, return the number of the beautiful arrangements that you can construct.
 */
let countArrangement = function(n) {
    let visited = new Array(n+1).fill(false);
    let count = 0;
    let calculate = function(pos){
        if(pos>n){
            count++;
        }
        for (let i = 1; i <= n; i++) {
            if(!visited[i] && (pos % i == 0 || i % pos == 0)){
                visited[i] = true;
                calculate(pos+1);
                visited[i] = false;
            }
        }
    }
    calculate(1)
    return count;
};
let n = 2;
let res = countArrangement(n);
console.log(res);