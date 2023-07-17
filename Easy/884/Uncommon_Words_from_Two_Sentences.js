/**
 * Uncommon Words from Two Sentences
 */
let uncommonFromSentences = function(s1, s2) {
    let map=new Map();
    let res=[];
    for (const s of (s1+' '+s2).split(' ')) {
        if(map.has(s)){
           map.set(s,map.get(s)+1);
        }else{
           map.set(s,1);
        }
    }
    for (const [s,count] of map.entries()) {
        if(count==1){
            res.push(s);
        }
    }
    return res;
};