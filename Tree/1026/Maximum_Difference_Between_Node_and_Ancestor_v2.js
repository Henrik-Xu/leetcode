let maxAncestorDiff = function(root) {
  let helper = function(root, curMax, curMin) {
    if (!root) return curMax - curMin;
    curMax = Math.max(curMax, root.val);
    curMin = Math.min(curMin, root.val);
    let left = helper(root, curMax, curMin);
    let right = helper(root, curMax, curMin);
    return Math.max(left, right);
  };
  return helper(root, root.val, root.val);
};
