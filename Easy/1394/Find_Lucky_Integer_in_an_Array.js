/**
 * Find Lucky Integer in an Array
 */
let findLucky = function(arr) {
    let map=new Map();
    for (const num of arr) {
        if(map.has(num)){
            map.set(num,map.get(num)+1);
        }else{
            map.set(num,1);
        }
    }
    let max=-1;
    for (const [key,value] of map.entries()) {
        if(key==value){
            max=Math.max(max,key);
        }
    }
    return max;
};