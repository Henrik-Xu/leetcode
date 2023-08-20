/**
 * Minimum Recolors to Get K Consecutive Black Blocks
 */
var minimumRecolors = function(blocks, k) {
    let back=0,front=0,count=0,res=Number.MAX_SAFE_INTEGER;
    while (front<blocks.length) {
        if (blocks[front]=='W') {
            count++;
        }
        if (front-back+1==k) {
            res=Math.min(res,count);
            if (blocks[back]=='W') {
                count--;
            }
            back++;
        }
        front++;
    } 
    return res;
};
let blocks = "WBBWWBBWBW", k = 7;
let res=minimumRecolors(blocks,k);
console.log(res);