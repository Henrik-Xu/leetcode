/**
 * Design an Ordered Stream
 */
var OrderedStream = function(n) {
    this.ptr=0;
    this.res=new Array(n);
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    let list=[];
    this.res[idKey-1]=value;
    while (this.ptr<this.res.length&&this.res[this.ptr]!=null) {
        list.push(this.res[this.ptr]);
        this.ptr++;
    }
    return list;
};
let n=5;
var obj = new OrderedStream(n);
let res=obj.insert(3, "ccccc");
res=obj.insert(1, "aaaaa");
res=obj.insert(2, "bbbbb");
res=obj.insert(5, "eeeee");
res=obj.insert(4, "ddddd");