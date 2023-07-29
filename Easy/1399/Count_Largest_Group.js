/**
 * Count Largest Group
 */
var countLargestGroup = function(n) {
    let map=new Map();
    let max=-1;
    for (let i = 1; i <=n; i++) {
        let key=dsum(i);
        if(map.has(key)){
            map.set(key,map.get(key)+1);
        }else{
            map.set(key,1);
        }
        max=Math.max(max,map.get(key));
    }
    let count=0;
    for (const value of map.values()) {
        if(value==max){
            count++;
        }
    }
    return count;
};
let dsum=function(num){
    return num==0?0:num%10+dsum(Math.floor(num/10));
}
let n=13;
let res=countLargestGroup(n);
console.log(res);