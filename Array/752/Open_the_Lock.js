/**
 * Open the Lock
 */
let openLock = function(deadends, target) {
    let deadSet=new Set(deadends);
    if(deadSet.has('0000'))return -1;
    let begins=new Set();
    begins.add('0000');
    let ends=new Set();
    ends.add(target);
    let steps;
    for (steps = 0; begins.size!=0 && ends.size!=0; steps++) {
        let temp=new Set();
        for (const current of begins) {
            if(ends.has(current))return steps;
            if(deadSet.has(current))continue;
            deadSet.add(current);
            for (let i = 0; i < 4; i++) {
                let x=current.charCodeAt(i)-'0'.charCodeAt(0);
                for (let diff = -1; diff<= 1; diff+=2) {
                    let y=(x+diff+10)%10;
                    let neighbor=current.substring(0,i)+(""+y)+current.substring(i+1);
                    temp.add(neighbor);
                }
            }
        }
        begins=ends;
        ends=temp;
    }
    return -1;
};
let deadends = ["0201","0101","0102","1212","2002"], target = "0202";
let res=openLock(deadends,target);
console.log(res);