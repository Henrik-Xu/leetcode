/**
 * Goal Parser Interpretation
 */
var interpret = function(command) {
    let sb='';
    for (let i = 0; i < command.length; i++) {
        if(command[i]==='G'){
            sb+='G';
        }else if(command[i]==='(' && command[i+1]===')'){
            sb+='o';
            i+=1;
        }else{
            sb+='al';
            i+=3;
        }
    }
    return sb;
};