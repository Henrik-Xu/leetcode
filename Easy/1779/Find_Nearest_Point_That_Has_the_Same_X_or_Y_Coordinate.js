/**
 * Find Nearest Point That Has the Same X or Y Coordinate
 */
var nearestValidPoint = function(x, y, points) {
 let min=-1,index=0;
 for (let i = 0; i < points.length; i++) {
    let [px,py]=points[i];
    if(x==px||y==py){
        let dist=Math.abs(x-px)+Math.abs(y-py)
        if(min==-1||dist<min){
            min=dist;
            index=i;
        }
    }
 }
 return index; 
};