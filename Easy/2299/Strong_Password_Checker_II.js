/**
 * Strong Password Checker II
 */
var strongPasswordCheckerII = function(password) {
    //"!@#$%^&*()-+".
    if(password.length < 8) return false;
    let hasLower=false,hasUpper=false,hasDigit=false,hasSpecial=false;
    let setSpeicial=new Set("!@#$%^&*()-+".split(''));
    for(let i=0;i<password.length;i++){
        if(i>0 && password[i]==password[i-1]) return false;   
        if(password[i].charCodeAt()>=97 && password[i].charCodeAt()<=122) hasLower=true;
        else if(password[i].charCodeAt()>=65 && password[i].charCodeAt()<=90) hasUpper=true;
        else if(password[i].charCodeAt()>=48 && password[i].charCodeAt()<=57) hasDigit=true;
        else if(setSpeicial.has(password[i])) hasSpecial=true;
    }
    return hasLower && hasUpper && hasDigit && hasSpecial;
};