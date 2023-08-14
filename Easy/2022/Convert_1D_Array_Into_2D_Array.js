/**
 * Convert 1D Array Into 2D Array
 */
var construct2DArray = function(original, m, n) {
    let len=original.length;
    if(len!=m*n)
        return [];
    let res=new Array(m);
    for(let i=0;i<m;i++)
        res[i]=new Array(n);
    for(let i=0;i<m;i++)
        for(let j=0;j<n;j++)
            res[i][j]=original[i*n+j];
    return res;
};