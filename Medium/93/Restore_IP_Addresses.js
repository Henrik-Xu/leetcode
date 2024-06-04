/**
 * Restore IP Addresses
 */
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    if(s.length<4 || s.length>12){
        return [];
    }
    let res=[];

    let isValid=function(s){
        if(s.length>3){
            return false;
        }
        if(s.length==1){
            return true;
        }
        if(s[0]=='0'){
            return false;
        }
        if(s.length==2){
            return true;
        }
        if(s[0]>2){
            return false;
        }
        if(s[0]=='2' && s[1]>5){
            return false;
        }
        if(s[0]==2 && s[1]=='5' && s[2]>5){
            return false;
        }
        return true;
    }

    let backtracking=function(segements,i,j){
        if(i==s.length){
            if(segements.length==4){
                res.push(segements.join('.'));
            }
            return;
        }
        let originSegement=segements[j];
        let newSegement=s[i];
        if(isValid(originSegement+s[i])){
            segements[j]=originSegement+s[i];
            backtracking(segements,i+1,j);
            segements[j]=originSegement;
        }
        if(originSegement.length>0 && segements.length<4){
            segements.push(newSegement);
            backtracking(segements,i+1,j+1);
            segements.pop();
        }
        return;
    }

    backtracking([''],0,0);
    return res;
};
