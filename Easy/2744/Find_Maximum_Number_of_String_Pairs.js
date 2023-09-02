/**
 * Find Maximum Number of String Pairs
 */
var maximumNumberOfStringPairs = function(words) {
  let map=new Map();
  for(let word of words){
     let newWord=word[0].charCodeAt()>word[1].charCodeAt()?(word[1]+word[0]):(word[0]+word[1]);
     map.set(newWord,map.get(newWord)+1||1);
  } 
  let res=0;
  for (const values of map.values()) {
    res+=Math.floor(values/2);
  }
  return res;
};
let words = ["cd","ac","dc","ca","zz"];
let res=maximumNumberOfStringPairs(words);
console.log(res);