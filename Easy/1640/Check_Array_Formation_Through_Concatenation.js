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
    for(let i=0;i<arr.length;i++){
        if(arr[i]!=res[i]){
            return false;
        }
    }
    return true;
};
let arr = [15,88], pieces = [[88],[15]];
let res=canFormArray(arr,pieces);
console.log(res);