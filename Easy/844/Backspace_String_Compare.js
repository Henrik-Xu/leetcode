/**
 * Backspace String Compare
 */
let backspaceCompare = function(s, t) {
    let queue1=[],queue2=[];
    for (let i = 0; i < s.length; i++) {
        if(s[i]=='#'){
            queue1.pop();
        }else{
            queue1.push(s[i]);
        }     
    }
    for (let i = 0; i < t.length; i++) {
        if(t[i]=='#'){
            queue2.pop();
        }else{
            queue2.push(t[i]);
        }        
    }
    return queue1.join('')==queue2.join('');
};
let s ="a##c",t ="#a#c";
let res=backspaceCompare(s,t);
console.log(res);