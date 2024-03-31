/**
 * Count and Say
 */
var countAndSay = function(n) {
    let res='1';
    for (let i = 1; i < n; i++) {
        let arr=res.split('');
        let count=1;
        res='';
        for (let j = 0; j < arr.length; j++) {
            if(arr[j]==arr[j+1]){
                count++;
            }else{
                res+=count+arr[j];
                count=1;
            }
        }
    }
    return res;
};
let n = 4;
let res=countAndSay(n);
console.log(res);