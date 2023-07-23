/**
 * Find Words That Can Be Formed by Characters
 */
let countCharacters = function(words, chars) {
    let map=new Map();
    for (let i = 0; i < chars.length; i++) {
        if(map.has(chars[i])){
            map.set(chars[i],map.get(chars[i])+1);
        }else{
            map.set(chars[i],1);
        }
    }
    let res=0;
    for (const word of words) {
        res+=calculateLength(new Map([...map]),word);
    }
    return res;
};
let calculateLength=function(map,word) {
    for (let i = 0; i < word.length; i++) {
        if(!map.has(word[i])){
            return 0;
        }else{
            map.set(word[i],map.get(word[i])-1);
            if(map.get(word[i])==0){
                map.delete(word[i]);
            }
        }
    }
    return word.length;
}
let words = ["cat","bt","hat","tree"], chars = "atach";
let res =countCharacters(words,chars);
console.log(res);