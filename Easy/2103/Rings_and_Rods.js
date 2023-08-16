/**
 * Rings and Rods
 */
var countPoints = function(rings) {
    let map=new Map();
    for (let i = 0; i < rings.length; i+=2) {
        let num=rings[i+1],color=rings[i];
        if (map.has(num)) {
            map.set(num,map.get(num).concat(color));
        }else{
            map.set(num,[color]);
        }      
    }
    let count=0;
    for (const colors of map.values()) {
        let set=new Set(colors);
        count+=set.size==3?1:0;
    }
    return count;
};
let rings = "B0B6G0R6R0R6G9";
let res=countPoints(rings);
console.log(res);