/**
 * Number Of Rectangles That Can Form The Largest Square
 */
var countGoodRectangles = function(rectangles) {
    let max=-1,count=0;
    for (let i = 0; i < rectangles.length; i++) {
        let side=rectangles[i][0] > rectangles[i][1]?rectangles[i][1]:rectangles[i][0];
        if(side>max){
            max=side;
            count=1;
        }else if(side==max){
            count++;
        }
    }
    return count;
};