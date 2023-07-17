/**
 * Fair Candy Swap
 */
let fairCandySwap = function(aliceSizes, bobSizes) {
    let sumA=aliceSizes.reduce((accumulator,current)=>accumulator+current,0);
    let sumB=bobSizes.reduce((accumulator,current)=>accumulator+current,0);
    let diff=(sumA-sumB)/2;
    let set=new Set();
    for (const alice of aliceSizes) {
        set.add(alice);
    }
    for (const bob of bobSizes) {
        if(set.has(bob+diff)){
            return [bob+diff,bob];
        }
    }
};