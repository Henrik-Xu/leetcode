/**
 * Isomorphic Strings
 */
let isIsomorphic = function(s, t) {
   let map1=new Array(256).fill(0);
   let map2=new Array(256).fill(0);
   for (let i = 0; i < s.length; i++) {
    if(map1[s.charCodeAt(i)]!=map2[t.charCodeAt(i)]){
        return false;
    }
    map1[s.charCodeAt(i)]=i+1;
    map2[t.charCodeAt(i)]=i+1;
   }
    return true;
};
let s = 'badc', t = 'baba';
let res=isIsomorphic(s,t);
console.log(res);