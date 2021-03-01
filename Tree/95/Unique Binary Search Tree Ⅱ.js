function TreeNode(val){
    this.val = val;
    this.left = this.right = null;
}

let generateTrees = function(n){
    if(n==0)return;
    let arr = constructTrees(1,n);
    return arr;
}

let constructTrees = function(start,end){
    let arr = [];
    if(start>end){
        return [null];
    }
    if(start==end){
        arr.push(new TreeNode(start));
        return arr;
    }
    for (let i = start; i <= end; i++) {
        let leftSubtree = constructTrees(start,i-1);
        let rightSubtree = constructTrees(i+1,end);
        for (let j = 0; j < leftSubtree.length; j++) {
            const left = leftSubtree[j];
            for (let k = 0; k < rightSubtree.length; k++) {
                const right = rightSubtree[k];
                let node = new TreeNode(i);
                node.left = left;
                node.right = right;
            }
        }
    }
    return arr;
}