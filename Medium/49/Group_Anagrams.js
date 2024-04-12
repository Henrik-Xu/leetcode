/**
 * Group Anagrams
 */
var groupAnagrams = function(strs) {
    let map=new Map();
    for (const str of strs) {
        let key=[...str].sort().join('');
        if(map.has(key)){
            map.get(key).push(str);
        }else{
            map.set(key,[str]);
        }
    }
    let res=[];
    for (const value of map.values()) {
        res.push(value);
    }
    return res;
};
let strs = ["eat","tea","tan","ate","nat","bat"];
let res=groupAnagrams(strs);
console.log(res);