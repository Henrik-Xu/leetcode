/**
 * To Be Or Not To Be
 */
var expect = function(val) {
    toBe = function(expected) {
        if(val===expected) {
            return true;
        }else{
            throw new Error("Not Equal");
        }
    }
    
    notToBe=function(expected) {
        if(val!==expected) {
            return true;
        }else{
            throw new Error("Equal");
        }
    }
    return {toBe,notToBe};
};
