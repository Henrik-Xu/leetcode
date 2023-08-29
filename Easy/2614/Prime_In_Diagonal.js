/**
 * Prime In Diagonal
 */
var diagonalPrime = function(nums) {
   let sieve=buildSieve();
   let max=0,m=nums.length,n=nums[0].length;
   for(let i=0;i<m;i++){
       for(let j=0;j<n;j++){
           if((i==j ||i+j==n-1) && sieve[nums[i][j]]){
               max=Math.max(max,nums[i][j]);
           }
       }
   }
   return max;
};
let buildSieve=function(){
    let sieve=new Array(4000001).fill(true);
    sieve[0]=sieve[1]=false;
    for (let p = 2; p * p < 400001; ++p){
        if (sieve[p]){
            for (let i = p * p; i < 400001; i += p)
                sieve[i] = false;
        }
    }
    return sieve;
}
let nums =
[[1,2,3],[5,6,7],[9,10,11]];
let res =diagonalPrime(nums);
console.log(res);