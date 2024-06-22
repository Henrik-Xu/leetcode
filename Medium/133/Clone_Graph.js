/**
 * Clone Graph
 */
function Node(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
};
   
/**
* @param {_Node} node
* @return {_Node}
*/
var cloneGraph2= function(node) {
    let map=new Map();
    let dfs=function(node){
        if(!node)return node;
        if(!map.has(node.val)){
            map.set(node.val,new Node(node.val));
            map.get(node.val).neighbors=node.neighbors.map(dfs);
        }
        return map.get(node.val);
    }
    return dfs(node);
};

var cloneGraph = function(node) {
    if(!node)return node;
    let map=new Map();
    map.set(node.val,new Node(node.val));
    let stack=[node];
    while (stack.length!=0) {
        let current=stack.shift();
        for (const neighbor of current.neighbors) {
            if(!map.has(neighbor.val)){
                map.set(neighbor.val,new Node(neighbor.val));
                stack.push(neighbor);
            }
            map.get(current.val).neighbors.push(map.get(neighbor.val));
        }
    }
    return map.get(node.val);
};