/**
 * X of a Kind in a Deck of Cards
 */
let hasGroupsSizeX = function(deck) {
    let map=new Map();
    for (const d of deck) {
        if(map.has(d)){
            map.set(d,map.get(d)+1);
        }else{
            map.set(d,1);
        }
    }
    let res=0;
    for (const group of map.values()) {
       res=gcd(group,res);
    }
    return res>1;
};
let gcd=function(a,b){
    return b>0? gcd(b,a%b):a;
}
let deck = [1,1,1,2,2,2,3,3];
let res=hasGroupsSizeX(deck);
console.log(res);