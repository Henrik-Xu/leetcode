/**
 * Delete Characters to Make Fancy String
 */
var makeFancyString = function(s) {
    let sb=s[0],prev=s[0],count=1;
    for(let i=1;i<s.length;i++){
        if(s[i]===prev){
            count++;
        }else{
            count=1;
        }
        if(count<3){
            sb+=s[i];
        }
        prev=s[i];
    }
    return sb;
};
let s = "leeetcode";
let res=makeFancyString(s);
console.log(res);