/**
 * Reformat Phone Number
 */
let reformatNumber = function(number) {
    let numArr=[];
    for (let i = 0; i < number.length; i++) {
        if(number[i]==' '||number[i]=='-'||number[i]=='/'){
            continue;
        }
        numArr.push(number[i]);
    }
    let res = ''
    while(numArr.length >= 4){
        numArr.length == 4 ? 
            res += numArr.splice(0,2).join('') +'-'+numArr.splice(0,2).join('') : 
            res += numArr.splice(0,3).join('') + '-'    
    }
    res += numArr.join('')
    return res;
};
let number = "1-23-45 678";
let arr=reformatNumber(number);
console.log(arr);