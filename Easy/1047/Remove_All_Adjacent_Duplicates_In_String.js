/**
 * Remove All Adjacent Duplicates In String
 */
let removeDuplicates = function(s) {
    let queue=[];
    for (let i = 0; i < s.length; i++) {
        if(queue.length>0 && s[i]==queue[queue.length-1]){
            queue.pop();
        }else{
            queue.push(s[i]);
        }        
    }
    return queue.join('');
};