/**
 * Word Search
 */
var exist = function(board, word) {
    let m=board.length,n=board[0].length;
    let dirs=[[-1,0],[1,0],[0,1],[0,-1]];
    let go=function(x,y,k){
        if(board[x][y]!=word[k])return false;
        if(k==word.length-1)return true;
        board[x][y]='*';
        for (const [dx,dy] of dirs) {
            const i=x+dx;
            const j=y+dy;
            if(i>=0 && i<m && j>=0 && j<n){
                if(go(i,j,k+1)){
                    return true;
                }
            }
        }
        board[x][y]=word[k];
        return false;
    }
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if(go(i,j,0)){
                return true;
            }
        }
    }
    return false;
};
let board = [
    ["A", "B", "C", "E"], 
    ["S", "F", "C", "S"], 
    ["A", "D", "E", "E"]
], word = "ABCCED";
let res=exist(board,word);
console.log(res);