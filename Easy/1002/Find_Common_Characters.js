/**
 * Find Common Characters
 */
let commonChars = function(words) {
    let res=[];
    let count=new Array(26).fill(-1);
    let a='a'.charCodeAt(0);
    for (let i = 0; i < words.length; i++) {
        let word=words[i];
        let arr=new Array(26).fill(0);
        for (let j = 0; j < word.length; j++) {
            arr[word[j].charCodeAt(0)-a]++;            
        }
        for (let i = 0; i < 26; i++) {
            if(count[i]==-1){
                count[i]=arr[i];
            }else{
                count[i]=Math.min(arr[i],count[i]);
            }            
        }
    }
    for (let i = 0; i < count.length; i++) {
        let c=count[i];
        while (c-->0) {
            res.push(String.fromCharCode(a+i));
        }
    }
    return res;
};