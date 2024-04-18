/**
 * Spiral Matrix II
 */
var generateMatrix = function(n) {
    let r1=0,r2=n-1,c1=0,c2=n-1;
    let i=1;
    let matrix=new Array(n).fill(0).map(()=>new Array(n).fill(0));
    while (r1<=r2 && c1<=c2) {
        for(let c=c1;c<=c2;c++)matrix[r1][c]=i++;
        for(let r=r1+1;r<=r2-1;r++)matrix[r][c2]=i++;
        if(r1<r2 && c1<c2){
            for(let c=c2;c>=c1;c--)matrix[r2][c]=i++;
            for(let r=r2-1;r>r1;r--)matrix[r][c1]=i++;
        }
        r1++;
        r2--;
        c1++;
        c2--;
    }
    return matrix;
};
let n=3;
let res=generateMatrix(n);
console.log(res);