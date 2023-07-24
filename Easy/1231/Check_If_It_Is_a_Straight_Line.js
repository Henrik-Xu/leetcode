/**
 * Check If It Is a Straight Line
 */
let checkStraightLine = function(coordinates) {
    let [x0,y0]=coordinates[0],[x1,y1]=coordinates[1];
    let dx=x1-x0,dy=y1-y0;
    for (let i = 2; i < coordinates.length; i++) {
        let x=coordinates[i][0],y=coordinates[i][1];
        if(dy*(x-x0)!=dx*(y-y0)){
            return false;
        }
    }
    return true;
};
let coordinates = [[4,8],[-2,8],[1,8],[8,8],[-5,8],[0,8],[7,8],[5,8]];
let res=checkStraightLine(coordinates);
console.log(res);