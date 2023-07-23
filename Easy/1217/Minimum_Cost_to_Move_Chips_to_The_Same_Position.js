/**
 * Minimum Cost to Move Chips to The Same Position
 */
let minCostToMoveChips = function(position) {
    let odd=0,even=0;
    for (const p of position) {
        if(p%2!=0){
            odd++;
        }else{
            even++;
        }
    }
    return odd>even?even:odd;
};