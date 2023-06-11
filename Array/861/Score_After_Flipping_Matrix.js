/**
 * Score After Flipping Matrix
 */
let matrixScore = function(grid) {
    let M=grid.length,N=grid[0].length,score=(1<<(N-1))*M;
    for (let j = 1; j < N; j++) {
        let count=0;
        for (let i = 0; i < M; i++) {
            count+=grid[i][j]==grid[i][0]?1:0;
        }
        count=count>(M-count)?count:M-count;
        score+=count*(1<<(N-j-1));
    }
    return score;
};
let grid = [
    [0,0,1,1],
    [1,0,1,0],
    [1,1,0,0]
];
let res=matrixScore(grid);
console.log(res);