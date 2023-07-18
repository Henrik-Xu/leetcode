/**
 * DI String Match
 */
let diStringMatch = function(s) {
   let res=new Array(s.length+1).fill(0);
   let n=s.length,left=0,right=n;
   for (let i = 0; i < n; i++) {
    res[i]=s[i]=='I'?left++:right--;
   }
   res[n]=left;
   return res;
};
let s = "IDID";
let res=diStringMatch(s);
console.log(res);