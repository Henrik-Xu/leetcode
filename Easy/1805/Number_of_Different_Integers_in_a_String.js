/**
 * Number of Different Integers in a String
 */
var numDifferentIntegers = function(word) {
    let set=new Set();
    for (let i = 0; i < word.length; i++) {
        let sb='';
        while(i<word.length && !isNaN(word[i])){
            sb+=word[i];
            i++;
        }
        if(sb!= '' && !isNaN(sb)){
            set.add(BigInt(sb));
        }  
    }
    return set.size;
};


let word='a1b01c001';
let res=numDifferentIntegers(word);
console.log(res);