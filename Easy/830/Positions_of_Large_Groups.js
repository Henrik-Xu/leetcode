/**
 * Positions of Large Groups
 */
let largeGroupPositions = function(s) {
    let res=[];
    let start=0;
    for (let i = 1; i < s.length; i++) {
        while(s[i]==s[i-1]){
            i++;
        }
        if(i-start>=3){
            res.push([start,i-1]);
        }
        start=i;
    }
    return res;
};
let s = "abcdddeeeeaabbbcd"
let res=largeGroupPositions(s);
console.log(res);