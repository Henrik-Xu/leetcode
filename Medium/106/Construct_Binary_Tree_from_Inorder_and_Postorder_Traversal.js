let buildTree = function (inorder, postorder) {
    if (inorder == null || inorder.length == 0) return null;
    if (inorder.length == 1) return new TreeNode(inorder[0]);
    let findIndex = function (target) {
      for (let i = 0; i < inorder.length; i++) {
        if (inorder[i] == target) {
          return i;
        }
      }
      return -1;
    }
    let rootIndex = inorder.length - 1;
    let construct = function (start, end) {
      if (start > end) return null;
      let root = new TreeNode(postorder[rootIndex--]);
      let index = findIndex(root.val);
      root.right = construct(index + 1, end);
      root.left = construct(start, index - 1);
      return root;
    }
    return construct(0, inorder.length - 1);
  };