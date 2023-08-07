/**
 * Merge Strings Alternately
 */
var mergeAlternately = function(word1, word2) {
  let res='';
  let i=0;
  for (; i < word1.length; i++) {
    res+=word1[i];
    if(i<word2.length){
        res+=word2[i];
    }
  }
  if(i<word2.length){
      res+=word2.slice(i);
  }
  return res;
};