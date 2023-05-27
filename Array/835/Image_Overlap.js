/**
 * Image Overlap
 */
let largestOverlap = function(img1, img2) {
   let N=img1.length;
   let LA=[],LB=[];
   for (let i = 0; i < N*N; i++) {
    if(img1[Math.floor(i/N)][i%N]==1){
        LA.push(Math.floor(i/N)*100+i%N);
    }
    if(img2[Math.floor(i/N)][i%N]==1){
        LB.push(Math.floor(i/N)*100+i%N);
    }
   }
   let count=new Map();
   for (const A of LA) {
    for (const B of LB) {
        if(count.has(A-B)){
            count.set(A-B,count.get(A-B)+1);
        }else{
            count.set(A-B,1);
        }
    }
   }
   let res=0;
   for (const value of count.values()) {
    res=Math.max(res,value);
   }
   return res;
};
let img1 = [[1,0],[1,0]], img2 = [[0,1],[1,0]];
let res=largestOverlap(img1,img2);
console.log(res);