/**
 * Relative Ranks
 */
let findRelativeRanks = function(score) {
    let map = new Map();
    let copy = [...score];
    copy.sort((a,b)=>b-a);
    for (let i = 0; i < copy.length; i++) {
        map.set(copy[i],i);
    }
    let res = [];
    for (const s of score) {
        let index = map.get(s);
        let rank = '';
        if(index == 0){
            rank = 'Gold Medal';
        }else if(index == 1){
            rank = 'Silver Medal';
        }else if(index == 2){
            rank = 'Bronze Medal';
        }else{
            rank = index + 1 + '';
        }
        res.push(rank);
    }
    return res;
};

let score = [10,3,8,9,4];
let res = findRelativeRanks(score);
console.log(res);