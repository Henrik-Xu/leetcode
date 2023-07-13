/**
 * Goat Latin
 */
let toGoatLatin = function(sentence) {
    let arr=sentence.split(' ') ;
    let str='';
    let set=new Set(['a','e','i','o','u','A','E','I','O','U']);
    for (let i = 0; i < arr.length; i++) {
        let word=arr[i];       
        if(!set.has(word[0])){
         let temp=word[0];
         str+=word.substring(1)+temp;
        }else{
            str+=word;
        }
        str+='ma';
        for (let j = 0; j <=i; j++) {
            str+='a';           
        }
        if(i!=arr.length-1){
            str+=' ';
        }
    }
    return str;
 };