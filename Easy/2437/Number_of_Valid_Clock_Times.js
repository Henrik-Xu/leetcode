/**
 * Number of Valid Clock Times
 */
var countTime = function(time) {
    let ans=1;
    if(time[4]=='?')ans=ans*10;
    if(time[3]=='?')ans=ans*6;
    if(time[0]=='?'&&time[1]=='?'){
        ans*=24;
    }else{
        if(time[1]=='?'){
            if(time[0]=='2'){
                ans*=4;
            }else{
                ans*=10;
            }
        }
        if(time[0]=='?'){
            if(parseInt(time[1])<=3){
                ans*=3;
            }else{
                ans*=2;
            }
        }
    }
    return ans;
};
let time ="2?:??";
let res=countTime(time);
console.log(res);
