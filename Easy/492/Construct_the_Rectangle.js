/**
 * Construct the Rectangle
 */
let constructRectangle = function(area) {
    let L=Math.floor(Math.sqrt(area));
    while (area%L!=0) {
        L--;
    }
    return [area/L,L];
};