// version 1
// find the middle point and add to tree

var sortedArrayToBST = function (nums) {
  return insert(0, nums.length - 1);

  function insert(left, right) {
    if (left > right) return; // base case

    let middle = Math.floor((left + right) / 2);
    let root = new TreeNode(nums[middle]);
    root.left = insert(left, middle - 1);
    root.right = insert(middle + 1, right);
    return root;
  }
};
