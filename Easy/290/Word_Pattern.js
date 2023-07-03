/**
 * Word Pattern
 */
let wordPattern = function(pattern, s) {
    let words=s.split(' ');
    if(words.length!=pattern.length){
        return false;
    }
    let mapPattern=new Map();
    let mapS=new Map();
    for (let i = 0; i < words.length; i++) {
       if(mapPattern.get(pattern[i])!=mapS.get(words[i])){
        return false;
       }
        mapPattern.set(pattern[i],i+1);
        mapS.set(words[i],i+1);
    }
    return true;
};
let pattern = "abba", s = "dog cat cat fish";
let res=wordPattern(pattern,s);
console.log(res);