/**
 * Student Attendance Record I
 */
let checkRecord = function(s) {
    let absent=0,consecutiveLate=0;
    for (let i = 0; i < s.length; i++) {
        if(s[i]=='A'){
            absent++;
            if(absent>=2){
                return false;
            }
        }
        if(s[i]=='L'){
            consecutiveLate++;
            if(consecutiveLate==3){
                return false;
            }
        }else{
            consecutiveLate=0;
        }
    }
    return true;    
};
let s = "LALL";
let res=checkRecord(s);
console.log(res);