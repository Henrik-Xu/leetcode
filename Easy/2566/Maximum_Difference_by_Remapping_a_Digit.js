/**
 *  Maximum Difference by Remapping a Digit
 */
var minMaxDifference = function(num) {
    let numMax=num.toString().split(''),numMin=num.toString().split(''),n=numMax.length;
    let labelMax='',labelMin='';
    for (let i = 0; i < n; i++) {
        if(labelMax==''&&numMax[i]!=9){
            labelMax=numMax[i];
            numMax[i]='9';
        }else if(numMax[i]==labelMax){
            numMax[i]='9';
        }
        if(labelMin==''){
            labelMin=numMin[i];
            numMin[i]='0';
        }else if(numMin[i]==labelMin){
            numMin[i]='0';
        }
    }
    return parseInt(numMax.join(''))-parseInt(numMin.join(''));
};