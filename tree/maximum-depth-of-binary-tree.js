// version 1

var maxDepth = function(root) {
  let depth = 0;
  
  function dfs(node, level) {
    // base case 
    if (!node) return; 
    
    // recursive case

    // we need this if condition as node.right execute later than node.left,
    // if right's depth is shorter than the left's, the ans will be wrong
    if (level > depth) depth = level;  

    dfs(node.left, level+1);
    dfs(node.right, level+1);
  }
  
  dfs(root, 1);
  return depth;
};

// version 2

var maxDepth = function(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left) , maxDepth(root.right));
};