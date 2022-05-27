// version 1
// DFS
// recursive
// O(n) runtime complexity
// O(h) space complexity

var isValidBST = function(root) {
  return checkBST(root, Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER)

  function checkBST(node, left, right) {
    if (!node) return true;
    if ((left >= node.val) || (right <= node.val)) return false;

    return checkBST(node.left, left, node.val)
          && checkBST(node.right, node.val, right)
  }
};
