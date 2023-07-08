/**
 * Minimum Index Sum of Two Lists
 */
let findRestaurant = function(list1, list2) {
    let res = [],min = list1.length+list2.length;
    let map = new Map();
    for (let i = 0; i < list1.length; i++) {
        map.set(list1[i],i);
    }
    for (let i = 0; i < list2.length; i++) {
        if(map.has(list2[i])){
            let sum = i+map.get(list2[i]);
            if(min == sum){
                res.push(list2[i]);
            }else if(min>sum){
                min = sum;
                res = [];
                res.push(list2[i]);
            }
        }
    }
    return res;
};