/**
 * Fibonacci Number
 */
let fib = function(n) {
    if(n<=1)return n;
    let seen=new Map();
    seen.set(0,0);
    seen.set(1,1)
    let helper=function(n){
        if(seen.has(n))return seen.get(n);
        return helper(n-1)+helper(n-2);
    }
    return helper(n);
};
let n =2;
let res=fib(n);
console.log(res);