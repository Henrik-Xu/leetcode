/**
 * Finding 3-Digit Even Numbers
 */
var findEvenNumbers = function(digits) {
    let count=new Array(10).fill(0);
    for (const num of digits) {
        count[num]++;
    }
    let res=[];
    for (let i = 100; i < 1000; i+=2) {
        let first=i%10,second=Math.floor(i/10)%10,third=Math.floor(i/100);
        count[first]--;
        count[second]--;
        count[third]--;
        if (count[first]>=0 && count[second]>=0 && count[third]>=0) {
            res.push(i);
        }
        count[first]++;
        count[second]++;
        count[third]++;
    }
    return res;
};
let digits = [2,1,3,0];
let res=findEvenNumbers(digits);
console.log(res);