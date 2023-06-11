/**
 * Car Fleet
 */
let carFleet = function(target, position, speed) {
    let map=new Map();
    let n=position.length;
    for (let i = 0; i < n; i++) {
        map.set(position[i],(target-position[i])/speed[i]);
    }
    position.sort((a,b)=>b-a);
    let res=0,last=-1;
    for (const p of position) {
        let count=map.get(p);
        if(count>last){
            last=count;
            res++;
        }
    }
    return res;
};
let target = 10, position = [8,3,7,4,6,5], speed =[4,4,4,4,4,4];
let res=carFleet(target,position,speed);
console.log(res);