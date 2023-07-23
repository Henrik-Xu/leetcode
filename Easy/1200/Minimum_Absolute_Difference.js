/**
 * Minimum Absolute Difference
 */
let minimumAbsDifference = function(arr) {
    arr.sort((a,b)=>a-b);
    let min=Number.MAX_SAFE_INTEGER,res=[];
    for (let i = 1; i < arr.length; i++) {
        let diff =arr[i]-arr[i-1]
        if(min==diff){
            res.push([arr[i-1],arr[i]]);
        }else if(min>diff){
            min=diff;
            res=[];
            res.push([arr[i-1],arr[i]]);
        }
    }
    return res;
};
let arr = [4,2,1,3];
let res=minimumAbsDifference(arr);
console.log(res);