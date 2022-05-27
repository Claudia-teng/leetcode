// version 1
// DFS
// recursive
// O(n) runtime complexity
// O(h) space complexity

var invertTree = function(root) {
  if (!root) return null;
  
  const temp = root.left;
  root.left = root.right;
  root.right = temp;
  
  invertTree(root.left);
  invertTree(root.right);
  
  return root;
};

// version 2
// BFS
// iterative
// O(n) runtime complexity
// O(n) space complexity

var invertTree = function(root) {
  if (!root) return null;
  let currentNode = root;
  let queue = [];
  queue.push(root);
  
  while (queue.length > 0) {
      currentNode = queue.shift();
      const temp = currentNode.left;
      currentNode.left = currentNode.right;
      currentNode.right = temp;
      if (currentNode.left) {
          queue.push(currentNode.left);
      }
      if (currentNode.right) {
          queue.push(currentNode.right);
      }
  }
  
  return root;
};

// version 3
// BFS
// recursive
// O(n) runtime complexity
// O(n) space complexity

var invertTree = function(root) {
  if (!root) return null;
  
  function breadthFirstSearchR(queue) {
    if (!queue.length) return;
    
    const currentNode = queue.shift();
    const temp = currentNode.left;
    currentNode.left = currentNode.right;
    currentNode.right = temp;

    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    return breadthFirstSearchR(queue);
  }

  breadthFirstSearchR([root]);
  return root;
};

