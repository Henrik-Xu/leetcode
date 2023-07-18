/**
 * Verifying an Alien Dictionary
 */
let isAlienSorted = function(words, order) {
    let map=new Map();
    for (let i = 0; i < order.length; i++) {
        map.set(order[i],i);        
    }
    for (let i = 1; i < words.length; i++) {
        let isSorted=isSort(words[i-1],words[i],map);
        if(!isSorted){
            return false;
        }        
    }
    return true;
};
let isSort=function(wordA,wordB,map){
    let A=wordA.length,B=wordB.length;
    let i=0;
    while (i<A) {
        if(wordB[i]==null || map.get(wordA[i])>map.get(wordB[i])){
            return false;
        }else if(map.get(wordA[i])<map.get(wordB[i])){
            return true;
        }
        i++;
    }
    return true;
}