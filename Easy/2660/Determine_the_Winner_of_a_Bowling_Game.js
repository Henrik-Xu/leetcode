/**
 * Determine the Winner of a Bowling Game
 */
var isWinner = function(player1, player2) {
    let n=player1.length;
    let sum1=0,sum2=0;
    for (let i = 0; i < n; i++) {
        if((i-1>=0 && player1[i-1]===10) || (i-2>=0 &&player1[i-2]==10)){
            sum1+=2*player1[i];
        }else{
            sum1+=player1[i];
        }
        if((i-1>=0 && player2[i-1]===10) || (i-2>=0 &&player2[i-2]==10)){
            sum2+=2*player2[i];
        }else{
            sum2+=player2[i];
        }
    }
    if(sum1==sum2)return 0;
    return sum1>sum2?1:2;
};