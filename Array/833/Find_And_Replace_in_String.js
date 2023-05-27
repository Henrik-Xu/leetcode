/**
 * Find And Replace in String
 */
let findReplaceString = function(s, indices, sources, targets) {
   let map=new Map();
   for (let i = 0; i < indices.length; i++) {
        if(s.startsWith(sources[i],indices[i])){
            map.set(indices[i],i);
        }   
   } 
   let i=0;
   let res='';
   for (; i<s.length; ) {
    if(map.has(i)){
        let index=map.get(i);
        res+=targets[index];
        i+=sources[index].length;
    }else{
        res+=s[i];
        i++;
    }
   }
   return res;
};
let  s = "abcd", indices = [0, 2], sources = ["ab", "ec"], targets = ["eee", "ffff"];
let res=findReplaceString(s,indices,sources,targets);
console.log(res);