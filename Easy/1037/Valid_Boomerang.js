/**
 * Valid Boomerang
 */
let isBoomerang = function(p) {
    return (p[0][0] - p[1][0]) * (p[0][1] - p[2][1]) != (p[0][1] - p[1][1]) *(p[0][0] - p[2][0]);
};
let points = [[1,1],[2,3],[3,2]];
let res=isBoomerang(points);
console.log(res);