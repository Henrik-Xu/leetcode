/**
 * String Matching in an Array
 */
var stringMatching = function(words) {
  let set=new Set();
  for (let i = 0; i < words.length-1; i++) {
    let current=words[i];
    for (let j = i+1; j < words.length; j++) {
        let next=words[j];
        if(current.includes(next)){
            set.add(next);
        }
        if(next.includes(current)){
            set.add(current);
        }
    }
  }
  return Array.from(set);
};