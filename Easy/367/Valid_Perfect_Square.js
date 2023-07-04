/**
 * Valid Perfect Square
 */
let isPerfectSquare = function(num) {
    let low=0,high=num;
    while (low<=high) {
        let middle=low+Math.floor((high-low)/2);
        if(middle==num/middle){
            return true;
        }else if(middle<num/middle){
            low=middle+1;
        }else{
            high=middle-1;
        }
    }
    return false;
};
let num=14;
let res=isPerfectSquare(num);
console.log(res);