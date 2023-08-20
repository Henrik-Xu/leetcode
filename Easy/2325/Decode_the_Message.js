/**
 * Decode the Message
 */
var decodeMessage = function(key, message) {
    let seen=new Set(),map=new Map();
    let first='',a='a'.charCodeAt(0);
    for (let i = 0; i < key.length; i++) {
        const element = key[i];
        if(element==' ')continue;
        if(first=''){
            first=element;
            seen.add(first);
            map.set(first,'a');
            continue;
        }
        if(!seen.has(element)){
            seen.add(element);
            map.set(element,String.fromCharCode(a+map.size));
        }
    }
    let res='';
    for (let i = 0; i < message.length; i++) {
        const element = message[i];
        if(element==' ')res+=' ';
        else if(map.has(element))res+=map.get(element);
        else res+=element;
    }
    return res;
};