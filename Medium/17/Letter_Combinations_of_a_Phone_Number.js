/**
 * Letter Combinations of a Phone Number
 */
var letterCombinations = function(digits) {
    if(digits.length==0)return [];
    let map =new Map([
        ['2', ['a','b','c']],
        ['3', ['d','e','f']],
        ['4', ['g','h','i']],
        ['5', ['j','k','l']],
        ['6', ['m','n','o']],
        ['7', ['p','q','r','s']],
        ['8', ['t','u','v']],
        ['9', ['w','x','y','z']]
    ]);
    let res=[''];
    let arr=digits.split('');
    for (let i = 0; i < arr.length; i++) {
        let tempArr=[];
        let stack=map.get(arr[i]);
        for (let i = 0; i < res.length; i++) {
            for (let s = 0; s < stack.length; s++) {
                tempArr.push(res[i]+stack[s]);
            }
        }
        res=tempArr;   
    }
    return res;
};

let digits =
"23";
let res=letterCombinations(digits);
console.log(res);