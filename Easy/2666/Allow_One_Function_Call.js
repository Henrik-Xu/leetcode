/**
 * Allow One Function Call
 */
var once = function(fn) {
    let hasCalled=false;
    return function(...args){
        if(hasCalled)return undefined;
        hasCalled=true;
        return fn(...args);
    }
};