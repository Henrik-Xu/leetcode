/**
 * Merge Similar Items
 */
var mergeSimilarItems = function(items1, items2) {
    let map=new Map();
    for (const [value,weight] of items1) {
        map.set(value,weight);
    }
    for (const [value,weight] of items2) {
        map.set(value,(map.get(value)||0)+weight);
    }   
    let res=[];
    for (const [value,weight] of map) {
        res.push([value,weight]);
    }
    res.sort((a,b)=>a[0]-b[0]);
    return res;
};
let items1 = [[1,1],[4,5],[3,8]], items2 = [[3,1],[1,5]];
let res=mergeSimilarItems(items1,items2);
console.log(res);