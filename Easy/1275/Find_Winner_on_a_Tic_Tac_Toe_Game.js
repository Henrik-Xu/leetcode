/**
 * Find Winner on a Tic Tac Toe Game
 */
var tictactoe = function(moves) {
    let aRows=new Array(3).fill(0),aCols=new Array(3).fill(0),bRows=new Array(3).fill(0),bCols=new Array(3).fill(0);
    let aD=0,aSk=0,bD=0,bSk=0;
    for (let i = 0; i < moves.length; i++) {
        let [x,y]=moves[i];
       if(i%2==0){
        if(++aRows[x]==3 || ++aCols[y]==3 || x==y&&++aD==3 || x+y==2&&++aSk==3)return 'A';
       }else{
        if(++bRows[x]==3 || ++bCols[y]==3 || x==y&&++bD==3 || x+y==2&&++bSk==3)return 'B';
       } 
    }
    return moves.length==9?"Draw":"Pending";
};
let moves = [[0,2],[1,0],[2,2],[1,2],[2,0],[0,0],[0,1],[2,1],[1,1]];
let res=tictactoe(moves);
console.log(res);