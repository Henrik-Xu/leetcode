#### Tree

树是一些节点的集合。这个集合可以是空集；若不是空集，则由树（root）的节点 r 以及 0 个或多个非空的子树 T1,T2, ... ,TK 组

成。这些子树中每一颗的根都来自根 r 的一条有向的边（edge）所连结。

Concept: A tree is a collection of entities called nodes. Nodes are connected by edges. Each node contains a value of date.

and it may or may not have a child node.

- Root: root is the topmost node of the tree.

- Edge: edge is the link between two nodes.

- Child: child is a node that has a parent node.

- Parent: parent is a node that has an edge to a child node.

- Leaf：leaf is a node that does not have a child node in the tree.

- Height: height is the length of the longest path to a leaf.

- Depth: depth is the length of the path to its root.

#### 二叉树（binary tree）

二叉树是一颗树，其中每个节点都不能多于两个节点。

Binary tree: *In computer science, a binary tree is a tree data structure in which each node has at the most two children,*

*which are referred to as the left child and the right child.*

> wikipedia

#### 二叉查找树

使二叉树成为二叉查找树的性质是，对于树中的每个节点 X , 它的左子树中所有项的值小于 X 中的项。 而它的右子树中的所有项

的值大于 X 中的项。这意味着该树所有的元素可以用某种一致的方式排序。

Binary Search Tree: “A bianry search tree is sometimes called ordered or sorted binary trees, and it keep its values in

sorted order, so that lookup and other operations can use the principle of binary search” - Wikipedia

```js
class BinaryNode{
    Object element;
    BinaryNode left;
    BinaryNode right;
}
```

#### 二叉树遍历

A Tree is tipically traversed in two ways:

    * Breadth First Travesal --> 广度优先遍历
    * Depth First Travesal -->深度优先遍历
      * Inorder Travesal(Left-Root-Right) --> 中序遍历
      * Preorder Travesal(Root-Left-Right) --> 前序遍历
      * Postorder Travesal(Left-Right-Root) --> 后序遍历

无论先序、中序、后序对节点的考察（不一定输出），顺序都是一样的。

先序：考察到一个节点后，即刻输出该节点的值，并继续遍历其左右子树。 --> 根左右

中序：考察到一个节点后，将其暂存，遍历完左子树后，再输出该节点的值，然后遍历右子树。 --> 左根右

后序：考察到一个节点后，将其暂存，遍历完左右子树后，再输出该节点的值。 --> 左右根

方式： 对于二叉树的遍历，我们既可以递归，也可以用循环，下面我们用代码展示两种方式的细节。

1. Level Order Travesal

recrusive
```js
let levelorder=function(root){
    let result =[];
    let getArray = function(node,index){
        if(node==null)return;
        if(index>result.length){
            result[index]=[];
        }
        result[index].push(node.val);
        getArray(node.left,index+1);
        getArray(node.right,index+1);
    }
    getArray(root,0);
    return result;
}
```

iteration
```js
let levelorder = function(root){
    if(root==null)return;
    let levels=[];
    let queue=[root];
    while(queue.length!=0){
        let length = queue.length;
        let level = [];
        for(let i =0;i++;i<length){
            let current=queue.shift();
            level.push(current.val);
            if(current.left){
                queue.push(current.left);
            }
            if(current.right){
                queue.push(current.right);
            }
        }
        levels.push(level);
    }
    return levels;
}
```

2. 前序遍历--> 根左右

recrusive
```js
let preorder = function(root){
    let result = [];
    recrusive(root,result);
    return result;
}

function recrusive(root,result){
    if(root==null)return;
    result.push(root.val);
    recrusive(root.left,result);
    recursive(root.right,result);
}
```

preorder
```js
let preorder = function(root){
    if(root==null)return;
    let result = [];
    let stack=[root];
    while(stack.length!=0){
        let current = stack.pop();
        result.push(current.val);
        if(current.left){
            stack.push(current.left);
        }
        if(current.right){
            stack.push(current.right);
        }
    }
    return result;
}
```

3. 中序遍历--> 左根右

recrusive
```js
let inorder = function(root){
    let result =[];
    recrusive(root,result);
    return result;
}
function recrusive(root,result){
    if(root==null)return;
    recrusive(root.left,result);
    result.push(root.val);
    recrusive(root.right,result);
}
```

iteration
```js
let inorder = function(root){
    if(root==null)return;
    let result = [];
    let queue=[];
    let current = root;
    while(queue.length!=0 || current!=null){
        while(current!=null){
            queue.push(current);
            current = current.left;
        }
        current = queue.pop();
    }
}
```

4. 后序遍历--> 左右根
   
recrusive
```js
let postorder =function(root){
    let result =[];
    recrusive(root,result);
    return result;
}
function recrusive(root,result){
    if(root==null)return;
    recrusive(root.left,result);
    recrusive(root.right,result);
    result.push(root.val);
}
```

iteration
```js
let postorder =function(root){
    if(root==null)return;
    let result = [];
    let stack=[root];
    while(stack.length!=0){
        let current=stack.pop();
        result.unshift(current.val);
        if(current.left){
            stack.push(current.left);
        }
        if(current.right){
            stack.push(current.right);
        }
    }
    return result;
}
```