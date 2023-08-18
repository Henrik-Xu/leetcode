/**
 * Root Equals Sum of Children
 */
var checkTree = function(root) {
  return root.val===root.left.val+root.right.val;  
};