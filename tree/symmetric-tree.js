// version 1
// invert right subtree then compare
// O(n) runtime complexity
// O(h) space complexity

var isSymmetric = function (root) {
  if (!root.left && !root.right) return true;
  if (!root.left && root.right && root.left && !root.right) return false;

  root.right = invertTree(root.right);
  return isSameTree(root.left, root.right);

  function invertTree(root) {
    if (!root) return null;

    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    invertTree(root.left);
    invertTree(root.right);

    return root;
  }

  function isSameTree(p, q) {
    if (!p && !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
};

// version 2
// DFS
// recursive
// O(n) runtime complexity
// O(h) space complexity

var isSymmetric = function (root) {
  return checkSymmetric(root.left, root.right);

  function checkSymmetric(left, right) {
    if (!left && !right) return true;
    if ((!left && right) || (left && !right)) return false;
    if (left.val !== right.val) return false;
    return (
      checkSymmetric(left.left, right.right) &&
      checkSymmetric(left.right, right.left)
    );
  }
};
