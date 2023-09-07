/**
 * Split Strings by Separator
 */
var splitWordsBySeparator = function(words, separator) {
    let res=[];
    for (const word of words) {
        let temp='';
        for (let i = 0; i < word.length; i++) {
            if(word[i]===separator){
                if(temp!==''){
                    res.push(temp);
                    temp='';
                }
            }else{
                temp+=word[i];
            }
        }
        if(temp!==''){
            res.push(temp);
        }
    }
    return res;
};