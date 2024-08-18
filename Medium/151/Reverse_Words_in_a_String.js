/**
 * Reverse Words in a String
 */
var reverseWords = function(s) {
    let res='';
    let word='';
    for (let i = 0; i < s.length; i++) {
        if(s[i]==' '){
            if(word.length!=0){
               if(res.length==0){
                res=word;
               }else{
                res=word+' '+res;
               }
               word='';
            }
            continue;
        }
        word+=s[i];  
    }
    if(word.length!=0){
        if(res.length==0){
         res=word;
        }else{
         res=word+' '+res;
        }
     }
    return res;
};
let s =
"the sky is blue";
let res=reverseWords(s);
console.log(res);