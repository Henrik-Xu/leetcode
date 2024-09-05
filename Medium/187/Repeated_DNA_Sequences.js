/**
 * Repeated DNA Sequences
 */
var findRepeatedDnaSequences = function(s) {
    let res=[];
    let map=new Map();
    for (let i = 0; i < s.length-10; i++) {
        let str=s.substring(i,i+10);
        if(map.has(str)){
            map.set(str,map.get(str)+1);
        }else{
            map.set(str,1);
        }
    }
    for (const [str,count] of map) {
        if(count>1){
            res.push(str);
        }
    }
    return res;
};
let s="AAAAAAAAAAA";
let res=findRepeatedDnaSequences(s);
console.log(res);