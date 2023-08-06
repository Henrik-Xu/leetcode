/**
 * Latest Time by Replacing Hidden Digits
 */
var maximumTime = function(time) {
    let times=[...time];
    if(time[0]=='?'){
        times[0]=times[1]<=3||times[1]=='?'?'2':'1';
    }
    if(time[1]=='?'){
        times[1]=times[0]=='2'?'3':'9';
    }
    if(time[3]=='?'){
        times[3]='5';
    }
    if(time[4]=='?'){
        times[4]='9';
    }
    return times.join('');
}
let time="?0:15";
let res=maximumTime(time);
console.log(res);