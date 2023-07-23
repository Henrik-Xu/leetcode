/**
 * Prime Arrangements
 * https://www.geeksforgeeks.org/sieve-of-eratosthenes/
 */
let numPrimeArrangements = function(n) {
    const MOD = 10**9 + 7;;
    let prime=0,nonPrime=0;
    let primes=countPrimes(n);
    let res=1;
    for (let i = 1; i <=n; i++) {
       if(primes[i]){
        res*=++prime;
       }else{
        res*=++nonPrime;
       }
       res=res%MOD;
    }
    return res;
};
let countPrimes=function(n){
    let primes=new Array(n+1).fill(true);
    primes[0]=primes[1]=false;
    for (let i = 2; i * i<= n; i++) {
        if(primes[i]){
            for (let j = i*i; j <=n; j+=i) {
                primes[j]=false;
            }
        }
    }
    return primes;
}
let n=5;
let res=numPrimeArrangements(n);
console.log(res);