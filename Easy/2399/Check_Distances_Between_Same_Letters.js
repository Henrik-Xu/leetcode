/**
 * Check Distances Between Same Letters
 */
var checkDistances = function(s, distance) {
    let map=new Map();
    let a='a'.charCodeAt(0);
    for (let i = 0; i < s.length; i++) {
        if(map.has(s[i])){
            if(distance[s[i].charCodeAt(0)-a]!=i-map.get(s[i])-1)
                return false;
        }else{
            map.set(s[i],i);
        }
    }
    return true;
};