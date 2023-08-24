/**
 * Count Days Spent Together
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    
    const arriveAliceDate = new Date('2001-'+arriveAlice);
    const leaveAliceDate = new Date('2001-'+leaveAlice);
    const arriveBobDate = new Date('2001-'+arriveBob);
    const leaveBobDate = new Date('2001-'+leaveBob);
    
    let arriveMax = new Date(Math.max(arriveAliceDate, arriveBobDate));
    let leaveMin = new Date(Math.min(leaveAliceDate, leaveBobDate));
    
    if(arriveMax>leaveMin) return 0;
    return Math.floor((leaveMin-arriveMax)/(1000*60*60*24))+1;
  };
let arriveAlice = "08-15", leaveAlice = "08-18", arriveBob = "08-16", leaveBob = "08-19";
let res=countDaysTogether(arriveAlice,leaveAlice,arriveBob,leaveBob);
console.log(res);