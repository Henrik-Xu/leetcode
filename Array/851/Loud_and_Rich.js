/**
 * Loud and Rich
 */
let loudAndRich = function(richer, quiet) {
    let n=quiet.length;
    let richMap=new Map();
    for (const [rich,poor] of richer) {
        if(richMap.has(poor)){
            richMap.get(poor).push(rich);
        }else{
            richMap.set(poor,[rich]);
        }
    } 
    let res=new Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
        dfs(i,richer,richMap,quiet,res);
    }
    return res;
};
let dfs=function(i,richer,richMap,quiet,res){
    if(res[i]>=0)return res[i];
    res[i]=i;
    if(!richMap.has(i))return res[i];
    let richList=richMap.get(i);
    for (const j of richList) {
        let richest=dfs(j,richer,richMap,quiet,res);
        if(quiet[res[i]]>quiet[richest]){
            res[i]=richest;
        }
    }
    return res[i];
}
let richer = [[1,0],[2,1],[3,1],[3,7],[4,3],[5,3],[6,3]], quiet = [3,2,5,4,6,1,7,0];
let res=loudAndRich(richer,quiet);
console.log(res);