/**
 * Minimize String Length
 */
var minimizedStringLength = function(s) {
  let set=new Set();
  for(let i=0;i<s.length;i++){
    set.add(s[i]);
  }
  return set.size;  
};