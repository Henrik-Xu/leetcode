/**
 * Ransom Note
 */
let canConstruct = function(ransomNote, magazine) {
    let arr=new Array(26).fill(0);
    for (let i = 0; i < magazine.length; i++) {
        arr[magazine[i].charCodeAt(0)-97]++;        
    }
    for (let i = 0; i < ransomNote.length; i++) {     
        if(--arr[ransomNote[i].charCodeAt(0)-97]<0){
            return false;
        }
    }
    return true;
};
let ransomNote='a',magazine='b';
let res=canConstruct(ransomNote,magazine);
console.log(res);