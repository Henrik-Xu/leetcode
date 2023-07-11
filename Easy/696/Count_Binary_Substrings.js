/**
 * Count Binary Substrings
 */
let countBinarySubstrings = function(s) {
   let res=0,pre=0,cur=1;
   for (let i = 1; i < s.length; i++) {
        if(s[i-1]==s[i])cur++;
        else{
            res+=Math.min(pre,cur);
            pre=cur;
            cur=1;
        }
   } 
   return res +Math.min(pre,cur);
};
let s = "00110011";
let res=countBinarySubstrings(s);
console.log(res);