/**
 * Take Gifts From the Richest Pile
 */
const pickGifts = (gifts, k) => {


    for(let i = 0; i < k; i++){
        gifts.sort((a,b) => a - b)
        let newEl = Math.floor(Math.sqrt(gifts.pop()))
        gifts.push(newEl)
    }
    return gifts.reduce((a,b) => a + b)
};
let gifts = [25,64,9,4,100], k = 4;
let res=pickGifts(gifts, k);
console.log(res);