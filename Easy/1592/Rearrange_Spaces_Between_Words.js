/**
 * Rearrange Spaces Between Words
 */
var reorderSpaces = function(text) {
    if(text.length==1)return text;
    let space =' '.charCodeAt(0),count=0;
    for (let i = 0; i < text.length; i++) {
        if(text[i].charCodeAt(0)==space){
            count++;
        }
    }
    let res='';
    let arr=text.trim().split(/\s+/);
    if(arr.length==1){
        res+=arr[0];
        for (let j = 0; j < count; j++) {
            res+=' ';
        }
        return res;
    }
    let average=Math.floor(count/(arr.length-1));
    for (let i = 0; i < arr.length; i++) {
        res+=arr[i];
        for (let j = 0; j < average && i!=arr.length-1; j++) {
            res+=' ';
        }
    }
    if(count%(arr.length-1)!=0){
        let remain=count-average*(arr.length-1)
        for (let j = 0; j < remain; j++) {
            res+=' ';
        }
    }
    return res;
};
let text = "a";
let res=reorderSpaces(text);
console.log(res);