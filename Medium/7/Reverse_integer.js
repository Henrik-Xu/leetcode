
/**
 * Reverse Integer
 */
var reverse = function(x) {
    let max_int=Math.pow(2,31)-1;
    let min_int=Math.pow(-2,31);
    let result=0;
    while(x!=0){
        if(result>max_int/10||result<min_int/10) return 0;  //overflow check
        result=result*10+x%10;
        x=parseInt(x/10);
    }
    return result;
};