/**
 * Best Poker Hand
 */
var bestHand = function(ranks, suits) {
    let set=new Set(suits);
    if(set.size==1)return "Flush";
    let map=new Map();
    for(let i=0;i<ranks.length;i++){
        map.set(ranks[i],(map.get(ranks[i])||0)+1);
    }
    let max=0;
    for(let value of map.values()){
        if(value>max)max=value;
    }
    if(max>=3){
        return "Three of a Kind";
    }else if(max==2){
        return "Pair";
    }else{
        return "High Card";
    
    }
};
let ranks = [13,2,3,1,9], suits = ["a","a","a","a","a"];
let res=bestHand(ranks,suits);
console.log(res);