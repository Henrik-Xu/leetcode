/**
 * Maximum Number of Balls in a Box
 */
var countBalls = function(lowLimit, highLimit) {
    let count=new Array(46).fill(0),max=0;
    for (let i = lowLimit; i <= highLimit; i++) {
        let sum=0;
        let num=i;
        while(num>0){
            sum+=num%10;
            num=Math.floor(num/10);
        }
        count[sum]++;
        max=Math.max(max,count[sum]);
    }
    return max;
};