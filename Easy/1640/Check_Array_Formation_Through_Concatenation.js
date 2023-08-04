/**
 * Check Array Formation Through Concatenation
 */
var canFormArray = function(arr, pieces) {
    const map = new Map(); 
    pieces.forEach(piece => map.set(piece[0], piece)); 
	let res=[];
    for (const num of arr) {
        if(map.has(num)){
            res.push(...map.get(num));
        }
    }
    if(arr.length!=res.length){
        return false;
    }
    return arr.every((num, i) => num === res[i]);
};
let arr = [15,88], pieces = [[88],[15]];
let res=canFormArray(arr,pieces);
console.log(res);