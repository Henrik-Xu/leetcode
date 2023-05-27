/**
 * Hand of Straights
 */
let isNStraightHand = function(hand, groupSize) {
   hand.sort((a,b)=>a-b);
   let map=new Map();
   for (const h of hand) {
    if(map.has(h)){
        map.set(h,map.get(h)+1);
    }else{
        map.set(h,1);
    }
   }
   for (const h of hand) {
    if(map.get(h)>0){
        for (let i = groupSize-1; i>=0;i--) {
            if(!map.has(h+i)||map.get(h+i)==0){
                return false;
            }
            map.set(h+i,map.get(h+i)-1);
        }
    }
   }
   return true;
};
let hand = [1,1,2,2,3,3], groupSize = 3;
let res=isNStraightHand(hand,groupSize);
console.log(res);