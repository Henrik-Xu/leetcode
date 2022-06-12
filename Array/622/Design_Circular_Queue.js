/**
 * Design Circular Queue
 * Implementation the MyCircularQueue class:

MyCircularQueue(k) Initializes the object with the size of the queue to be k.
int Front() Gets the front item from the queue. If the queue is empty, return -1.
int Rear() Gets the last item from the queue. If the queue is empty, return -1.
boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
boolean isEmpty() Checks whether the circular queue is empty or not.
boolean isFull() Checks whether the circular queue is full or not.
 */
/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
    this.data = new Array(k);
    this.maxSize = k;
    this.head = 0;
    this.tail = -1;
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if(this.isFull())return false;
    this.tail = (this.tail+1)%this.maxSize;
    this.data[this.tail] = value;
    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if(this.isEmpty())return false;
    if(this.head === this.tail){
        this.head = 0;
        this.tail = -1;
    }else{
        this.head = (this.head+1)%this.maxSize;
    }
    return true;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    return this.isEmpty()?-1:this.data[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    return this.isEmpty()?-1:this.data[this.tail];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.tail === -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return !this.isEmpty() && (this.tail+1) % this.maxSize === this.head;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */