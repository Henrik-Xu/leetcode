/**
 * Implement Stack using Queues
 */
var MyStack = function() {
    this.queue = [];
    this.tmp = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
MyStack.prototype.push = function(x) {
    this.queue.push(x);
};

/**
 * @returns {void}
 */
MyStack.prototype.pop = function() {
    while (this.queue.length > 1){
        this.tmp.push(this.queue.shift());
    }
    let res =this.queue.shift();
    this.queue = this.tmp;
    this.tmp = [];
    return res;
};

/**
 * @returns {number}
 */
MyStack.prototype.top = function() {
    while (this.queue.length > 1){
        this.tmp.push(this.queue.shift());
    }
    var ele = this.queue.shift();
    this.tmp.push(ele);
    this.queue = this.tmp;
    this.tmp = [];
    return ele;
};

/**
 * @returns {boolean}
 */
MyStack.prototype.empty = function() {
    return this.queue.length === 0;
    
};