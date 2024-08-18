/**
 * Min Stack
 */

var MinStack = function() {
    this.stack=[];
    this.minStack=[];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.minStack.length==0 || val<=this.getMin()){
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if(this.stack.length!=0){
        let val=this.stack.pop();
        if(val==this.getMin()){
            this.minStack.pop();
        }
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    if(this.stack.length!=0){
        return this.stack[this.stack.length-1];
    }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    if(this.minStack.length!=0){
        return this.minStack[this.minStack.length-1];
    }
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * */
 var obj = new MinStack();
 obj.push(0);
 obj.push(1);
 obj.push(0);
let res=obj.getMin();
obj.pop();
res=obj.getMin();
console.log(res);