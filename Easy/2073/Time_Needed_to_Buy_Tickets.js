/**
 * Time Needed to Buy Tickets
 */
var timeRequiredToBuy = function(tickets, k) {
    let count=0;
    for(let i=0;i<tickets.length;i++){
        count+=Math.min(i>k?tickets[k]-1:tickets[k],tickets[i]);
    }
    return count;
};