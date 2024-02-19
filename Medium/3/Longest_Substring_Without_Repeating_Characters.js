var lengthOfLongestSubstring = function(s) {
  let map=new Map();
  let max=0;
  for (let i = 0,j=0; i < s.length; i++) {
    if(map.has(s.charAt(i))){
        j=Math.max(j,map.get(s.charAt(i))+1);
    }
    max=Math.max(max, i-j+1);
    map.set(s.charAt(i), i);
  } 
  return max;
};
let s="abcabcbb";
let res=lengthOfLongestSubstring(s);
console.log(res);