/**
 * Make Two Arrays Equal by Reversing Subarrays
 */
var canBeEqual = function(target, arr) {
    let map=new Map();
    for (let i = 0; i < arr.length; i++) {
        if(!map.has(arr[i])){
            map.set(arr[i],1);
        }else{
            map.set(arr[i],map.get(arr[i])+1);
        }
        if(!map.has(target[i])){
            map.set(target[i],-1);
        }else{
            map.set(target[i],map.get(target[i])-1);
        }
    }
    for (const value of map.values()) {
        if(value!=0){
            return false;
        }
    }
    return true;
};